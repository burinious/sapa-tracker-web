export const COLORS = {
  primary: "#0071E3",
  primaryDark: "#005BB5",
  primaryLight: "#3B91EC",
  baseDark: "#1D1D1F",
  baseDarkSoft: "#333336",
  textSecondary: "#6E6E73",
  backgroundDefault: "#F5F5F7",
  surface: "#FFFFFF",
  divider: "#D2D2D7",
  success: "#2F9E44",
  securityBlue: "#66A6FF",
};

export const TYPOGRAPHY = {
  fontFamily:
    '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  navbarBrand: { size: "1rem", weight: 600, letterSpacing: "-0.02em" },
  heroTitle: {
    size: { xs: "2.25rem", sm: "3rem", md: "4.7rem" },
    weight: 700,
    lineHeight: { xs: 1.06, md: 0.98 },
    letterSpacing: "-0.04em",
  },
  sectionTitle: {
    size: { xs: "1.9rem", sm: "2.4rem", md: "3.15rem" },
    weight: 700,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
  },
  bodyLead: { size: { xs: "1.03rem", md: "1.3rem" }, lineHeight: 1.55 },
  overline: { weight: 600, letterSpacing: "0.08em" },
  button: { weight: 500, letterSpacing: "-0.01em" },
};

export const SPACING = {
  pagePaddingX: { xs: 1.6, sm: 2.4, md: 3.8 },
  pagePaddingBottom: { xs: 12, md: 13 },
  navHeight: { xs: 64, md: 74 },
  sectionHero: { pt: { xs: 5, md: 9 }, pb: { xs: 6, md: 9 } },
  sectionLg: { xs: 6, md: 9 },
  sectionMd: { xs: 6, md: 8 },
  sectionSm: { xs: 5, md: 7 },
  cardPaddingSm: { xs: 2.2, md: 2.8 },
  cardPaddingMd: { xs: 2.2, md: 3.4 },
  cardPaddingGlass: { xs: 1.4, md: 1.8 },
  scrollMarginTop: "94px",
};

export const RADIUS = {
  base: 24,
  card: 28,
  accordion: 20,
  pill: 999,
};

export const SHADOWS = {
  card: "0 12px 42px rgba(0, 0, 0, 0.06)",
  cardHover: "0 20px 45px rgba(0, 0, 0, 0.12)",
  buttonHover: "0 12px 28px rgba(29, 29, 31, 0.18)",
};

export const MOTION = {
  buttonTransition: "transform 180ms ease, box-shadow 180ms ease",
  cardTransition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
  fadeUp: { duration: 760, easing: "ease" },
  zoomIn: { duration: 920, easing: "ease" },
};

export const BACKGROUNDS = {
  page:
    "radial-gradient(1200px 560px at 50% -14%, rgba(0,113,227,0.13) 0%, rgba(245,245,247,0) 72%), radial-gradient(760px 360px at 50% 108%, rgba(29,29,31,0.08) 0%, rgba(245,245,247,0) 72%), #F5F5F7",
  mediaOverlay:
    "linear-gradient(180deg, rgba(255,255,255,0.02) 35%, rgba(0,0,0,0.16) 100%)",
  cta:
    "linear-gradient(140deg, rgba(0,113,227,0.96) 0%, rgba(38,130,230,0.96) 46%, rgba(100,168,238,0.96) 100%)",
};
