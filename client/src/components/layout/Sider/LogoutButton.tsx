import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@pankod/refine-mui";
import { Logout } from "@mui/icons-material";
import { colors } from "../../../constants/colors";

interface LogoutButtonProps {
  t: {
    (key: string, options?: any, defaultMessage?: string | undefined): string;
    (key: string, defaultMessage?: string | undefined): string;
  };
  collapsed: boolean;
  mutateLogout: any; // the type is different but I could not find where to import from
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  t,
  collapsed,
  mutateLogout,
}) => {
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
