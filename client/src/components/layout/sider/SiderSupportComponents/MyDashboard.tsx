import { CanAccess } from "@refinedev/core";
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import { colors } from "constants/colors";

interface MyDashboardProps {
  translate: {
    (key: string, options?: any, defaultMessage?: string | undefined): string;
    (key: string, defaultMessage?: string | undefined): string;
  };
  collapsed: boolean;
  Link: React.FC<any>;
  selectedKey: string;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyDashboard = ({
  translate,
  collapsed,
  Link,
  selectedKey,
  setOpened,
}: MyDashboardProps) => {
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
              color: colors.ROMAN_SILVER,
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
