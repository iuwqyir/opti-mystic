import Head from "next/head";
import { useState } from "react";
import {Container, IconButton, Box, Typography, Link } from '@mui/material';
import styles from "@/styles/Home.module.css";
import { lightTheme, darkTheme } from '../styles/theme.js'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from "../components/header.js";
import SearchComp from "../components/search.js";
import Discovery from "../components/discovery.js";

export default function Home() {

  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
  };


  return (
    <>
      <Head>
        <title>Opti Mystic</title>
        <meta name="description" content="Cross optimistic roll-up explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className={styles.main}>
          <Header />
          <SearchComp />
          <Discovery/> 
        </div>
    </ThemeProvider>
    </>
  );
}