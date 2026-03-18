import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { alpha, keyframes } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SectionHeader from "./components/SectionHeader";
import FeatureCard from "./components/FeatureCard";
import {
  BACKGROUNDS,
  COLORS,
  MOTION,
  SPACING,
  TYPOGRAPHY,
} from "./designSystem";
import incomeReviewStudentImg from "./assets/illustrations/sapatracker-income-review-student.png";
import dailyExpenseTrackingImg from "./assets/illustrations/sapatracker-daily-expense-tracking.png";
import spendingInsightsPiechartImg from "./assets/illustrations/sapatracker-spending-insights-piechart.png";
import smartDashboardDevicesImg from "./assets/illustrations/sapatracker-smart-dashboard-devices.png";
import secureLoginFintechImg from "./assets/illustrations/sapatracker-secure-login-fintech.png";
import androidAppInstallImg from "./assets/illustrations/sapatracker-android-app-install.png";

const OPEN_APP_URL = import.meta.env.VITE_OPEN_APP_URL || "/";
const APK_DOWNLOAD_URL =
  import.meta.env.VITE_APK_DOWNLOAD_URL ||
  "https://github.com/burinious/sapa-tracker/releases/download/android-latest/sapatracker.apk";
const PRIVACY_POLICY_URL = import.meta.env.VITE_PRIVACY_POLICY_URL || "/privacy";
const TERMS_URL = import.meta.env.VITE_TERMS_URL || "/terms";
const LOGO_SRC = "/assets/sapatracker-logo.svg";
const SECTION_SCROLL_MARGIN = SPACING.scrollMarginTop;

