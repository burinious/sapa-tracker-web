import { alpha, createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#0071E3",
      dark: "#005BB5",
      light: "#3B91EC",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1D1D1F",
      dark: "#000000",
      light: "#333336",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F7",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1D1D1F",
      secondary: "#6E6E73",
    },
    success: {
      main: "#2F9E44",
    },
    divider: "#D2D2D7",
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily:
      '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 999,
          paddingInline: theme.spacing(2.5),
          paddingBlock: theme.spacing(1.1),
          transition: "transform 180ms ease, box-shadow 180ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: `0 12px 28px ${alpha(theme.palette.secondary.main, 0.18)}`,
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
          borderRadius: 28,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 12px 42px rgba(0, 0, 0, 0.06)",
          backgroundImage: "none",
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 20,
          boxShadow: "none",
          backgroundColor: alpha(theme.palette.common.white, 0.82),
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
