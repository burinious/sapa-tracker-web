import { Stack, Typography } from "@mui/material";

function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <Stack spacing={1.2} sx={{ maxWidth: 740, mx: align === "center" ? "auto" : 0 }}>
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
          align={align}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "1.6rem", sm: "2rem", md: "2.35rem" },
          lineHeight: 1.15,
        }}
        align={align}
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          variant="body1"
          color="text.secondary"
          align={align}
          sx={{ fontSize: { xs: "0.98rem", sm: "1.04rem" } }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}

export default SectionHeader;
