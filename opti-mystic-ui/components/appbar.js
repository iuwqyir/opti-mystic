import * as React from 'react';
import { AppBar, Toolbar, Typography, Container, Image} from '@mui/material';
import Logo from "../public/assets/logo.png";

export default function Header() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Image src={Logo} alt="Opti-Mystic Logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The Optimistic Cross Roll Up Explorer
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
