import { CanAccess, ITreeMenu } from "@refinedev/core";
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import { ListOutlined, ExpandLess, ExpandMore } from "@mui/icons-material";

interface TreeViewHasItemsProps {
  route: string | undefined;
  name: string;
  item: ITreeMenu;
  label: string | undefined;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: any;
  handleClick: (key: string) => void;
  isNested: boolean;
  icon: React.ReactNode;
  isSelected: boolean;
  open: {
    [k: string]: any;
  };
  renderTreeView: (tree: ITreeMenu[], selectedKey: string) => any[];
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
}: TreeViewHasItemsProps) => {
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
            <List component="div" disablePadding>
              {renderTreeView(children, selectedKey)}
            </List>
          </Collapse>
        )}
      </div>
    </CanAccess>
  );
};
