import { useLogin } from "@refinedev/core";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { CredentialResponse } from "../interfaces/google";

import yariga from "../assets/yariga.svg";
import { colors } from "../constants/colors";
import { GoogleButton } from "components/GoogleButton";

export const LoginPage: React.FC = () => {
  console.log(1)
  const { mutate: login } = useLogin<CredentialResponse>({
    v3LegacyAuthProviderCompatible: true,
  });

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
