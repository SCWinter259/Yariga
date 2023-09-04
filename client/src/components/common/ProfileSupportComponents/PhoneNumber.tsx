import { Stack, Typography, Box } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { colors } from "constants/colors";
import { profile } from "constants/profile";

export const PhoneNumber = () => {
  return (
    <Stack flex={1} gap="15px">
      <Typography fontSize={14} fontWeight={500} color={colors.ROMAN_SILVER}>
        Phone Number
      </Typography>
      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
        <Phone sx={{ color: colors.EERIE_BLACK }} />
        <Typography fontSize={14} color={colors.EERIE_BLACK} noWrap>
          {profile.PHONE}
        </Typography>
      </Box>
    </Stack>
  );
};
