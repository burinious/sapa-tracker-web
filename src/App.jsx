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
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SectionHeader from "./components/SectionHeader";
import FeatureCard from "./components/FeatureCard";
import incomeReviewStudentImg from "./assets/illustrations/sapatracker-income-review-student.png";
import dailyExpenseTrackingImg from "./assets/illustrations/sapatracker-daily-expense-tracking.png";
import spendingInsightsPiechartImg from "./assets/illustrations/sapatracker-spending-insights-piechart.png";
import smartDashboardDevicesImg from "./assets/illustrations/sapatracker-smart-dashboard-devices.png";
import secureLoginFintechImg from "./assets/illustrations/sapatracker-secure-login-fintech.png";
import androidAppInstallImg from "./assets/illustrations/sapatracker-android-app-install.png";

const OPEN_APP_URL = "https://YOUR-VERCEL-DOMAIN.vercel.app";
const APK_DOWNLOAD_URL =
  "https://YOUR-VERCEL-DOMAIN.vercel.app/downloads/sapatracker-android.apk";
const PRIVACY_POLICY_URL = "#";
const TERMS_URL = "#";

// Replace with your uploaded brand assets.
const LOGO_SRC = "/assets/sapatracker-logo.svg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const trustPoints = [
  { icon: <BoltRoundedIcon fontSize="small" />, text: "Track expenses in seconds" },
  { icon: <AutoGraphRoundedIcon fontSize="small" />, text: "See category leaks quickly" },
  { icon: <VerifiedUserRoundedIcon fontSize="small" />, text: "Secure Firebase login" },
  { icon: <SupportRoundedIcon fontSize="small" />, text: "Built for Nigerian users" },
];

const features = [
  {
    icon: <AccountBalanceWalletRoundedIcon fontSize="small" />,
    title: "Income and expense tracking",
    description:
      "Log inflow and spending in one place so you always know what is left before month end.",
  },
  {
    icon: <InsightsRoundedIcon fontSize="small" />,
    title: "Category-based spending insights",
    description:
      "Break down food, transport, data, rent, and more to spot where money is leaking.",
  },
  {
    icon: <DashboardRoundedIcon fontSize="small" />,
    title: "Smart dashboard overview",
    description:
      "Get a clear summary of balance, recent activity, and trend lines that guide daily decisions.",
  },
  {
    icon: <LockRoundedIcon fontSize="small" />,
    title: "Secure login with Firebase auth",
    description:
      "Sign in safely with trusted authentication patterns, session control, and encrypted transport.",
  },
  {
    icon: <DownloadForOfflineRoundedIcon fontSize="small" />,
    title: "Fast mobile experience + Android APK",
    description:
      "Optimized for quick taps on mobile, with direct Android APK download for easy install.",
  },
];

const faqs = [
  {
    question: "Who is SapaTracker for?",
    answer:
      "SapaTracker is built for students, interns, freelancers, and young professionals in Nigeria who want practical daily control of money.",
  },
  {
    question: "Do I need to link my bank account?",
    answer:
      "No. You can start manually and still get useful insights. This keeps setup fast and gives you control over what you track.",
  },
  {
    question: "Can I track both income and expenses?",
    answer:
      "Yes. You can log salary, side hustle income, gifts, and all spending categories in one clean timeline.",
  },
  {
    question: "Is my account secure?",
    answer:
      "Authentication is handled with Firebase Auth. That means modern sign-in security standards and reliable session protection.",
  },
  {
    question: "How do I install the Android app?",
    answer:
      "Use the Download Android APK button. It fetches the latest APK directly from your deployment URL.",
  },
  {
    question: "Does SapaTracker work on slow networks?",
    answer:
      "The interface is optimized to stay lightweight, so common actions like opening dashboards and adding entries remain quick.",
  },
];

