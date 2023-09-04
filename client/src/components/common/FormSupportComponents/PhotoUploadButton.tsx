import { Stack, Typography, Button } from "@mui/material";
import { colors } from "constants/colors";

interface PhotoUploadButtonProps {
  handleImageChange: (file: any) => void;
  propertyImage: {
    name: string;
    url: string;
  };
}

export const PhotoUploadButton = ({
  handleImageChange,
  propertyImage,
}: PhotoUploadButtonProps) => {
  return (
    <Stack direction="column" gap={1} justifyContent="center" mb={2}>
      <Stack direction="row" gap={2}>
        <Typography
          color={colors.EERIE_BLACK}
          fontSize={16}
          fontWeight={500}
          my="10px"
        >
          Property Photo
        </Typography>

        <Button
          component="label"
          sx={{
            width: "fit-content",
            color: colors.UFO_GREEN,
            textTransform: "capitalize",
            fontSize: 16,
          }}
        >
          Upload *
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleImageChange(e.target.files![0]);
            }}
          />
        </Button>
      </Stack>
      <Typography
        fontSize={14}
        color={colors.ROMAN_SILVER}
        sx={{ wordBreak: "break-all" }}
      >
        {propertyImage?.name}
      </Typography>
    </Stack>
  );
};
