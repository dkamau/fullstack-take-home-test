"use client";
import { Mulish } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const mulish = Mulish({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: mulish.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
        },
      },
    },
  },
});

theme.typography.h6 = {
  fontSize: "0.9rem",
  fontWeight: "bolder",
  color: "#335C6E",
};

export default theme;
