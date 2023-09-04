import { Box, Stack, Typography } from "@mui/material";
import { colors } from "constants/colors";
import { Address } from "./Address";
import { PhoneNumber } from "./PhoneNumber";
import { AgentEmail } from "./AgentEmail";

interface ProfileInfoProps {
  name: string;
  email: string;
}

export const ProfileInfo = ({ name, email }: ProfileInfoProps) => {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap="30px"
    >
      <Stack direction="column">
        <Typography fontSize={22} fontWeight={600} color={colors.EERIE_BLACK}>
          {name}
        </Typography>
        <Typography fontSize={16} color={colors.ROMAN_SILVER}>
          Realestate Agent
        </Typography>
      </Stack>

      <Stack direction="column" gap="30px">
        <Address />
        <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
          <PhoneNumber />
          <AgentEmail email={email} />
        </Stack>
      </Stack>
    </Box>
  );
};
