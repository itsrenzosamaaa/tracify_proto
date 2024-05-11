"use client";
import * as React from "react";
import { useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import {
  styled,
  useTheme,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { UseApp } from "./StatNav";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MonitorIcon from "@mui/icons-material/Monitor";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#2f4975", // Set your desired background color here
  color: "#fff", // Set your desired text color here
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#FFFFFF", // Set your desired background color when open
      color: "#000000", // Set your desired text color when open
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#FFFFFF", // Set your desired background color when closed
      color: "#000000", // Set your desired text color when closed
    },
  }),
}));

const Overlay = styled("div")(({ theme, open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: open ? "rgba(0, 0, 0, 0.5)" : "transparent",
  zIndex: open ? theme.zIndex.drawer - 1 : -1,
  transition: theme.transitions.create("z-index", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const open = UseApp((state) => state.Nopen);
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // -------------INDAGDAG NA CODE PARA SA TABS--------------
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const DrawerTablist = (
    <TabContext>
      <TabList
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", marginTop: 3 }}
      >
        <Tab
          component={Link} // Set the component prop to Link
          href="/user_dashboard"
          label={
            <ListItem
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeOutlinedIcon
                  sx={{ fontSize: 30, marginLeft: -2.6, color: "#1a237e" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  color: "#1a237e",
                  alignItems: "center",
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItem>
          }
        />
        <Tab
          component={Link} // Set the component prop to Link
          href="/user_dashboard/profile"
          label={
            <ListItem
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBoxOutlinedIcon
                  sx={{ fontSize: 30, marginLeft: -2.6, color: "#1a237e" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                sx={{
                  color: "#1a237e",
                  alignItems: "center",
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItem>
          }
        />
        <Tab
          component={Link} // Set the component prop to Link
          href="/user_dashboard/match"
          label={
            <ListItem
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HighlightOffIcon
                  sx={{ fontSize: 30, marginLeft: -2.6, color: "#1a237e" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Match Item"
                sx={{
                  color: "#1a237e",
                  alignItems: "center",
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItem>
          }
        />
        <Tab
          component={Link} // Set the component prop to Link
          href="/user_dashboard/ratings"
          sx={{ backgroundColor: "" }}
          label={
            <ListItem
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MonitorIcon
                  sx={{ fontSize: 30, marginLeft: -2.6, color: "#1a237e" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Ratings"
                sx={{
                  color: "#1a237e",
                  alignItems: "center",
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItem>
          }
        />
      </TabList>
    </TabContext>
  );
  // -------------CLOSING--------------

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{ flexWrap: "nowrap" }}
        variant="permanent"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {DrawerTablist}
      </Drawer>
      {isMobileView && <Overlay open={open} />}
      <Box
        component="main"
        sx={{ flexGrow: 1, flexWrap: "nowrap" }}
      ></Box>
    </Box>
  );
}
