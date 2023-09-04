import { InfoBarProps } from "interfaces/agent";
import { Stack, Typography } from "@mui/material";
import { colors } from "constants/colors";

export const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} minWidth={{ xs: "100%", sm: 300 }} gap={1.5} direction="row">
    {icon}
    <Typography fontSize={14} color={colors.ROMAN_SILVER}>
      {name}
    </Typography>
  </Stack>
);
