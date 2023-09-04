import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { colors } from "constants/colors";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";
import { PropertyNameField } from "./FormSupportComponents/PropertyNameField";
import { DescriptionField } from "./FormSupportComponents/DescriptionField";
import { PropertyTypeSelect } from "./FormSupportComponents/PropertyTypeSelect";
import { PropertyPriceField } from "./FormSupportComponents/PropertyPriceField";
import { LocationField } from "./FormSupportComponents/LocationField";
import { PhotoUploadButton } from "./FormSupportComponents/PhotoUploadButton";

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={colors.EERIE_BLACK}>
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor={colors.LOTION}>
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <PropertyNameField register={register} />
          <DescriptionField register={register} />

          <Stack direction="row" gap={4}>
            <PropertyTypeSelect register={register} />
            <PropertyPriceField register={register} />
          </Stack>

          <LocationField register={register} />

          <PhotoUploadButton
            handleImageChange={handleImageChange}
            propertyImage={propertyImage}
          />

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor={colors.ROYAL_BLUE}
            color={colors.LOTION}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;
