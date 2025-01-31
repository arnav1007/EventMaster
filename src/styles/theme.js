import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Modern Blue
    },
    secondary: {
      main: "#1565c0", // Slightly Darker Blue
    },
    background: {
      default: "#f5f5f5", // Light Grey for contrast
      paper: "#ffffff", // Clean white background for cards and modals
    },
    text: {
      primary: "#333333",
      secondary: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h5: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2",
          color: "#ffffff",
          borderRadius: "6px",
          fontWeight: "bold",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
