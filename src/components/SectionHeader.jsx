import { Stack, Typography } from "@mui/material";

function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <Stack spacing={1.25} sx={{ maxWidth: 820, mx: align === "center" ? "auto" : 0 }}>
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            letterSpacing: "0.08em",
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
          fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3.15rem" },
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
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
          sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, maxWidth: 660, mx: align === "center" ? "auto" : 0 }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}

export default SectionHeader;
