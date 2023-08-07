import {
  Refine,
  LegacyAuthProvider as AuthProvider,
} from "@refinedev/core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  ReadyPage,
  ErrorComponent,
} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";

import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";
import axios, { AxiosRequestConfig } from "axios";

import { Title } from "components/layout/Title";
import { Sider } from "components/layout/Sider/Sider";
import { Header } from "components/layout/Header";
import { Layout } from "components/layout/Layout";
import { ColorModeContextProvider } from "contexts/colorMode";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import { LoginPage } from "pages/login";
import { HomePage } from "pages/home";
import { AgentsPage } from "pages/agents";
import { MyProfilePage } from "pages/my-profile";
import { PropertyDetailsPage } from "pages/property-details";
import { AllPropertiesPage } from "pages/all-properties";
import { CreatePropertyPage } from "pages/create-property";
import { AgentProfilePage } from "pages/agent-profile";
import { EditPropertyPage } from "pages/edit-property";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthProvider = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        const response = await fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: profileObj.name,
            email: profileObj.email,
            avatar: profileObj.picture,
          }),
        });

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...profileObj,
              avatar: profileObj.picture,
              userid: data._id,
            })
          );
        } else {
          return Promise.reject();
        }
      }
      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: async () => null,
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  console.log(2)

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:8080/api/v1")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "properties",
              list: AllPropertiesPage,
              show: PropertyDetailsPage,
              create: CreatePropertyPage,
              edit: EditPropertyPage,
              icon: <VillaOutlined />,
            },
            {
              name: "agents",
              list: AgentsPage,
              show: AgentProfilePage,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "reviews",
              list: HomePage,
              icon: <StarOutlineRounded />,
            },
            {
              name: "messages",
              list: HomePage,
              icon: <ChatBubbleOutline />,
            },
            {
              name: "my-profile",
              options: { label: "My Profile " },
              list: MyProfilePage,
              icon: <AccountCircleOutlined />,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          legacyRouterProvider={routerProvider}
          legacyAuthProvider={authProvider}
          LoginPage={LoginPage}
          DashboardPage={HomePage}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
