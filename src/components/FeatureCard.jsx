import { alpha } from "@mui/material/styles";
import { Box, Card, CardContent, Typography } from "@mui/material";

function FeatureCard({ icon, title, description }) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        backgroundColor: alpha("#FFFFFF", 0.84),
        backdropFilter: "blur(8px)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.12)",
          borderColor: "rgba(0, 113, 227, 0.32)",
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
            bgcolor: "rgba(0, 113, 227, 0.1)",
            color: "primary.dark",
            mb: 1.3,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontSize: "1.08rem", mb: 0.6, letterSpacing: "-0.02em" }}>
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
