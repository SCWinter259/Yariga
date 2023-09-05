import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { colors } from "constants/colors";

interface LogoutButtonProps {
  collapsed: boolean;
  mutateLogout: any;
  t: {
    (key: string, options?: any, defaultMessage?: string | undefined): string;
    (key: string, defaultMessage?: string | undefined): string;
  };
}

export const LogoutButton = ({
  collapsed,
  mutateLogout,
  t,
}: LogoutButtonProps) => {
  return (
    <Tooltip
      title={t("buttons.logout", "Logout")}
      placement="right"
      disableHoverListener={!collapsed}
      arrow
    >
      <ListItemButton
        key="logout"
        onClick={() => mutateLogout()}
        sx={{
          justifyContent: "center",
          margin: "10px auto",
          borderRadius: "12px",
          minHeight: "56px",
          width: "90%",
        }}
      >
        <ListItemIcon
          sx={{
            justifyContent: "center",
            minWidth: 36,
            color: colors.ROMAN_SILVER,
          }}
        >
          <Logout />
        </ListItemIcon>
        <ListItemText
          primary={t("buttons.logout", "Logout")}
          primaryTypographyProps={{
            noWrap: true,
            fontSize: "16px",
          }}
        />
      </ListItemButton>
    </Tooltip>
  );
};
