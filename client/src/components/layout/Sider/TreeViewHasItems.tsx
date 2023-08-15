import { CanAccess, ITreeMenu } from "@pankod/refine-core";
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  MuiList,
} from "@pankod/refine-mui";
import { ExpandMore, ExpandLess, ListOutlined } from "@mui/icons-material";

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
  console.log("TreeViewHasItem");
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
