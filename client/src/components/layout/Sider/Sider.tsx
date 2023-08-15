import React, { useState } from "react";

import {
  Box,
  Drawer,
  Button,
  IconButton,
  MuiList,
  Sider as DefaultSider
} from "@pankod/refine-mui";
import { ChevronLeft, ChevronRight, MenuRounded } from "@mui/icons-material";

import {
  ITreeMenu,
  useIsExistAuthentication,
  useLogout,
  useTitle,
  useTranslate,
  useRouterContext,
  useMenu,
  useRefineContext,
} from "@pankod/refine-core";

import { Title as DefaultTitle } from "../Title";
import { LogoutButton } from "./LogoutButton";
import { DashboardButton } from "./DashboardButton";
import { TreeViewHasItems } from "./TreeViewHasItems";
import { TreeViewNoItem } from "./TreeViewNoItem";
import { colors } from "../../../constants/colors";

export const Sider: typeof DefaultSider = ({ render }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [opened, setOpened] = useState(false);

  const t = useTranslate();
  const { Link } = useRouterContext();
  const { hasDashboard } = useRefineContext();
  const translate = useTranslate();

  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const isExistAuthentication = useIsExistAuthentication();
  const { mutate: mutateLogout } = useLogout();
  const Title = useTitle();

  const [open, setOpen] = useState<{ [k: string]: any }>({});

  React.useEffect(() => {
    setOpen((previousOpen) => {
      const previousOpenKeys: string[] = Object.keys(previousOpen);
      const uniqueKeys = new Set([...previousOpenKeys, ...defaultOpenKeys]);
      const uniqueKeysRecord = Object.fromEntries(
        Array.from(uniqueKeys.values()).map((key) => [key, true])
      );
      return uniqueKeysRecord;
    });
  }, [defaultOpenKeys]);

  const drawerWidth = collapsed ? 64 : 200;

  const RenderToTitle = Title ?? DefaultTitle;

  const handleClick = (key: string) => {
    setOpen({ ...open, [key]: !open[key] });
  };

  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
    return tree.map((item: ITreeMenu) => {
      const { icon, label, route, name, children, parentName } = item;
      console.log(item);
      const isOpen = open[route || ""] || false;

      const isSelected = route === selectedKey;
      const isNested = !(parentName === undefined);

      const treeViewHasItems = (
        <TreeViewHasItems
          route={route}
          name={name}
          item={item}
          label={label}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          handleClick={handleClick}
          isOpen={isOpen}
          isNested={isNested}
          icon={icon}
          isSelected={isSelected}
          open={open}
          renderTreeView={renderTreeView}
          children={children}
          selectedKey={selectedKey}
        />
      );

      const treeViewNoItem = (
        <TreeViewNoItem
          route={route}
          name={name}
          item={item}
          label={label}
          collapsed={collapsed}
          Link={Link}
          isSelected={isSelected}
          isNested={isNested}
          setOpened={setOpened}
          icon={icon}
        />
      );

      return children.length > 0 ? treeViewHasItems : treeViewNoItem;
    });
  };

  const dashboard = hasDashboard ? (
    <DashboardButton
      translate={translate}
      collapsed={collapsed}
      Link={Link}
      selectedKey={selectedKey}
      setOpened={setOpened}
    />
  ) : null;

  const logout = isExistAuthentication && (
    <LogoutButton t={t} collapsed={collapsed} mutateLogout={mutateLogout} />
  );

  const items = renderTreeView(menuItems, selectedKey);

  const renderSider = () => {
    if (render) {
      return render({
        dashboard,
        logout,
        items,
        collapsed,
      });
    }
    return (
      <>
        {dashboard}
        {items}
        {logout}
      </>
    );
  };

  const drawer = (
    <MuiList disablePadding sx={{ mt: 1, color: colors.ROMAN_SILVER }}>
      {renderSider()}
    </MuiList>
  );

  return (
    <>
      <Box
        sx={{
          width: { xs: drawerWidth },
          display: {
            xs: "none",
            md: "block",
          },
          transition: "width 0.3s ease",
        }}
      />
      <Box
        component="nav"
        sx={{
          position: "fixed",
          zIndex: 1101,
          width: { sm: drawerWidth },
          display: "flex",
        }}
      >
        <Drawer
          variant="temporary"
          open={opened}
          onClose={() => setOpened(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: 256,
              bgcolor: colors.LOTION,
            },
          }}
        >
          <Box
            sx={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RenderToTitle collapsed={false} />
          </Box>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          PaperProps={{ elevation: 0 }}
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              bgcolor: colors.LOTION,
              overflow: "hidden",
              transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
            },
          }}
          open
        >
          <Box
            sx={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RenderToTitle collapsed={collapsed} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {drawer}
          </Box>
          <Button
            sx={{
              background: colors.ROYAL_BLUE,
              color: "primary.contrastText",
              textAlign: "center",
              borderRadius: 0,
              borderTop: "1px solid #ffffff1a",
              "&:hover": {
                background: colors.PALATINATE_BLUE,
              },
            }}
            fullWidth
            size="large"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </Drawer>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: "64px",
            left: "0px",
            borderRadius: "0 6px 6px 0",
            bgcolor: colors.ROYAL_BLUE,
            zIndex: 1199,
            width: "36px",
          }}
        >
          <IconButton
            sx={{ color: colors.WHITE, width: "36px" }}
            onClick={() => setOpened((prev) => !prev)}
          >
            <MenuRounded />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
