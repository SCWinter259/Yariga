import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logout from "@mui/icons-material/Logout";

export const LogoutButton = () => {
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
            color: "#808191",
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
