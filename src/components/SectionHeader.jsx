import { Stack, Typography } from "@mui/material";
import { TYPOGRAPHY } from "../designSystem";

function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <Stack spacing={1.25} sx={{ maxWidth: 820, mx: align === "center" ? "auto" : 0 }}>
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            fontWeight: TYPOGRAPHY.overline.weight,
            letterSpacing: TYPOGRAPHY.overline.letterSpacing,
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
          fontSize: TYPOGRAPHY.sectionTitle.size,
          lineHeight: TYPOGRAPHY.sectionTitle.lineHeight,
          letterSpacing: TYPOGRAPHY.sectionTitle.letterSpacing,
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