const navLinks = [
  { label: "Overview", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const trustPoints = [
  { label: "15k+", caption: "Expense logs tracked weekly" },
  { label: "2 min", caption: "Average setup time" },
  { label: "99.9%", caption: "Secure sign-in uptime" },
  { label: "24/7", caption: "Access on phone and web" },
];

const heroHighlights = [
  "Fast manual tracking",
  "Web and Android access",
  "Weekly spending clarity",
];

const features = [
  {
    icon: <AccountBalanceWalletRoundedIcon fontSize="small" />,
    title: "Income and expense tracking",
    description:
      "Log every inflow and outgoing transaction in one clean feed so your balance stays honest.",
  },
  {
    icon: <InsightsRoundedIcon fontSize="small" />,
    title: "Category spending insights",
    description:
      "Spot where money leaks by tracking transport, food, rent, data, and recurring payments.",
  },
  {
    icon: <DashboardRoundedIcon fontSize="small" />,
    title: "Smart dashboard overview",
    description:
      "See your current balance, top categories, and trend changes at a glance before you spend.",
  },
  {
    icon: <LockRoundedIcon fontSize="small" />,
    title: "Secure authentication",
    description:
      "Firebase-powered sign-in keeps access protected with trusted account and session controls.",
  },
  {
    icon: <DownloadForOfflineRoundedIcon fontSize="small" />,
    title: "Android APK delivery",
    description:
      "Launch quickly on mobile with a direct APK install flow designed for low-friction onboarding.",
  },
  {
    icon: <NotificationsActiveRoundedIcon fontSize="small" />,
    title: "Budget alert reminders",
    description:
      "Get gentle reminders before category spending crosses your weekly limit so you can adjust early.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create account",
    body: "Sign in, set your baseline categories, and start with your opening balance.",
  },
  {
    step: "02",
    title: "Track daily",
    body: "Add each spend or income event in seconds while everything is still fresh.",
  },
  {
    step: "03",
    title: "Review weekly",
    body: "Use insights to reduce overspending and protect your most important goals.",
  },
];

const faqs = [
  {
    question: "Who is SapaTracker for?",
    answer:
      "SapaTracker is built for students, freelancers, interns, and young professionals who need daily visibility into spending.",
  },
  {
    question: "Do I need to connect a bank account?",
    answer:
      "No. You can track manually from day one and still get useful weekly insights and category trends.",
  },
  {
    question: "Can I track both income and expenses?",
    answer:
      "Yes. Salary, side income, gifts, subscriptions, and cash spends all live in one place.",
  },
  {
    question: "Is the app secure?",
    answer:
      "Account access is handled with Firebase Authentication and standard encrypted traffic practices.",
  },
  {
    question: "How do I install the Android app?",
    answer:
      "Tap the Download Android APK button to get the latest Android package from the GitHub release.",
  },
];

const demoScreens = [
  {
    label: "Daily Expense Tracking",
    image: dailyExpenseTrackingImg,
    description: "Record spending instantly and keep your live balance accurate.",
  },
  {
    label: "Spending Insights",
    image: spendingInsightsPiechartImg,
    description: "Review category performance before small leaks become monthly stress.",
  },
  {
    label: "Income Review",
    image: incomeReviewStudentImg,
    description: "Compare inflows to targets and maintain predictable weekly cash flow.",
  },
];

const LEGAL_LAST_UPDATED = "March 12, 2026";

const privacySections = [
  {
    title: "Information We Collect",
    body: "We collect the minimum details needed to run SapaTracker safely and reliably.",
    bullets: [
      "Account profile details such as name, email address, and authentication identifiers.",
      "Transaction entries you create, including income and expense records.",
      "Basic technical diagnostics used to improve performance and security.",
    ],
  },
  {
    title: "How We Use Data",
    body: "Your information is used strictly for product functionality and service quality.",
    bullets: [
      "To show balances, category insights, and spending trends inside your account.",
      "To secure sign-in flows and prevent unauthorized access.",
      "To support troubleshooting, fraud prevention, and feature improvement.",
    ],
  },
  {
    title: "Data Protection",
    body: "We apply standard safeguards to keep account data protected in transit and at rest.",
    bullets: [
      "Encrypted transport channels for network communication.",
      "Access controls that limit who can view internal systems.",
      "Session security checks to reduce account compromise risk.",
    ],
  },
  {
    title: "Your Choices",
    body: "You can request account updates or deletion through official support channels.",
    bullets: [
      "You may update profile details at any time within the app.",
      "You may request account deletion and data removal where applicable.",
      "You may stop using the service at any time.",
    ],
  },
];

const termsSections = [
  {
    title: "Acceptance of Terms",
    body: "By using SapaTracker, you agree to these Terms and our Privacy Policy.",
    bullets: [
      "You must provide accurate information when creating an account.",
      "You are responsible for activities under your account credentials.",
      "You should keep login information confidential and secure.",
    ],
  },
  {
    title: "Permitted Use",
    body: "SapaTracker is provided for lawful personal finance tracking and planning.",
    bullets: [
      "Do not misuse the service, attempt unauthorized access, or disrupt operations.",
      "Do not upload harmful, fraudulent, or unlawful content.",
      "Do not reverse engineer or exploit the product infrastructure.",
    ],
  },
  {
    title: "Service Availability",
    body: "We aim for reliable uptime but cannot guarantee uninterrupted availability.",
    bullets: [
      "Maintenance, upgrades, or third-party issues may temporarily affect access.",
      "Feature sets may evolve over time to improve quality and security.",
      "We may suspend accounts involved in abuse or policy violations.",
    ],
  },
  {
    title: "Limitation and Updates",
    body: "SapaTracker is offered on an as-is basis within applicable legal limits.",
    bullets: [
      "You remain responsible for personal financial decisions and outcomes.",
      "We may update these Terms from time to time with revised effective dates.",
      "Continued use after updates indicates acceptance of the revised Terms.",
    ],
  },
];

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

function FooterBar({ year }) {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        borderTop: "1px solid",
        borderColor: alpha(COLORS.baseDark, 0.12),
        bgcolor: alpha("#FFFFFF", 0.9),
        backdropFilter: "blur(10px)",
        zIndex: (theme) => theme.zIndex.appBar - 1,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 0.8,
          display: "flex",
          flexDirection: "column",
          gap: 0.4,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          (c) {year} SapaTracker
        </Typography>
        <Stack direction="row" spacing={0.35} useFlexGap flexWrap="wrap" justifyContent="center">
          <Button href="/#features" color="inherit" size="small" sx={{ color: "text.secondary", minWidth: 0, px: 1 }}>
            Features
          </Button>
          <Button href="/#faq" color="inherit" size="small" sx={{ color: "text.secondary", minWidth: 0, px: 1 }}>
            FAQ
          </Button>
          <Button
            href={PRIVACY_POLICY_URL}
            color="inherit"
            size="small"
            sx={{ color: "text.secondary", minWidth: 0, px: 1 }}
          >
            Privacy
          </Button>
          <Button href={TERMS_URL} color="inherit" size="small" sx={{ color: "text.secondary", minWidth: 0, px: 1 }}>
            Terms
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

function LegalPage({ title, sections, year }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: BACKGROUNDS.page,
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: alpha(COLORS.backgroundDefault, 0.72),
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: alpha(COLORS.baseDark, 0.1),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: SPACING.navHeight }}>
            <Typography sx={{ fontWeight: 600, letterSpacing: "-0.02em", fontSize: "1rem", color: "text.primary", flexGrow: 1 }}>
              SapaTracker
            </Typography>
            <Stack direction="row" spacing={0.6} alignItems="center">
              <Button href="/#home" color="inherit" sx={{ color: "text.secondary" }}>
                Home
              </Button>
              <Button variant="contained" href={OPEN_APP_URL}>
                Open App
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md" sx={{ pt: { xs: 4, md: 6 }, pb: SPACING.pagePaddingBottom, px: { xs: 1.8, sm: 2.4 } }}>
        <Chip
          label="Legal"
          sx={{
            borderRadius: "999px",
            bgcolor: alpha(COLORS.primary, 0.1),
            color: "primary.dark",
            fontWeight: 600,
          }}
        />
        <Typography component="h1" sx={{ mt: 1.4, fontSize: { xs: "2rem", md: "2.9rem" }, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 0.8 }}>
          Last updated: {LEGAL_LAST_UPDATED}
        </Typography>

        <Stack spacing={1.3} sx={{ mt: 2.4 }}>
          {sections.map((section) => (
            <Card key={section.title} sx={{ p: { xs: 1.7, md: 2.2 }, bgcolor: alpha("#FFFFFF", 0.84) }}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "-0.02em", mb: 0.6 }}>{section.title}</Typography>
              <Typography color="text.secondary" sx={{ mb: 0.7 }}>
                {section.body}
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.2, color: "text.secondary" }}>
                {section.bullets.map((item) => (
                  <Box component="li" key={item} sx={{ mb: 0.45, lineHeight: 1.55 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>

      <FooterBar year={year} />
    </Box>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const year = useMemo(() => new Date().getFullYear(), []);
  const normalizedPath =
    (typeof window !== "undefined" ? window.location.pathname : "/").replace(/\/+$/, "") || "/";
  const isPrivacyPage = normalizedPath === "/privacy";
  const isTermsPage = normalizedPath === "/terms" || normalizedPath === "/terms-and-conditions";

  if (isPrivacyPage) {
    return <LegalPage title="Privacy Policy" sections={privacySections} year={year} />;
  }

  if (isTermsPage) {
    return <LegalPage title="Terms and Conditions" sections={termsSections} year={year} />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: BACKGROUNDS.page,
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: alpha(COLORS.backgroundDefault, 0.72),
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: alpha(COLORS.baseDark, 0.1),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: SPACING.navHeight }}>
            <Stack direction="row" spacing={1.1} alignItems="center" sx={{ flexGrow: 1 }}>
              {logoVisible ? (
                <Box
                  component="img"
                  src={LOGO_SRC}
                  alt="SapaTracker logo"
                  onError={() => setLogoVisible(false)}
                  sx={{ width: 28, height: 28, objectFit: "contain" }}
                />
              ) : (
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "999px",
                    bgcolor: "text.primary",
                    color: "common.white",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                  }}
                >
                  ST
                </Box>
              )}
              <Typography
                sx={{
                  fontWeight: TYPOGRAPHY.navbarBrand.weight,
                  letterSpacing: TYPOGRAPHY.navbarBrand.letterSpacing,
                  fontSize: TYPOGRAPHY.navbarBrand.size,
                  color: "text.primary",
                }}
              >
                SapaTracker
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.6}
              alignItems="center"
              sx={{
                display: { xs: "none", md: "flex" },
                p: 0.45,
                borderRadius: "999px",
                bgcolor: alpha("#FFFFFF", 0.56),
                border: "1px solid",
                borderColor: alpha(COLORS.baseDark, 0.06),
                boxShadow: "0 10px 30px rgba(17, 24, 39, 0.06)",
              }}
            >
              {navLinks.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  color="inherit"
                  sx={{ color: "text.secondary", px: 1.35 }}
                >
                  {item.label}
                </Button>
              ))}
              <Button variant="contained" href={OPEN_APP_URL} sx={{ ml: 1 }}>
                Open App
              </Button>
            </Stack>

            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "86%",
            maxWidth: 320,
            p: 1.6,
            bgcolor: alpha(COLORS.backgroundDefault, 0.95),
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography fontWeight={700}>Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close navigation menu">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider />
        <Stack spacing={0.6} sx={{ mt: 1.2 }}>
          {navLinks.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              color="inherit"
              sx={{ justifyContent: "flex-start", color: "text.primary" }}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <Button
          variant="contained"
          href={OPEN_APP_URL}
          sx={{ mt: 2 }}
          onClick={() => setDrawerOpen(false)}
        >
          Open App
        </Button>
      </Drawer>

      <Container maxWidth="xl" sx={{ px: SPACING.pagePaddingX, pb: SPACING.pagePaddingBottom }}>
        <Box component="section" id="home" sx={SPACING.sectionHero}>
          <Stack
            spacing={2}
            alignItems="center"
            textAlign="center"
            sx={{
              position: "relative",
              animation: `${fadeUp} ${MOTION.fadeUp.duration}ms ${MOTION.fadeUp.easing}`,
            }}
          >
            <Chip
              label="Personal finance, redesigned for daily clarity"
              sx={{
                borderRadius: "999px",
                bgcolor: alpha(COLORS.primary, 0.1),
                color: "primary.dark",
                fontWeight: 600,
                border: "1px solid",
                borderColor: alpha(COLORS.primary, 0.08),
              }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: TYPOGRAPHY.heroTitle.size,
                lineHeight: TYPOGRAPHY.heroTitle.lineHeight,
                letterSpacing: TYPOGRAPHY.heroTitle.letterSpacing,
                maxWidth: 980,
                textWrap: "balance",
              }}
            >
              Track your money.
              <br />
              Spend with confidence.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "1.03rem", md: "1.3rem" }, maxWidth: 760, lineHeight: 1.55 }}
            >
              SapaTracker helps students and young professionals in Nigeria monitor income,
              control expenses, and make smarter weekly decisions.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.1} sx={{ pt: 0.5 }}>
              <Button variant="contained" size="large" href={OPEN_APP_URL}>
                Open App
              </Button>
              <Button
                variant="text"
                size="large"
                href={APK_DOWNLOAD_URL}
                sx={{
                  color: "primary.main",
                  bgcolor: alpha(COLORS.primary, 0.06),
                  "&:hover": { bgcolor: alpha(COLORS.primary, 0.1) },
                }}
              >
                Download Android APK
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={0.8}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
              sx={{ pt: 0.2 }}
            >
              {heroHighlights.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={0.55}
                  alignItems="center"
                  sx={{
                    px: 1.15,
                    py: 0.7,
                    borderRadius: "999px",
                    bgcolor: alpha("#FFFFFF", 0.72),
                    border: "1px solid",
                    borderColor: alpha(COLORS.baseDark, 0.08),
                    boxShadow: "0 10px 26px rgba(17, 24, 39, 0.05)",
                  }}
                >
                  <CheckCircleRoundedIcon sx={{ fontSize: "1rem", color: "primary.main" }} />
                  <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Card
            sx={{
              mt: { xs: 3, md: 5 },
              p: { xs: 1.4, md: 1.8 },
              position: "relative",
              overflow: "hidden",
              bgcolor: alpha("#FFFFFF", 0.8),
              backdropFilter: "blur(14px)",
              animation: `${zoomIn} ${MOTION.zoomIn.duration}ms ${MOTION.zoomIn.easing}`,
              "&::before": {
                content: '""',
                position: "absolute",
                width: { xs: 140, md: 220 },
                height: { xs: 140, md: 220 },
                top: -52,
                right: -40,
                borderRadius: "50%",
                background: alpha(COLORS.primary, 0.12),
                filter: "blur(12px)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: 4, md: 6 },
                overflow: "hidden",
                border: "1px solid",
                borderColor: alpha(COLORS.baseDark, 0.08),
                bgcolor: "#FFFFFF",
              }}
            >
              <Box
                component="img"
                src={smartDashboardDevicesImg}
                alt="SapaTracker smart dashboard across mobile and desktop"
                sx={{
                  width: "100%",
                  height: { xs: 230, sm: 340, md: 470 },
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: BACKGROUNDS.mediaOverlay,
                }}
              />
              <Stack
                spacing={0.6}
                sx={{
                  position: "absolute",
                  left: { xs: 14, md: 26 },
                  right: { xs: 14, md: "auto" },
                  bottom: { xs: 14, md: 26 },
                  maxWidth: { xs: "none", md: 320 },
                  p: { xs: 1.2, md: 1.5 },
                  borderRadius: 4,
                  bgcolor: alpha("#FFFFFF", 0.88),
                  backdropFilter: "blur(10px)",
                  border: "1px solid",
                  borderColor: alpha(COLORS.baseDark, 0.08),
                  boxShadow: "0 16px 40px rgba(17, 24, 39, 0.12)",
                }}
              >
                <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", color: "primary.dark", textTransform: "uppercase" }}>
                  Weekly Snapshot
                </Typography>
                <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.25, letterSpacing: "-0.03em" }}>
                  Clear balances, category trends, and fast entries in one finance dashboard.
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Box>

        <Box component="section" sx={{ pb: { xs: 4, md: 5.2 } }}>
          <Grid container spacing={1.2}>
            {trustPoints.map((point) => (
              <Grid item key={point.caption} xs={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    p: { xs: 1.6, md: 2 },
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: alpha("#FFFFFF", 0.76),
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "0 0 auto 0",
                      height: 3,
                      background: `linear-gradient(90deg, ${alpha(COLORS.primary, 0.72)} 0%, ${alpha(COLORS.accentWarm, 0.7)} 100%)`,
                    },
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.7rem" }, letterSpacing: "-0.03em", mt: 0.35 }}>
                    {point.label}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: "0.84rem", mt: 0.3 }}>
                    {point.caption}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          component="section"
          id="features"
          sx={{ py: SPACING.sectionLg, scrollMarginTop: SECTION_SCROLL_MARGIN }}
        >
          <SectionHeader
            align="center"
            eyebrow="Features"
            title="Everything you need, without the clutter"
            subtitle="Purpose-built tools that keep daily tracking fast while giving you real weekly insight."
          />
          <Grid container spacing={1.6} sx={{ mt: 2.6 }}>
            {features.map((item) => (
              <Grid item key={item.title} xs={12} sm={6} lg={4}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          component="section"
          id="how-it-works"
          sx={{ py: SPACING.sectionLg, scrollMarginTop: SECTION_SCROLL_MARGIN }}
        >
          <SectionHeader
            align="center"
            eyebrow="How It Works"
            title="Three simple steps. One clear routine."
            subtitle="Set up quickly, track daily, and review weekly to avoid end-of-month surprises."
          />
          <Grid container spacing={1.4} sx={{ mt: 2.5 }}>
            {steps.map((item) => (
              <Grid item key={item.step} xs={12} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    p: { xs: 2.2, md: 2.8 },
                    bgcolor: alpha("#FFFFFF", 0.8),
                    backgroundImage:
                      "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.96) 100%)",
                  }}
                >
                  <Typography
                    sx={{
                      color: alpha(COLORS.baseDark, 0.32),
                      fontWeight: 700,
                      letterSpacing: "-0.05em",
                      fontSize: { xs: "2.1rem", md: "2.6rem" },
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1.2, mb: 0.5, fontSize: "1.2rem" }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.body}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box component="section" sx={{ py: SPACING.sectionLg, scrollMarginTop: SECTION_SCROLL_MARGIN }}>
          <SectionHeader
            align="center"
            title="See your money with less friction"
            subtitle="A clean interface for quick entries, clear insights, and confident spending decisions."
          />
          <Grid container spacing={1.6} sx={{ mt: 2.4 }}>
            {demoScreens.map((item) => (
              <Grid item key={item.label} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    overflow: "hidden",
                    height: "100%",
                    bgcolor: alpha("#FFFFFF", 0.82),
                    transition: MOTION.cardTransition,
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 24px 52px rgba(17, 24, 39, 0.12)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`${item.label} preview`}
                    sx={{
                      height: { xs: 210, sm: 250 },
                      width: "100%",
                      objectFit: "cover",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 600, mb: 0.4, letterSpacing: "-0.02em" }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box component="section" sx={{ py: SPACING.sectionMd, scrollMarginTop: SECTION_SCROLL_MARGIN }}>
          <Grid container spacing={1.8} alignItems="stretch">
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  p: { xs: 2.2, md: 2.8 },
                  background:
                    "linear-gradient(160deg, rgba(20,20,24,1) 0%, rgba(29,29,31,0.98) 58%, rgba(9,78,158,0.92) 100%)",
                  color: "common.white",
                  borderColor: alpha("#FFFFFF", 0.16),
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 180,
                    height: 180,
                    top: -80,
                    right: -50,
                    borderRadius: "50%",
                    background: alpha("#FFFFFF", 0.08),
                  },
                }}
              >
                <Typography sx={{ color: alpha("#FFFFFF", 0.75), fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Security
                </Typography>
                <Typography sx={{ mt: 1, fontSize: { xs: "1.6rem", md: "2.1rem" }, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  Privacy-first account access built for trust.
                </Typography>
                <Stack spacing={1.1} sx={{ mt: 2.1 }}>
                  {[
                    "Firebase Authentication for secure sign-in",
                    "Encrypted network traffic for account data",
                    "Session controls to reduce unauthorized access risk",
                  ].map((item) => (
                    <Stack key={item} direction="row" spacing={1} alignItems="center">
                      <CheckCircleRoundedIcon sx={{ color: COLORS.securityBlue, fontSize: "1.1rem" }} />
                      <Typography sx={{ color: alpha("#FFFFFF", 0.84) }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card sx={{ height: "100%", overflow: "hidden", bgcolor: alpha("#FFFFFF", 0.82) }}>
                <Box
                  component="img"
                  src={secureLoginFintechImg}
                  alt="Secure login flow for SapaTracker"
                  sx={{
                    width: "100%",
                    height: { xs: 220, sm: 260, md: 290 },
                    objectFit: "cover",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                />
                <CardContent sx={{ p: { xs: 2.2, md: 2.8 } }}>
                  <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.45rem" }, letterSpacing: "-0.02em" }}>
                    Built for consistent daily use
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
                    Finance products only work when users trust them. Clear authentication,
                    transparent policies, and a reliable UX are key to long-term retention.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="section"
          id="faq"
          sx={{ py: SPACING.sectionMd, scrollMarginTop: SECTION_SCROLL_MARGIN }}
        >
          <SectionHeader
            align="center"
            eyebrow="FAQ"
            title="Answers before you get started"
            subtitle="Everything you need to know before tracking your first transaction."
          />
          <Box sx={{ mt: 2.3, maxWidth: 920, mx: "auto" }}>
            {faqs.map((item) => (
              <Accordion key={item.question} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                  <Typography sx={{ fontWeight: 600, pr: 1 }}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        <Box component="section" id="download" sx={{ py: SPACING.sectionSm, scrollMarginTop: SECTION_SCROLL_MARGIN }}>
          <Card
            sx={{
              p: { xs: 2.2, md: 3.4 },
              position: "relative",
              overflow: "hidden",
              background: BACKGROUNDS.cta,
              color: "common.white",
              borderColor: alpha("#FFFFFF", 0.32),
              "&::before": {
                content: '""',
                position: "absolute",
                width: { xs: 180, md: 260 },
                height: { xs: 180, md: 260 },
                top: -100,
                right: -80,
                borderRadius: "50%",
                background: alpha("#FFFFFF", 0.12),
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: { xs: 120, md: 180 },
                height: { xs: 120, md: 180 },
                bottom: -60,
                left: -40,
                borderRadius: "50%",
                background: alpha("#FFFFFF", 0.08),
              },
            }}
          >
            <Grid container spacing={2} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
              <Grid item xs={12} md={8}>
                <Chip
                  label="Latest Android build"
                  sx={{
                    mb: 1.3,
                    bgcolor: alpha("#FFFFFF", 0.14),
                    color: "common.white",
                    border: "1px solid",
                    borderColor: alpha("#FFFFFF", 0.22),
                  }}
                />
                <Typography sx={{ fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.6rem" }, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                  Ready to stop guessing where your money goes?
                </Typography>
                <Typography sx={{ mt: 1, color: alpha("#FFFFFF", 0.9), maxWidth: 700 }}>
                  Start with one minute of tracking today. Small daily visibility prevents big
                  monthly stress.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    href={OPEN_APP_URL}
                    sx={{ bgcolor: "common.white", color: "text.primary", "&:hover": { bgcolor: "#ECECEC" } }}
                  >
                    Open App
                  </Button>
                  <Button
                    variant="outlined"
                    href={APK_DOWNLOAD_URL}
                    sx={{
                      borderColor: alpha("#FFFFFF", 0.82),
                      color: "common.white",
                      "&:hover": { borderColor: "common.white", bgcolor: alpha("#FFFFFF", 0.14) },
                    }}
                  >
                    Download Android APK
                  </Button>
                </Stack>
                <Typography sx={{ mt: 1.2, color: alpha("#FFFFFF", 0.72), fontSize: "0.92rem" }}>
                  APK delivery is wired to the latest GitHub release artifact.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={androidAppInstallImg}
                  alt="SapaTracker Android app installation"
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    height: { xs: 190, md: 220 },
                    objectFit: "cover",
                    border: "1px solid",
                    borderColor: alpha("#FFFFFF", 0.35),
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>

      <FooterBar year={year} />
    </Box>
  );
}

export default App;
