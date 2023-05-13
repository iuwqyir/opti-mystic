import React, { useState } from 'react';
import { Box, ImageList, ImageListItem, Pagination, List, ListItem, Button } from '@mui/material';
import styles from "@/styles/Home.module.css";

const generateDummyEntries = (count) => {
  const entries = [];
  for (let i = 0; i < count; i++) {
    entries.push({
      admin: `0x7F4e33e1C80Df11bEcc8E6e15634b80A1F6A846a`,
      batcher: `0x7F4e33e1C80Df11bEcc8E6e15634b80A1F6A846a`, 
      proposer: `0x7F4e33e1C80Df11bEcc8E6e15634b80A1F6A846a`, 
      sequencer: `0x7F4e33e1C80Df11bEcc8E6e15634b80A1F6A846a`, 
      blockHash: `0xf975564d62334ac2a950c2ec842c136642c70a42eda4f4fb9fca8901ed26a882`, 
      timestamp: 1683398728 * 100
    });
  }
  return entries;
};

const itemsPerPage = 9;

const Discovery = () => {
  const [page, setPage] = useState(1);

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  const entries = generateDummyEntries(30);

  const paginatedEntries = entries
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className={styles.discovery}>
      <ImageList container cols={3} gap={2}>
        {paginatedEntries.map((entry, index) => (
        <Button  sx={{ padding: 0}}>
          <ImageListItem key={index} item className={styles.rollupCard}>
            <List>
                <ListItem>admin: {entry.admin}</ListItem>
                <ListItem>batcher: {entry.batcher}</ListItem>
                <ListItem>sequencer: {entry.sequencer}</ListItem>
                <ListItem>deployed at: {new Date(entry.timestamp).toLocaleString()}</ListItem>
            </List>
          </ImageListItem>
        </Button>
        ))}
      </ImageList>
      {entries.length > itemsPerPage && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Pagination
            count={Math.ceil(entries.length / itemsPerPage)}
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
