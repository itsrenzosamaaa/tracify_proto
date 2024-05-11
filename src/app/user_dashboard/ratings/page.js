"use client";
import { useState } from "react";
import { Box, Grid, Paper, Typography, Rating } from "@mui/material";
import {
  Card,
  CardOverflow,
  AspectRatio,
  CardContent,
  Button,
  Modal,
  ModalDialog,
  ModalClose,
  DialogContent,
  DialogTitle,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
} from "@mui/joy";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Image from "next/image";

const items = [
  {
    id: "1",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: true,
    rating: 4,
    feedback: 'america yaaaa HALLO HALLO HALLO HALLO'
  },
  {
    id: "2",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: true,
    rating: 4.5,
    feedback: 'america yaaaa HALLO HALLO HALLO HALLO'
  },
  {
    id: "3",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: true,
    rating: 3,
    feedback: 'america yaaaa HALLO HALLO HALLO HALLO'
  },
  {
    id: "4",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: true,
    rating: 5,
    feedback: 'america yaaaa HALLO HALLO HALLO HALLO'
  },
  {
    id: "5",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: false,
    rating: 0,
    feedback: '',
  },
  {
    id: "6",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: false,
    rating: 0,
    feedback: '',
  },
  {
    id: "7",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: false,
    rating: 0,
    feedback: '',
  },
  {
    id: "8",
    name: "Wallet",
    claimedDate: "09/21/2024",
    isRated: false,
    rating: 0,
    feedback: '',
  },
];

const rated = items.filter((item) => item.isRated);
console.log(rated);
const tobeRated = items.filter((item) => !item.isRated);
console.log(tobeRated);

export default function User() {
  const [openModal, setOpenModal] = useState(null);
  const handleOpenModal = (id) => setOpenModal(id);
  const handleCloseModal = () => setOpenModal(null);
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", marginRight: "1%" }}>
        <Sidebar />
        <Grid container spacing={2} sx={{ marginX: "1rem", marginY: "5rem" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="h5" component="div" sx={{ mb: "2rem" }}>
                My Reviews
              </Typography>
              <Box sx={{ overflow: "auto", height: "29rem" }}>
                {rated.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      orientation="horizontal"
                      variant="outlined"
                      size="lg"
                      sx={{ width: "100%", mb: "1rem" }}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 110 }}>
                        <Image src="/lost.jpg" alt="" height="140" width="250"/>
                        </AspectRatio>
                      </CardOverflow>
                      <Grid item xs={11} lg={11}>
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="h6" component="div">
                            {item.claimedDate}
                          </Typography>
                        </CardContent>
                      </Grid>
                      <Grid item xs={1} lg={1} sx={{ marginTop: "0.5rem" }}>
                        <Button
                          variant="solid"
                          onClick={() => handleOpenModal(item.id)}
                          sx={{ float: "right" }}
                        >
                          View
                        </Button>
                        <Modal
                          open={openModal === item.id}
                          onClose={handleCloseModal}
                        >
                          <ModalDialog>
                            <ModalClose />
                            <DialogTitle>Rating Details</DialogTitle>
                            <DialogContent>
                              With the user you rated
                            </DialogContent>
                            <Stack spacing={2}>
                              <FormControl>
                                <FormLabel>Rating</FormLabel>
                                <Rating
                                  name="rating"
                                  size="large"
                                  precision={0.5}
                                  defaultValue={item.rating}
                                  readOnly
                                />
                              </FormControl>
                              <FormControl>
                                <FormLabel>Feedback</FormLabel>
                                <Textarea
                                  variant="plain"
                                  defaultValue={item.feedback}
                                  readOnly
                                />
                              </FormControl>
                              <Button variant="solid" color="danger" onClick={handleCloseModal}>Close</Button>
                            </Stack>
                          </ModalDialog>
                        </Modal>
                      </Grid>
                    </Card>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="h5" component="div" sx={{ mb: "2rem" }}>
                To Rate
              </Typography>
              <Box sx={{ overflow: "auto", height: "29rem" }}>
                {tobeRated.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      orientation="horizontal"
                      variant="outlined"
                      size="lg"
                      sx={{ width: "100%", mb: "1rem" }}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 110 }}>
                          <Image src="/lost.jpg" alt="" height="140" width="250"/>
                        </AspectRatio>
                      </CardOverflow>
                      <Grid item xs={11} lg={11}>
                        <CardContent>
                          <Typography variant="h6" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="h6" component="div">
                            {item.claimedDate}
                          </Typography>
                        </CardContent>
                      </Grid>
                      <Grid item xs={1} lg={1} sx={{ marginTop: "0.5rem" }}>
                        <Button
                          variant="solid"
                          onClick={() => handleOpenModal(item.id)}
                          sx={{ float: "right" }}
                        >
                          Rate
                        </Button>
                        <Modal
                          open={openModal === item.id}
                          onClose={handleCloseModal}
                        >
                          <ModalDialog>
                            <ModalClose />
                            <DialogTitle>User Rating</DialogTitle>
                            <DialogContent>
                              How honest is user to you?
                            </DialogContent>
                            <Stack spacing={2}>
                              <FormControl>
                                <FormLabel>Rating</FormLabel>
                                <Rating
                                  name="rating"
                                  size="large"
                                  precision={0.5}
                                />
                              </FormControl>
                              <FormControl>
                                <FormLabel>Feedback</FormLabel>
                                <Textarea
                                  placeholder="Please provide your feedback here!"
                                  minRows={3}
                                  width="30"
                                  required
                                  sx={{ mb: 1 }}
                                />
                              </FormControl>
                              <Button variant="solid">Submit</Button>
                            </Stack>
                          </ModalDialog>
                        </Modal>
                      </Grid>
                    </Card>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
