import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#101010",
      light: "#DB8189", 
      dark: "#8C001A",
    },
    secondary: {
      main: "#357DAB",
      light: "#3E9CD6", 
      dark: "#043F64", 
    },
    text: {
        primary: "#101010",
        secondary:"#033DDF", 
        disabled: "#312E2E", 
    },
    background: {
        paper: "#E4E4E4",
        default: "FFFFFF", 
    }, 
        action: {
        active: "#033DDF",
        hover: "#033DDF", 
        hoverOpacity: 0.4,
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
        main: "#FAC4C9",
        light: "#DB8189", 
        dark: "#8C001A",
    },
    secondary: {
        main: "#3E9CD6",
        light: "#90CAF9", 
        dark: "357DAB",
    },
    text: {
        primary: "#cccccc",
        secondary:"#DB8189", 
        disabled: "#312E2E", 

    },
    background: {
        paper: "#111111",
        default: "#212121", 
        border: "#303030"
    }, 
    action: {
        active: "#033DDF",
        hover: "#033DDF", 
        hoverOpacity: 0.4,
    }
  },
});

export { lightTheme, darkTheme };
