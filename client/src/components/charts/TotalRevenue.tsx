import { Box, Stack, Typography } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from '@mui/icons-material';
import ReactApexChart from 'react-apexcharts';
import { TotalRevenueSeries, TotalRevenueOptions } from 'constants/chartConstants';
import { colors } from 'constants/colors';

export const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor={colors.LOTION}
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color={colors.EERIE_BLACK}>
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color={colors.EERIE_BLACK}>
          $236,535
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: colors.ROYAL_BLUE }} />
          <Stack>
            <Typography fontSize={15} color={colors.ROYAL_BLUE}>
              0.8%
            </Typography>
            <Typography fontSize={12} color={colors.ROMAN_SILVER}>
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};
