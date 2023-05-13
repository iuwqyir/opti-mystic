import * as React from 'react';
import Image from "next/image";
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

import logo from "../public/assets/logo-optimystic.png";

export default function Header() {
  return (
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ bgcolor:'background.paper'}}>
          <Toolbar disableGutters>
            <Image src={logo} alt="Opti-mystic logo" width={150}/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
                fontFamily: 'Rubik'
              }}
            >
              The Optimistic Cross Roll Up Explorer
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  );
}