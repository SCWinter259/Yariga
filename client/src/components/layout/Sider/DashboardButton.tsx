import { CanAccess } from "@refinedev/core";
import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Dashboard from "@mui/icons-material/Dashboard";

interface DashboardButton {
  translate: {
    (key: string, options?: any, defaultMessage?: string | undefined): string;
    (key: string, defaultMessage?: string | undefined): string;
  };
  collapsed: boolean;
  Link: React.FC<any>;
  selectedKey: string;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardButton = ({
  translate,
  collapsed,
  Link,
  selectedKey,
  setOpened,
}: DashboardButton) => {
  return (
    <CanAccess resource="dashboard" action="list">
      <Tooltip
        title={translate("dashboard.title", "Dashboard")}
        placement="right"
        disableHoverListener={!collapsed}
        arrow
      >
        <ListItemButton
          component={Link}
          to="/"
          selected={selectedKey === "/"}
          onClick={() => {
            setOpened(false);
          }}
          sx={{
            pl: 2,
            py: 1,
            "&.Mui-selected": {
              "&:hover": {
                backgroundColor: "transparent",
              },
              backgroundColor: "transparent",
            },
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              justifyContent: "center",
              minWidth: 36,
              color: "#808191",
              marginLeft: "6px",
              marginRight: "14px",
            }}
          >
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            primary={translate("dashboard.title", "Dashboard")}
            primaryTypographyProps={{
              noWrap: true,
              fontSize: "16px",
              fontWeight: selectedKey === "/" ? "bold" : "normal",
            }}
          />
        </ListItemButton>
      </Tooltip>
    </CanAccess>
  );
};
