import { FormControl, FormHelperText, TextField } from "@mui/material";
import { colors } from "constants/colors";

interface LocationFieldProps {
  register: any;
}

export const LocationField = ({ register }: LocationFieldProps) => {
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
        Enter Location
      </FormHelperText>
      <TextField
        fullWidth
        required
        id="outlined-basic"
        color="info"
        variant="outlined"
        {...register("location", { required: true })}
      />
    </FormControl>
  );
};
