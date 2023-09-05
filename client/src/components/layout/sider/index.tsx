import React, { useState } from "react";
import { Sider as DefaultSider } from "@refinedev/mui";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import MuiList from "@mui/material/List";
import {
  ITreeMenu,
  useIsExistAuthentication,
  useLogout,
  useTitle,
  useTranslate,
  useRouterContext,
  useMenu,
  useRefineContext,
} from "@refinedev/core";

import { Title as DefaultTitle } from "../title";
import { TreeViewHasItems } from "./SiderSupportComponents/TreeViewHasItems";
import { TreeViewNoItem } from "./SiderSupportComponents/TreeViewNoItem";
import { MyDashboard } from "./SiderSupportComponents/MyDashboard";
import { LogoutButton } from "./SiderSupportComponents/LogoutButton";
import { colors } from "constants/colors";
import { CollapseButton } from "./SiderSupportComponents/CollapseButton";
import { ClickableTitle } from "./SiderSupportComponents/ClickableTitle";

export const Sider: typeof DefaultSider = ({ render }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [opened, setOpened] = useState(false);

  const drawerWidth = () => {
    if (collapsed) return 64;
    return 200;
  };

  const t = useTranslate();
  const { Link } = useRouterContext();
  const { hasDashboard } = useRefineContext();
  const translate = useTranslate();

  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const isExistAuthentication = useIsExistAuthentication();
  const { mutate: mutateLogout } = useLogout({
    v3LegacyAuthProviderCompatible: true,
  });
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

  const RenderToTitle = Title ?? DefaultTitle;

  const handleClick = (key: string) => {
    setOpen({ ...open, [key]: !open[key] });
  };

  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
    return tree.map((item: ITreeMenu) => {
      const { icon, label, route, name, children, parentName } = item;
      const isOpen = open[route || ""] || false;

      const isSelected = route === selectedKey;
      const isNested = !(parentName === undefined);

      if (children.length > 0) {
        return (
          <TreeViewHasItems
            route={route}
            name={name}
            item={item}
            label={label}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isOpen={isOpen}
            handleClick={handleClick}
            isNested={isNested}
            icon={icon}
            isSelected={isSelected}
            open={open}
            renderTreeView={renderTreeView}
            children={children}
            selectedKey={selectedKey}
          />
        );
      }

      return (
        <TreeViewNoItem
          route={route}
          name={name}
          item={item}
          label={label}
          collapsed={collapsed}
          Link={Link}
          setOpened={setOpened}
          isSelected={isSelected}
          isNested={isNested}
          icon={icon}
        />
      );
    });
  };

  const dashboard = hasDashboard ? (
    <MyDashboard
      translate={translate}
      collapsed={collapsed}
      Link={Link}
      selectedKey={selectedKey}
      setOpened={setOpened}
    />
  ) : null;

  const logout = isExistAuthentication && (
    <LogoutButton collapsed={collapsed} mutateLogout={mutateLogout} t={t} />
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
          width: { xs: drawerWidth() },
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
          width: { sm: drawerWidth() },
          display: "flex",
        }}
      >
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
          <ClickableTitle RenderToTitle={RenderToTitle} collapsed={collapsed} />
          <Box
            sx={{
              flexGrow: 1,
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {drawer}
          </Box>
          <CollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
        </Drawer>
      </Box>
    </>
  );
};
