import { useLogin } from "@pankod/refine-core";
import { Box, Container } from "@pankod/refine-mui";

import { CredentialResponse } from "../interfaces/google";

import yariga from "../assets/yariga.svg";
import { colors } from "../constants/colors";
import { GoogleButton } from "components/GoogleButton";

export const LoginPage: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  return (
    <Box component="div" sx={{ backgroundColor: colors.LOTION }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={yariga} alt="Yariga Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton login={login} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
