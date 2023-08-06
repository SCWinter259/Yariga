import { CanAccess } from "@refinedev/core";
import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListOutlined from "@mui/icons-material/ListOutlined";

interface TreeViewNoItemType {
  route: any;
  name: any;
  item: any;
  label: any;
  collapsed: any;
  Link: any;
  isSelected: any;
  isNested: any;
  setOpened: any;
  icon: any;
}

export const TreeViewNoItem = ({
  route,
  name,
  item,
  label,
  collapsed,
  Link,
  isSelected,
  isNested,
  setOpened,
  icon,
}: TreeViewNoItemType) => {
  return (
    <CanAccess
      key={route}
      resource={name.toLowerCase()}
      action="list"
      params={{ resource: item }}
    >
      <Tooltip
        title={label ?? name}
        placement="right"
        disableHoverListener={!collapsed}
        arrow
      >
        <ListItemButton
          component={Link}
          to={route}
          selected={isSelected}
          onClick={() => {
            setOpened(false);
          }}
          sx={{
            pl: isNested ? 4 : 2,
            py: isNested ? 1.25 : 1,
            "&.Mui-selected": {
              "&:hover": {
                backgroundColor: isSelected ? "#1e36e8" : "transparent",
              },
              backgroundColor: isSelected ? "#475be8" : "transparent",
            },
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
              color: isSelected ? "#fff" : "#808191",
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
              color: isSelected ? "#fff" : "#808191",
              marginLeft: "10px",
            }}
          />
        </ListItemButton>
      </Tooltip>
    </CanAccess>
  );
};
