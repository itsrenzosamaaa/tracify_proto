"use client"
import * as React from 'react';
import { Box, Grid, Card, CardActionArea, ListItemIcon, CardContent, CardHeader } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Admin() {
    return (
      <>
        <Navbar />
        <Box sx={{ flexGrow: '1', display: 'flex', marginRight: '1%'}}>
          <Sidebar />
          <Grid container spacing={2} sx={{ marginTop: '6rem', marginX: '1rem' }}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: '1000px', marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5, }} elevation={3}>
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
                    <CardContent>
                      {/* Content here */}
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
                    <CardContent>
                      {/* Content here */}
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
                    <CardContent>
                      {/* Content here */}
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
                    <CardContent>
                      {/* Content here */}
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </>
    );
}