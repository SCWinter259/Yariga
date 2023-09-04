import { Box, Typography, Stack } from "@mui/material";
import { colors } from "constants/colors";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

export const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color={colors.EERIE_BLACK}>
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color={colors.EERIE_BLACK}>
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={1}
      bgcolor={colors.COLUMBIA_BLUE}
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
      />
    </Box>
  </Box>
);
