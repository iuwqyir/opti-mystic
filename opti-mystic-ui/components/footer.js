import * as React from "react";
import {Container, Box, Typography, Paper} from "@mui/material";
import Image from "next/image";


export default function GuestFooter() {
  return (
      <Box sx={{ width: 1, bgcolor:'background.paper', position:'absolute', p:1,  display: 'flex', bottom:'0', justifyContent: 'center'}}>
          <Typography variant="caption" color="initial">
                ❤️ built with love by Optimists at ETH Global Lisbon 2023 ❤️
          </Typography>
      </Box>
  );
}
