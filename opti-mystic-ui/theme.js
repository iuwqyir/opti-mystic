// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Customize colors for light theme here
  },
  // Add any other theme customization for light theme here
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Customize colors for dark theme here
  },
  // Add any other theme customization for dark theme here
});

export { lightTheme, darkTheme };