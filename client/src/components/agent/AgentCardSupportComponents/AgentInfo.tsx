import { Stack, Typography } from "@mui/material";
import { EmailOutlined, Place, Phone, LocationCity } from "@mui/icons-material";
import { InfoBar } from "./InfoBar";
import { colors } from "constants/colors";

interface AgentInfoProps {
  name: string;
  email: string;
  noOfProperties: number;
}

export const AgentInfo = ({ name, email, noOfProperties }: AgentInfoProps) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      flex={1}
      gap={{ xs: 4, sm: 2 }}
    >
      <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
        <Typography fontSize={22} fontWeight={600} color={colors.EERIE_BLACK}>
          {name}
        </Typography>
        <Typography fontSize={14} color={colors.ROMAN_SILVER}>
          Real-Estate Agent
        </Typography>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <InfoBar
          icon={<EmailOutlined sx={{ color: colors.ROMAN_SILVER }} />}
          name={email}
        />
        <InfoBar
          icon={<Place sx={{ color: colors.ROMAN_SILVER }} />}
          name="London"
        />
        <InfoBar
          icon={<Phone sx={{ color: colors.ROMAN_SILVER }} />}
          name="+502-3231-4141"
        />
        <InfoBar
          icon={<LocationCity sx={{ color: colors.ROMAN_SILVER }} />}
          name={`${noOfProperties} Properties`}
        />
      </Stack>
    </Stack>
  );
};
