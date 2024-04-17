"use client"
import * as React from 'react';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Box, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UseApp } from './StatNav';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Link from 'next/link';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: '#2f4975', // Set your desired background color here
      color: '#fff', // Set your desired text color here
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': {
          ...openedMixin(theme),
          backgroundColor: '#14394D', // Set your desired background color when open
          color: '#fff', // Set your desired text color when open
        },
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': {
          ...closedMixin(theme),
          backgroundColor: '#14394D', // Set your desired background color when closed
          color: '#fff', // Set your desired text color when closed
        },
      }),
    }),
  );
 
export default function Admin() {
 
    const theme = useTheme();
    const open = UseApp ((state) => state.Nopen);

    // -------------INDAGDAG NA CODE PARA SA TABS--------------
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // -------------CLOSING--------------

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                
                <DrawerHeader>
                    <IconButton>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />
                <TabContext>
                    <TabList
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', marginTop:3,}}
                    >
                        <Tab
                            component={Link} // Set the component prop to Link
                            href="/office_dashboard"
                            sx={{backgroundColor:''}}
                            label={
                                <ListItem                
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                                >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                <OtherHousesOutlinedIcon sx={{fontSize: 30, marginLeft: -2.6, color: '#8a96a3',}}/>
                                </ListItemIcon>                   
                                <ListItemText primary="Home" sx={{ color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />
                                </ListItem>  
                            }
                        />
                        <Tab
                            component={Link} // Set the component prop to Link
                            href="/office_dashboard/foundItems"
                            label={
                                <ListItem                
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                                >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                <PhotoCameraFrontOutlinedIcon sx={{fontSize: 30, marginLeft:  -2.6, color: '#8a96a3' }}/>
                                </ListItemIcon>                   
                                <ListItemText primary="Found Items" sx={{color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />       
                                </ListItem>  
                            }
                    
                        />
                        <Tab
                            component={Link} // Set the component prop to Link
                            href="/office_dashboard/lostItems"
                            label={
                                <ListItem                
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                                >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                <GroupOutlinedIcon sx={{fontSize: 30, marginLeft:  -2.6, color: '#8a96a3' }}/>
                                </ListItemIcon>                   
                                <ListItemText primary="Lost Items" sx={{color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />       
                                </ListItem>  
                            }
                    
                        />
                        <Tab
                            component={Link} // Set the component prop to Link
                            href="/office_dashboard/monitor"
                            sx={{backgroundColor:''}}
                            label={
                                <ListItem                
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                                >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                <OtherHousesOutlinedIcon sx={{fontSize: 30, marginLeft: -2.6, color: '#8a96a3',}}/>
                                </ListItemIcon>                   
                                <ListItemText primary="Monitor" sx={{ color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />
                                </ListItem>  
                            }
                        />
                        <Tab
                            component={Link} // Set the component prop to Link
                            href="/office_dashboard/users"
                            label={
                                <ListItem                
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                                >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                <GroupOutlinedIcon sx={{fontSize: 30, marginLeft:  -2.6, color: '#8a96a3' }}/>
                                </ListItemIcon>                   
                                <ListItemText primary="Users" sx={{color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />       
                                </ListItem>  
                            }
                    
                        />
                    </TabList>
                </TabContext>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, }}>
              <DrawerHeader />
            </Box>
        </Box>
    );
}