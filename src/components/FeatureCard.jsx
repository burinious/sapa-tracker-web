import { Box, Card, CardContent, Typography } from "@mui/material";

function FeatureCard({ icon, title, description }) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 180ms ease, box-shadow 200ms ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 16px 34px rgba(23,35,32,0.1)",
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
            borderRadius: "12px",
            bgcolor: "rgba(17, 106, 100, 0.11)",
            color: "primary.main",
            mb: 1.3,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontSize: "1.02rem", mb: 0.6 }}>
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
