import { CanAccess } from "@refinedev/core";
import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListOutlined from "@mui/icons-material/ListOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import MuiList from "@mui/material/List";
import { ITreeMenu } from "@refinedev/core";

interface TreeViewHasItems {
  route: string | undefined;
  name: string;
  item: ITreeMenu;
  label: string | undefined;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (key: string) => void;
  isOpen: boolean;
  isNested: boolean;
  icon: React.ReactNode;
  isSelected: boolean;
  open: { [k: string]: any };
  renderTreeView: (tree: ITreeMenu[], selectedKey: string) => JSX.Element[];
  children: ITreeMenu[];
  selectedKey: string;
}

export const TreeViewHasItems = ({
  route,
  name,
  item,
  label,
  collapsed,
  setCollapsed,
  handleClick,
  isOpen,
  isNested,
  icon,
  isSelected,
  open,
  renderTreeView,
  children,
  selectedKey,
}: TreeViewHasItems) => {
  return (
    <CanAccess
      key={route}
      resource={name.toLowerCase()}
      action="list"
      params={{
        resource: item,
      }}
    >
      <div key={route}>
        <Tooltip
          title={label ?? name}
          placement="right"
          disableHoverListener={!collapsed}
          arrow
        >
          <ListItemButton
            onClick={() => {
              if (collapsed) {
                setCollapsed(false);
                if (!isOpen) {
                  handleClick(route || "");
                }
              } else {
                handleClick(route || "");
              }
            }}
            sx={{
              pl: isNested ? 4 : 2,
              justifyContent: "center",
              "&.Mui-selected": {
                "&:hover": {
                  backgroundColor: "transparent",
                },
                backgroundColor: "transparent",
              },
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                minWidth: 36,
                color: "primary.contrastText",
              }}
            >
              {icon ?? <ListOutlined />}
            </ListItemIcon>
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                noWrap: true,
                fontSize: "16px",
                fontWeight: isSelected ? "bold" : "normal",
              }}
            />
            {!collapsed && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </Tooltip>
        {!collapsed && (
          <Collapse in={open[route || ""]} timeout="auto" unmountOnExit>
            <MuiList component="div" disablePadding>
              {renderTreeView(children, selectedKey)}
            </MuiList>
          </Collapse>
        )}
      </div>
    </CanAccess>
  );
};
