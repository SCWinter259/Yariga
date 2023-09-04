import { FormControl, FormHelperText, TextareaAutosize } from "@mui/material";
import { colors } from "constants/colors";

interface DescriptionFieldProps {
  register: any;
}

export const DescriptionField = ({ register }: DescriptionFieldProps) => {
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
        Enter Description
      </FormHelperText>
      <TextareaAutosize
        minRows={5}
        required
        placeholder="Write description"
        color="info"
        style={{
          width: "100%",
          background: "transparent",
          fontSize: "16px",
          borderColor: "rgba(0,0,0,0.23)",
          borderRadius: 6,
          padding: 10,
          color: colors.PHILIPPINE_GRAY,
        }}
        {...register("description", { required: true })}
      />
    </FormControl>
  );
};
