import { useList } from "@pankod/refine-core";

import { Typography, Box, Stack } from "@pankod/refine-mui";

import { PieChart } from "components/charts/PieChart";
import { PropertyReferrals } from "components/charts/PropertyReferrals";
import { TotalRevenue } from "components/charts/TotalRevenue";
import { PropertyCard } from "components/common/PropertyCard";
import { colors } from "constants/colors";

export const HomePage = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={colors.EERIE_BLACK}>
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={[colors.ROYAL_BLUE, colors.COLUMBIA_BLUE]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={[colors.ROYAL_BLUE, colors.COLUMBIA_BLUE]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={[colors.ROYAL_BLUE, colors.COLUMBIA_BLUE]}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[75, 25]}
          colors={[colors.ROYAL_BLUE, colors.COLUMBIA_BLUE]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor={colors.LOTION}
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color={colors.EERIE_BLACK}>
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
