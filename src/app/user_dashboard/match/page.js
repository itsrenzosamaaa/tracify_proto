"use client";

import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import { FormControl, Button } from "@mui/joy";
import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 2,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 3,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 4,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 5,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 6,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 7,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 8,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "found",
    description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 9,
    name: "Wallet",
    category: "Accessories",
    lostOrfound: "lost",
    description: "Sa canteen ko po siya nawala na may lamang 300 po.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
  {
    id: 10,
    name: "Airpods",
    category: "Electronics",
    lostOrfound: "lost",
    description: "Sa canteen ko po siya nawala, lowbat po ung sa kaliwa niya.",
    user: "Renzo Flestado",
    location: "RLO202",
    date: "January 12, 2024",
    time: "2:30 PM",
    claimLocation: "SASO Office",
  },
];

const lost = items.filter((item) => item.lostOrfound === "lost");
const found = items.filter((item) => item.lostOrfound === "found");

const Match = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (itemId) => {
    const selectedItem = lost.find((item) => item.id === parseInt(itemId));
    setSelectedItem(selectedItem);
    console.log(selectedItem);
    console.log(itemId);
    console.log(lost);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", marginRight: "1%" }}>
        <Sidebar />
        <Grid container spacing={2} sx={{ marginX: "1rem", marginY: "5rem" }}>
          <Grid item xs={12} lg={8}>
            <Paper elevation={2} sx={{ padding: 3 }}>
              <Typography variant="h5" component="div">
                List of Potential Items
              </Typography>
              <Box sx={{ overflow: "auto", height: "29rem" }}>
                <Grid container spacing={2}>
                  {found.map((item) => (
                    <Grid key={item.id} item xs={12} sm={12} md={6} lg={6}>
                      <Card sx={{ height: "100%" }}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="/found.jpg"
                          alt="Found Item"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Found by: {item.user}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">More Details</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper elevation={2} sx={{ height: "29rem", padding: 3 }}>
              <Typography variant="h5" component="div" sx={{ mb: "1rem" }}>
                Matcher
              </Typography>
              <Grid item lg={12}>
                <FormControl sx={{ marginBottom: "2rem" }}>
                  <Select onChange={(e) => handleSelectItem(e.target.value)}>
                    {lost.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        Lost No. {item.id}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {selectedItem && (
                <>
                  <Grid item lg={12}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "0.5rem",
                      }}
                    >
                      <span>
                        <strong>Item Name:</strong>
                      </span>
                      <span>{selectedItem.name}</span>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "0.5rem",
                      }}
                    >
                      <span>
                        <strong>Category:</strong>
                      </span>
                      <span>{selectedItem.category}</span>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "0.5rem",
                      }}
                    >
                      <span>
                        <strong>Description:</strong>
                      </span>
                      <span>{selectedItem.description}</span>
                    </Typography>
                    <Button sx={{ width: "100%" }} variant="solid">
                      Match Start
                    </Button>
                  </Grid>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Match;
