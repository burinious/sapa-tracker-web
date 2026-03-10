import { alpha, createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#116A64",
      dark: "#0D534F",
      light: "#3D8A84",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E98321",
      dark: "#C96A10",
      light: "#F3A253",
      contrastText: "#161616",
    },
    background: {
      default: "#FFFDF8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#172320",
      secondary: "#43504D",
    },
    success: {
      main: "#1D8C5A",
    },
    divider: "#E8E2D7",
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Sora", "Manrope", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Sora", "Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Sora", "Manrope", sans-serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 999,
          paddingInline: theme.spacing(2.25),
          paddingBlock: theme.spacing(1.05),
          transition: "transform 180ms ease, box-shadow 180ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: `0 10px 24px ${alpha(theme.palette.primary.main, 0.18)}`,
          },
          "&.Mui-disabled": {
            opacity: 0.65,
          },
          '&[aria-busy="true"]': {
            cursor: "progress",
            pointerEvents: "none",
            opacity: 0.72,
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 20,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 10px 35px rgba(23, 35, 32, 0.06)",
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 16,
          boxShadow: "none",
          "&:before": {
            display: "none",
          },
          "& + &": {
            marginTop: theme.spacing(1),
          },
        }),
      },
    },
  },
});
