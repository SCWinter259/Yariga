import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logout from "@mui/icons-material/Logout";
import { colors } from "../../../constants/colors";

interface LogoutButton {
  t: {
    (key: string, options?: any, defaultMessage?: string | undefined): string;
    (key: string, defaultMessage?: string | undefined): string;
  };
  collapsed: boolean;
  mutateLogout: any; // the type is different but I could not find where to import from
}

export const LogoutButton = ({ t, collapsed, mutateLogout }: LogoutButton) => {
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
