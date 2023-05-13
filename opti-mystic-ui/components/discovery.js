"use client";

import React, { useEffect, useState } from 'react';
import { Box, ImageList, ImageListItem, Pagination, List, ListItem, Button, ListItemText, ListItemIcon, SvgIcon } from '@mui/material';
import styles from "@/styles/Home.module.css";
import truncateEthAddress from 'truncate-eth-address';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StormOutlinedIcon from '@mui/icons-material/StormOutlined';
import LinkIcon from '@mui/icons-material/Link';
import goerliIcon from '../public/assets/goerli.svg';
import maticIcon from '../public/assets/matic.svg';
import optimismIcon from '../public/assets/optimism.svg';
import Image from "next/image";
import axios from 'axios';


const itemsPerPage = 9;

const Discovery = () => {
  const [page, setPage] = useState(1);
  const [rollups, setRollups]=useState([]);

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchRollups = async () => {
      const { data: rollups, error} = await axios.get(`/api/getRollups`);
      setRollups(rollups)
      return rollups
    }

    fetchRollups()

    const interval=setInterval(() => {
      fetchRollups()
      console.log('This will run every second!');
    }, 3000);

    return () => clearInterval(interval);

  }, [])


  const paginatedEntries = rollups
    .sort((a, b) => new Date(a.detected_at)-new Date(b.detected_at))
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const [rollup, setRollup] = useState(0);

  const [open, setOpen] = useState(false);

  const handleClickOpen = (entry) => {
    setRollup(entry)
    setOpen(true);
  };

  const handleClose = () => {
    setRollup(null)
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
  });

  return (
    <div className={styles.discovery}>
      <ImageList container cols={3} gap={10}>
        {paginatedEntries.map((entry, index) => (
        <Button  sx={{
          padding: 0,
          ':hover': {
            bgcolor: '#000000',
          }
          }} onClick={() => handleClickOpen(entry)}>
          <ImageListItem key={index} item sx={{ width: 1}}>
            <List 
              sx={{
                bgcolor: 'background.paper', 
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'background.border',
                borderRadius: '10px',
                color: 'text.primary',
                fontFamily: 'Roboto', 
                textTransform: 'none',
                fontWeight: 'normal'
              }}>
                <ListItem sx={{ height: 34}}>
                  <ListItemIcon sx={{ color:'primary.light'}}>
                    <AdminPanelSettingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Admin" sx={{width: 1 / 10}} />
                  <ListItemText primary={truncateEthAddress(entry.admin)}  />
                </ListItem>
                <ListItem sx={{ height: 34}}>
                  <ListItemIcon sx={{ color:'primary.light'}}>
                    <BatchPredictionOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Batcher" sx={{width: 1 / 10}}/>
                  <ListItemText primary={truncateEthAddress(entry.batcher)}  />
                </ListItem>
                <ListItem sx={{ height: 34}}>
                  <ListItemIcon sx={{ color:'primary.light'}}>
                    <AnimationOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sequencer" sx={{width: 1 / 10}} />
                  <ListItemText primary={truncateEthAddress(entry.sequencer)}  />
                </ListItem>
                <ListItem sx={{ height: 34}}>
                  <ListItemIcon sx={{ color:'primary.light'}}>
                    <AccessTimeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Deployed at" sx={{width: 2 / 8}} />
                  <ListItemText primary={new Date(entry.l1_start_time * 1000).toLocaleString()}  />
                </ListItem>
                <ListItem sx={{ height: 34, width: 2/3}}>
                  <ListItemIcon sx={{ color:'primary.light'}}>
                    <StormOutlinedIcon />
                  </ListItemIcon>
                    <ListItemText primary="L1"/>
                    <Image src={entry.l1_chain_name == 'goerli' ? goerliIcon : maticIcon } alt="chain logo" width={15} height={15}/>
                    <ListItemText primary="L2" sx={{ ml:8}}/>
                    <Image src={optimismIcon} alt="chain logo" width={15} height={15} />
                </ListItem>
            </List>
          </ImageListItem>
        </Button>
        ))}
      </ImageList>
      {rollups.length > itemsPerPage && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Pagination
            count={Math.ceil(rollups.length / itemsPerPage)}
            page={page}
            onChange={handlePaginationChange}
            variant="outlined"
            shape="rounded"
            size="large"
            color="primary"
          />
          <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}>
            <Toolbar>
              <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
            <RolloutDialog rollup={rollup}/>
          </Dialog>

        </Box>
      )}
    </div>
  );
};

export default Discovery;
