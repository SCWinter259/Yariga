import { Box, Typography } from "@mui/material";
import PropertyCard from "../PropertyCard";
import { PropertyProps } from "interfaces/common";
import { colors } from "constants/colors";

interface PropertyListProps {
  type: string;
  properties: any;
}

export const PropertyList = ({ type, properties }: PropertyListProps) => {
  return (
    <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor={colors.LOTION}>
      <Typography fontSize={18} fontWeight={600} color={colors.EERIE_BLACK}>
        {type} Properties
      </Typography>

      <Box
        mt={2.5}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2.5,
        }}
      >
        {properties?.map((property: PropertyProps) => (
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
  );
};
