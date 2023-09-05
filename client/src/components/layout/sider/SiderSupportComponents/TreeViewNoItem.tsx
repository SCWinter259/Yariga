import { CanAccess, ITreeMenu } from "@refinedev/core";
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ListOutlined } from "@mui/icons-material";
import { colors } from "constants/colors";

interface TreeViewNoItemProps {
  route: string | undefined;
  name: string;
  item: ITreeMenu;
  label: string | undefined;
  collapsed: boolean;
  Link: React.FC<any>;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isSelected: boolean;
  isNested: boolean;
  icon: React.ReactNode;
}

export const TreeViewNoItem = ({
  route,
  name,
  item,
  label,
  collapsed,
  Link,
  setOpened,
  isSelected,
  isNested,
  icon,
}: TreeViewNoItemProps) => {
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
                backgroundColor: isSelected
                  ? colors.PALATINATE_BLUE
                  : "transparent",
              },
              backgroundColor: isSelected ? colors.ROYAL_BLUE : "transparent",
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
              color: isSelected ? colors.WHITE : colors.ROMAN_SILVER,
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
              color: isSelected ? colors.WHITE : colors.ROMAN_SILVER,
              marginLeft: "10px",
            }}
          />
        </ListItemButton>
      </Tooltip>
    </CanAccess>
  );
};
