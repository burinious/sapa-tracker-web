import { alpha, createTheme } from "@mui/material/styles";
import {
  COLORS,
  RADIUS,
  SHADOWS,
  TYPOGRAPHY,
  MOTION,
} from "./designSystem";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
      dark: COLORS.primaryDark,
      light: COLORS.primaryLight,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: COLORS.baseDark,
      dark: "#000000",
      light: COLORS.baseDarkSoft,
      contrastText: "#FFFFFF",
    },
    background: {
      default: COLORS.backgroundDefault,
      paper: COLORS.surface,
    },
    text: {
      primary: COLORS.baseDark,
      secondary: COLORS.textSecondary,
    },
    success: {
      main: COLORS.success,
    },
    divider: COLORS.divider,
  },
  shape: {
    borderRadius: RADIUS.base,
  },
  typography: {
    fontFamily: TYPOGRAPHY.fontFamily,
    h1: {
      fontWeight: TYPOGRAPHY.heroTitle.weight,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontWeight: TYPOGRAPHY.sectionTitle.weight,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: TYPOGRAPHY.button.weight,
      textTransform: "none",
      letterSpacing: TYPOGRAPHY.button.letterSpacing,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.default, 0.76),
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
          boxShadow: "none",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: RADIUS.pill,
          paddingInline: theme.spacing(2.5),
          paddingBlock: theme.spacing(1.1),
          transition: MOTION.buttonTransition,
          boxShadow: "none",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: SHADOWS.buttonHover,
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
          borderRadius: RADIUS.card,
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
          boxShadow: SHADOWS.card,
          backgroundImage: "none",
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
          borderRadius: RADIUS.accordion,
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