const demoScreens = [
  {
    label: "Daily Expense Tracking",
    image: dailyExpenseTrackingImg,
    description: "Log spending as it happens so your balance stays accurate.",
  },
  {
    label: "Spending Insights",
    image: spendingInsightsPiechartImg,
    description: "See category trends and identify overspending early.",
  },
  {
    label: "Income Review",
    image: incomeReviewStudentImg,
    description: "Track income sources and compare against monthly targets.",
  },
];

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(80% 52% at 100% 0%, rgba(233,131,33,0.16) 0%, transparent 60%), radial-gradient(65% 45% at 0% 100%, rgba(17,106,100,0.11) 0%, transparent 58%), #FFFDF8",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: alpha("#FFFDF8", 0.9),
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 66, md: 74 } }}>
            <Stack direction="row" spacing={1.1} alignItems="center" sx={{ flexGrow: 1 }}>
              {logoVisible ? (
                <Box
                  component="img"
                  src={LOGO_SRC}
                  alt="SapaTracker logo"
                  onError={() => setLogoVisible(false)}
                  sx={{ width: 30, height: 30, objectFit: "contain" }}
                />
              ) : (
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                  }}
                >
                  ST
                </Box>
              )}
              <Typography sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                SapaTracker
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navLinks.map((item) => (
                <Button key={item.href} href={item.href} color="inherit" sx={{ color: "text.secondary" }}>
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                href={APK_DOWNLOAD_URL}
                sx={{ ml: 1 }}
              >
                Download APK
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
        PaperProps={{ sx: { width: "86%", maxWidth: 320, p: 1.6 } }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography fontWeight={800}>Menu</Typography>
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
          color="secondary"
          href={APK_DOWNLOAD_URL}
          sx={{ mt: 2 }}
          onClick={() => setDrawerOpen(false)}
        >
          Download Android APK
        </Button>
      </Drawer>

      <Container maxWidth="lg" sx={{ px: { xs: 1.6, sm: 2.5 } }}>
        <Box
          component="section"
          id="home"
          sx={{
            pt: { xs: 4.2, md: 7.5 },
            pb: { xs: 5.2, md: 7.6 },
            scrollMarginTop: "90px",
          }}
        >
          <Grid container spacing={{ xs: 2.2, md: 3.4 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2} sx={{ animation: `${riseIn} 640ms ease` }}>
                <Chip
                  label="Personal finance made practical"
                  sx={{
                    width: "fit-content",
                    bgcolor: alpha("#116A64", 0.12),
                    color: "primary.dark",
                    fontWeight: 700,
                  }}
                />
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "2.05rem", sm: "2.55rem", md: "3.5rem" },
                    lineHeight: { xs: 1.1, md: 1.04 },
                    maxWidth: 620,
                  }}
                >
                  Track your money daily. Stay ahead of sapa.
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "1rem", md: "1.13rem" },
                    lineHeight: 1.6,
                    maxWidth: 575,
                  }}
                >
                  SapaTracker helps students and young professionals in Nigeria track income,
                  monitor expenses, and make better spending decisions every week.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.1} sx={{ pt: 0.5 }}>
                  <Button variant="contained" size="large" href={OPEN_APP_URL} aria-busy="false">
                    Open App
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    href={APK_DOWNLOAD_URL}
                    aria-busy="false"
                  >
                    Download Android APK
                  </Button>
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  No long setup. Start tracking in under 2 minutes.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  p: { xs: 1.6, sm: 2 },
                  background:
                    "linear-gradient(155deg, rgba(17,106,100,0.08) 0%, rgba(233,131,33,0.12) 100%)",
                  animation: `${riseIn} 760ms ease`,
                }}
              >
                <Box
                  sx={{
                    height: { xs: 300, sm: 380, md: 430 },
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    overflow: "hidden",
                    bgcolor: "#F8F6F2",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={smartDashboardDevicesImg}
                    alt="SapaTracker smart dashboard across mobile and desktop"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box component="section" sx={{ pb: { xs: 2, md: 3.2 } }}>
          <Grid container spacing={1}>
            {trustPoints.map((point) => (
              <Grid item key={point.text} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.82)",
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ py: 1.6, px: 1.6, "&:last-child": { pb: 1.6 } }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ color: "primary.main", display: "grid", placeItems: "center" }}>
                        {point.icon}
                      </Box>
                      <Typography fontWeight={700} sx={{ fontSize: "0.91rem" }}>
                        {point.text}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          component="section"
          id="features"
          sx={{ py: { xs: 5.2, md: 7.2 }, scrollMarginTop: "94px" }}
        >
          <SectionHeader
            eyebrow="Features"
            title="Everything you need to control spending with confidence"
            subtitle="Focused tools that help you track income, understand spending patterns, and make practical money decisions."
          />
          <Grid container spacing={1.5} sx={{ mt: 2 }}>
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
          sx={{ py: { xs: 4.8, md: 7 }, scrollMarginTop: "94px" }}
        >
          <SectionHeader
            eyebrow="How It Works"
            title="Three simple steps to avoid money surprises"
            subtitle="No complexity. Just a daily routine that keeps your finances visible."
          />
          <Grid container spacing={1.5} sx={{ mt: 2 }}>
            {[
              {
                step: "01",
                title: "Create your account",
                body: "Sign in securely and set up your basic spending categories in minutes.",
              },
              {
                step: "02",
                title: "Log income and expenses",
                body: "Track each transaction as it happens so your dashboard stays accurate.",
              },
              {
                step: "03",
                title: "Review and adjust weekly",
                body: "Use insights to reduce overspending and protect your savings goals.",
              },
            ].map((item) => (
              <Grid item key={item.step} xs={12} md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 2.4 }}>
                    <Chip
                      label={`Step ${item.step}`}
                      size="small"
                      sx={{
                        mb: 1.2,
                        bgcolor: alpha("#E98321", 0.18),
                        color: "secondary.dark",
                        fontWeight: 800,
                      }}
                    />
                    <Typography variant="h6" sx={{ mb: 0.7, fontSize: "1.08rem" }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box component="section" sx={{ py: { xs: 5.2, md: 7.2 }, scrollMarginTop: "94px" }}>
          <SectionHeader
            eyebrow="Demo Screens"
            title="A clear interface that helps you act quickly"
            subtitle="Real product views that help users track faster and make better money decisions."
          />
          <Grid container spacing={1.6} sx={{ mt: 2.2 }}>
            {demoScreens.map((item) => (
              <Grid item key={item.label} xs={12} sm={6} md={4}>
                <Card sx={{ overflow: "hidden", height: "100%" }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={`${item.label} preview`}
                    sx={{
                      height: { xs: 180, sm: 210 },
                      width: "100%",
                      objectFit: "cover",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  />
                  <CardContent>
                    <Typography fontWeight={700} sx={{ mb: 0.4 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box component="section" sx={{ py: { xs: 5.2, md: 7.2 }, scrollMarginTop: "94px" }}>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(165deg, rgba(17,106,100,0.11), rgba(255,255,255,0.9))",
                }}
              >
                <CardContent sx={{ p: { xs: 2.1, md: 2.8 } }}>
                  <SectionHeader
                    eyebrow="Security"
                    title="Your account privacy is treated seriously"
                    subtitle="SapaTracker is designed with practical safeguards so users can track confidently."
                  />
                  <Stack spacing={1.2} sx={{ mt: 2.3 }}>
                    {[
                      "Firebase Authentication for secure sign-in",
                      "Encrypted network traffic for account data",
                      "Session controls that reduce unauthorized access risk",
                    ].map((item) => (
                      <Stack key={item} direction="row" spacing={1} alignItems="center">
                        <CheckCircleRoundedIcon color="success" fontSize="small" />
                        <Typography color="text.secondary">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={7}>
              <Card sx={{ height: "100%", overflow: "hidden" }}>
                <Box
                  component="img"
                  src={secureLoginFintechImg}
                  alt="Secure login flow for SapaTracker"
                  sx={{
                    width: "100%",
                    height: { xs: 210, sm: 250, md: 280 },
                    objectFit: "cover",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                />
                <CardContent sx={{ p: { xs: 2.1, md: 2.8 } }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Why this matters
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                    Finance apps only work when users trust them. Clear authentication and
                    privacy-friendly design give students and young professionals confidence to
                    track money consistently.
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    For launch, add your exact privacy policy and support contact details in the
                    footer links below so users know how their information is handled.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="section"
          id="faq"
          sx={{ py: { xs: 5.2, md: 7.2 }, scrollMarginTop: "94px" }}
        >
          <SectionHeader
            eyebrow="FAQ"
            title="Questions people ask before they start"
            subtitle="Practical answers to help new users get going quickly."
          />
          <Box sx={{ mt: 2.2 }}>
            {faqs.map((item) => (
              <Accordion key={item.question} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                  <Typography fontWeight={700} sx={{ pr: 1 }}>
                    {item.question}
                  </Typography>
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

        <Box component="section" id="download" sx={{ py: { xs: 3.5, md: 5 }, scrollMarginTop: "94px" }}>
          <Card
            sx={{
              p: { xs: 2, sm: 2.6, md: 3.2 },
              background: "linear-gradient(120deg, #EAF5F3 0%, #FFF3E5 100%)",
              border: "1px solid",
              borderColor: alpha("#116A64", 0.16),
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography sx={{ fontSize: { xs: "1.35rem", sm: "1.6rem", md: "1.9rem" }, fontFamily: '"Sora", "Manrope", sans-serif', fontWeight: 700, lineHeight: 1.25 }}>
                  Ready to stop asking where your money went?
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 0.8, maxWidth: 680 }}>
                  Open SapaTracker now and start tracking today. Small daily visibility prevents big
                  end-of-month stress.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={1}>
                  <Button variant="contained" color="primary" href={OPEN_APP_URL} fullWidth>
                    Open App
                  </Button>
                  <Button variant="contained" color="secondary" href={APK_DOWNLOAD_URL} fullWidth>
                    Download Android APK
                  </Button>
                </Stack>
                <Box
                  component="img"
                  src={androidAppInstallImg}
                  alt="SapaTracker Android app installation"
                  sx={{
                    mt: 1.2,
                    width: "100%",
                    borderRadius: 2,
                    height: { xs: 150, sm: 170, md: 190 },
                    objectFit: "cover",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          mt: { xs: 4, md: 5 },
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: alpha("#FFFFFF", 0.65),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 2.8,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 1.3,
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} SapaTracker. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap">
            <Button href="#features" color="inherit" size="small" sx={{ color: "text.secondary" }}>
              Features
            </Button>
            <Button href="#faq" color="inherit" size="small" sx={{ color: "text.secondary" }}>
              FAQ
            </Button>
            <Button
              href={PRIVACY_POLICY_URL}
              color="inherit"
              size="small"
              sx={{ color: "text.secondary" }}
            >
              Privacy Policy
            </Button>
            <Button href={TERMS_URL} color="inherit" size="small" sx={{ color: "text.secondary" }}>
              Terms
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
