import React from "react";
import { Box, Grid, Typography, Card, CardHeader, ListItemIcon, CardContent } from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import GroupIcon from "@mui/icons-material/Group";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", marginRight: "1%" }}>
        <Sidebar />
        <Grid container spacing={2} sx={{ marginX: "1rem", marginY: "5rem" }}>
            <Typography variant="body1" component="div">
                Profile
            </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
