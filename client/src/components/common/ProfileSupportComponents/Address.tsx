import { Stack, Typography, Box } from "@mui/material";
import { Place } from "@mui/icons-material";
import { colors } from "constants/colors";
import { profile } from "constants/profile";

export const Address = () => {
  return (
    <Stack gap="15px">
      <Typography fontSize={14} fontWeight={500} color={colors.ROMAN_SILVER}>
        Address
      </Typography>
      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
        <Place sx={{ color: colors.EERIE_BLACK }} />
        <Typography fontSize={14} color={colors.EERIE_BLACK}>
          {profile.ADDRESS}
        </Typography>
      </Box>
    </Stack>
  );
};
