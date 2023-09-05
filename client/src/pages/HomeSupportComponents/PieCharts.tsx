import { Box } from "@mui/material";
import { PieChart } from "components";

export const PieCharts = () => {
  return (
    <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
      <PieChart
        title="Properties for Sale"
        value={684}
        series={[75, 25]}
        colors={["#275be8", "#c4e8ef"]}
      />
      <PieChart
        title="Properties for Rent"
        value={550}
        series={[60, 40]}
        colors={["#275be8", "#c4e8ef"]}
      />
      <PieChart
        title="Total customers"
        value={5684}
        series={[75, 25]}
        colors={["#275be8", "#c4e8ef"]}
      />
      <PieChart
        title="Properties for Cities"
        value={555}
        series={[75, 25]}
        colors={["#275be8", "#c4e8ef"]}
      />
    </Box>
  );
};
