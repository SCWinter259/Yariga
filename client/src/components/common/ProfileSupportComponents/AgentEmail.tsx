import { Stack, Typography, Box } from "@mui/material";
import { Email } from "@mui/icons-material";
import { colors } from "constants/colors";

interface AgentEmailProps {
  email: string;
}

export const AgentEmail = ({ email }: AgentEmailProps) => {
  return (
    <Stack flex={1} gap="15px">
      <Typography fontSize={14} fontWeight={500} color={colors.ROMAN_SILVER}>
        Email
      </Typography>
      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
        <Email sx={{ color: colors.EERIE_BLACK }} />
        <Typography fontSize={14} color={colors.EERIE_BLACK}>
          {email}
        </Typography>
      </Box>
    </Stack>
  );
};
