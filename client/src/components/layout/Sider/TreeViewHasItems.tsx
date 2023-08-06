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

export const TreeViewHasItems = () => {
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
