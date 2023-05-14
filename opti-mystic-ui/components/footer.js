import * as React from "react";
import {Container, Box, Typography, Paper} from "@mui/material";
import Image from "next/image";


export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)', bottom: 0}} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          <Link href="/">
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
          </Link>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
                Built by Optimits at ETH Global
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
