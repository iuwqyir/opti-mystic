"use client";

import React, { useEffect, useState } from 'react';
import { Box, ImageList, ImageListItem, Pagination, List, ListItem, Button, ListItemText } from '@mui/material';
import styles from "@/styles/Home.module.css";
import truncateEthAddress from 'truncate-eth-address'
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
    
    const interval=setInterval(() => {
      fetchRollups()
      console.log('This will run every second!');
    }, 3000);

    return () => clearInterval(interval);

  }, [])
  

  const paginatedEntries = rollups
    .sort((a, b) => new Date(a.detected_at)-new Date(b.detected_at))
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className={styles.discovery}>
      <ImageList container cols={3} gap={2}>
        {paginatedEntries.map((entry, index) => (
        <Button  sx={{ padding: 0}}>
          <ImageListItem key={index} item sx={{ width: 1}}>
            <List 
              sx={{
                bgcolor: 'background.paper', 
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'background.border',
                color: 'text.primary', 
                fontFamily: 'Roboto', 
                textTransform: 'none',
                fontWeight: 'normal'
              }}>
                <ListItem> admin: {truncateEthAddress(entry.admin)} </ListItem>
                <ListItem>batcher: {truncateEthAddress(entry.batcher)}</ListItem>
                <ListItem>sequencer: {truncateEthAddress(entry.sequencer)}</ListItem>
                <ListItem>deployed at: {new Date(entry.l1_start_time * 1000).toLocaleString()}</ListItem>
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
        </Box>
      )}
    </div>
  );
};

export default Discovery;
