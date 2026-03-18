import { alpha } from "@mui/material/styles";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { COLORS, MOTION, SHADOWS } from "../designSystem";

function FeatureCard({ icon, title, description }) {
  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        transition: MOTION.cardTransition,
        backgroundColor: alpha(COLORS.surface, 0.84),
        backdropFilter: "blur(8px)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "0 0 auto 0",
          height: 4,
          background: `linear-gradient(90deg, ${alpha(COLORS.primary, 0.88)} 0%, ${alpha(COLORS.accentWarm, 0.7)} 100%)`,
        },
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: SHADOWS.cardHover,
          borderColor: alpha(COLORS.primary, 0.32),
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.1, sm: 2.5 } }}>
        <Box
          sx={{
            width: 42,
            height: 42,
            display: "grid",
            placeItems: "center",
            borderRadius: "999px",
            bgcolor: alpha(COLORS.primary, 0.12),
            color: "primary.dark",
            mb: 1.5,
            boxShadow: `inset 0 0 0 1px ${alpha(COLORS.primary, 0.08)}`,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontSize: "1.08rem", mb: 0.7, letterSpacing: "-0.02em" }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
