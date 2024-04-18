"use client"
import * as React from 'react';
import { Box, Grid, Card, CardActionArea, ListItemIcon, CardContent, CardHeader, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Admin() {
    return (
      <>
        <Navbar />
        <Box sx={{ flexGrow: '1', display: 'flex', marginRight: '1%'}}>
          <Sidebar />
          <Grid container spacing={2} sx={{ marginX: '1rem', marginY: '5rem'}}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card sx={{ maxWidth: '1000px', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, }} elevation={3}>
                <CardActionArea>
                  <CardHeader
                    title="Found Items"
                    component="div"
                    sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                  />
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end', // Align to the right
                      paddingRight: '40px',
                    }}
                  >
                    <GroupIcon fontSize='large'/>
                  </ListItemIcon>
                  <CardContent>
                    <CardContent sx={{ fontSize: '2rem' }}>
                      10
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card sx={{ maxWidth: '1000px', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5 }} elevation={3}>
                <CardActionArea>
                  <CardHeader
                    title="Lost Items"
                    component="div"
                    sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                  />
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end', // Align to the right
                      paddingRight: '40px',
                    }}
                  >
                    <GroupIcon fontSize='large'/>
                  </ListItemIcon>
                  <CardContent>
                    <CardContent sx={{ fontSize: '2rem' }}>
                      10
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card sx={{ maxWidth: '1000px', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5 }} elevation={3}>
                <CardActionArea>
                  <CardHeader
                    title="Users"
                    component="div"
                    sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                  />
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end', // Align to the right
                      paddingRight: '40px',
                    }}
                  >
                    <GroupIcon fontSize='large'/>
                  </ListItemIcon>
                  <CardContent>
                    <CardContent sx={{ fontSize: '2rem' }}>
                      12
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card sx={{ height: '50vh', maxWidth: '1000px', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5 }} elevation={3}>
                    <Typography variant="body1" component="div">1st Content</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card sx={{ height: '50vh', maxWidth: '1000px', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5 }} elevation={3}>
                    <Typography variant="body1" component="div">2nd Content</Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </>
    );
}