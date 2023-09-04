import { useGetIdentity } from "@refinedev/core";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { links } from "../../constants/links";
import { checkImage } from "utils/checkImage";

import { AgentCardProp } from "interfaces/agent";
import { AgentInfo } from "./AgentCardSupportComponents/AgentInfo";

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";

    return `/agents/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
        },
      }}
    >
      <img
        src={checkImage(avatar) ? avatar : links.DEFAULT_AVATAR_URL}
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <AgentInfo name={name} email={email} noOfProperties={noOfProperties} />
    </Box>
  );
};

export default AgentCard;
