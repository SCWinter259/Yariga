import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ProgressBar } from "./PropertyReferralsSupportComponents/ProgressBar";
import { propertyReferralsInfo } from "constants/propertyReferralsInfo";
import { colors } from "constants/colors";

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor={colors.LOTION}
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color={colors.EERIE_BLACK}>
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
