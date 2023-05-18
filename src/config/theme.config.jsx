/* eslint-disable react/prop-types */
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";


const   ThemPallet = {
  bg:"#23272c",
  bg2 : "#36383b",
  purple : "#17c2ed",
  font_main : '"Poppins" , monospace ',
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemPallet.bg,
    },
    primary: {
      main: ThemPallet.purple,
    },
    secondary: {
      main: ThemPallet.bg2,
    },
  },
  typography: {
    fontFamily: ThemPallet.font_main,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.7em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemPallet.error_main}`,
          background: ThemPallet.bg_error_main,
        },
        standardSuccess: {
          border: `1px solid ${ThemPallet.success_main}`,
          background: ThemPallet.bg_success_main,
        },
      },
    },
  },
});


export const ThemeConfig= ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
