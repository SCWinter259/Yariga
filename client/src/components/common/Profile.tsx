import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ProfileProps } from "interfaces/common";
import { checkImage } from "utils/checkImage";
import { links } from "constants/links";
import { ProfileInfo } from "./ProfileSupportComponents/ProfileInfo";
import { PropertyList } from "./ProfileSupportComponents/PropertyList";
import { colors } from "constants/colors";

const Profile = ({ type, name, avatar, email, properties }: ProfileProps) => (
  <Box>
    <Typography fontSize={25} fontWeight={700} color={colors.EERIE_BLACK}>
      {type} Profile
    </Typography>

    <Box mt="20px" borderRadius="15px" padding="20px" bgcolor={colors.LOTION}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2.5,
        }}
      >
        <img
          src={links.PROFILE_BACKGROUND_URL}
          width={340}
          height={320}
          alt="abstract"
          className="my_profile-bg"
        />
        <Box
          flex={1}
          sx={{
            marginTop: { md: "58px" },
            marginLeft: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap="20px"
          >
            <img
              src={checkImage(avatar) ? avatar : links.DEFAULT_AVATAR_URL}
              width={78}
              height={78}
              alt="user_profile"
              className="my_profile_user-img"
            />
            <ProfileInfo name={name} email={email} />
          </Box>
        </Box>
      </Box>
    </Box>

    {properties.length > 0 && (
      <PropertyList type={type} properties={properties} />
    )}
  </Box>
);

export default Profile;
