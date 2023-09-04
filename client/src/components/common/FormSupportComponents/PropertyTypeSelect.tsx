import { FormControl, FormHelperText, Select, MenuItem } from "@mui/material";
import { colors } from "constants/colors";

interface PropertyTypeSelectProps {
  register: any;
}

export const PropertyTypeSelect = ({ register }: PropertyTypeSelectProps) => {
  return (
    <FormControl sx={{ flex: 1 }}>
      <FormHelperText
        sx={{
          fontWeight: 500,
          margin: "10px 0",
          fontSize: 16,
          color: colors.EERIE_BLACK,
        }}
      >
        Select Property Type
      </FormHelperText>
      <Select
        variant="outlined"
        color="info"
        displayEmpty
        required
        inputProps={{ "aria-label": "Without label" }}
        defaultValue="apartment"
        {...register("propertyType", {
          required: true,
        })}
      >
        <MenuItem value="apartment">Apartment</MenuItem>
        <MenuItem value="villa">Villa</MenuItem>
        <MenuItem value="farmhouse">farmhouse</MenuItem>
        <MenuItem value="condos">Condos</MenuItem>
        <MenuItem value="townhouse">Townhouse</MenuItem>
        <MenuItem value="duplex">Duplex</MenuItem>
        <MenuItem value="studio">Studio</MenuItem>
        <MenuItem value="chalet">Chalet</MenuItem>
      </Select>
    </FormControl>
  );
};
