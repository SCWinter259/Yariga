import { FormControl, TextField, FormHelperText } from "@mui/material";
import { colors } from "constants/colors";

interface PropertyPriceFieldProps {
  register: any;
}

export const PropertyPriceField = ({ register }: PropertyPriceFieldProps) => {
  return (
    <FormControl>
      <FormHelperText
        sx={{
          fontWeight: 500,
          margin: "10px 0",
          fontSize: 16,
          color: colors.EERIE_BLACK,
        }}
      >
        Enter property price
      </FormHelperText>
      <TextField
        fullWidth
        required
        id="outlined-basic"
        color="info"
        type="number"
        variant="outlined"
        {...register("price", { required: true })}
      />
    </FormControl>
  );
};
