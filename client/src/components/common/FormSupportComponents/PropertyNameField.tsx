import { FormControl, FormHelperText, TextField } from "@mui/material";
import { colors } from "constants/colors";

interface PropertyNameFieldProps {
  register: any;
}

export const PropertyNameField = ({ register }: PropertyNameFieldProps) => {
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
        Enter property name
      </FormHelperText>
      <TextField
        fullWidth
        required
        id="outlined-basic"
        color="info"
        variant="outlined"
        {...register("title", { required: true })}
      />
    </FormControl>
  );
};
