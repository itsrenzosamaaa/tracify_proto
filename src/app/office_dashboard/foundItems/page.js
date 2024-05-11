"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Textarea from "@mui/joy/Textarea";
import Link from "next/link";
import FormLabel from "@mui/material/FormLabel";
import ArticleIcon from "@mui/icons-material/Article";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { styled } from "@mui/joy";
import SvgIcon from "@mui/joy/SvgIcon";
import ModalClose from "@mui/joy/ModalClose";
import { Pagination } from "@mui/material";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function FoundItems() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const foundItems = [
    {
      id: 1,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 2,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 3,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 4,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 5,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 6,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 7,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
    {
      id: 8,
      name: "Wallet",
      description: "Sa canteen ko po siya nakuha na may lamang 300 po.",
      foundBy: "Renzo Flestado",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = foundItems.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <Box sx={{ flexWrap: "nowrap", display: "flex", paddingRight: "1%" }}>
        <Sidebar />
        <Grid container spacing={2} sx={{ marginTop: "6rem", marginX: "1rem" }}>
          <Box sx={{ width: "100%", marginBottom: "3rem" }}>
            <Grid container display="flex" justifyContent="space-between">
              <Grid item sx={{ marginLeft: "1rem", marginBottom: "1rem" }}>
                <Typography variant="h4" component="div">
                  Found Items
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={6}
                lg={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  component={Link}
                  href="/office_dashboard/foundItems/requests"
                  color="primary"
                  variant="solid"
                  startDecorator={<ArticleIcon />}
                >
                  Requests
                </Button>
                <Button
                  color="success"
                  variant="solid"
                  onClick={handleOpen}
                  startDecorator={<Add />}
                >
                  Found Item
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ModalDialog>
                    <ModalClose />
                    <DialogTitle>Add Found Item</DialogTitle>
                    <DialogContent>
                      Fill in the information about the item.
                    </DialogContent>
                    <Stack spacing={2}>
                      <FormControl>
                        <Input required placeholder="Name" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Category</FormLabel>
                        <RadioGroup
                          orientation="horizontal"
                          defaultValue="outlined"
                          name="radio-buttons-group"
                        >
                          <Radio
                            value="Electronics"
                            label="Electronics"
                            variant="outlined"
                          />
                          <Radio
                            value="Clothing"
                            label="Clothing"
                            variant="outlined"
                          />
                          <Radio
                            value="Accessories"
                            label="Accessories"
                            variant="outlined"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <Textarea
                          minRows={3}
                          required
                          placeholder="Description"
                        />
                      </FormControl>
                      <FormControl>
                        <Input required placeholder="Item Found" />
                      </FormControl>
                      <FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DateTimeField"]}>
                            <DemoItem>
                              <DateTimePicker label="Date and Time Found" />
                            </DemoItem>
                          </DemoContainer>
                        </LocalizationProvider>
                      </FormControl>
                      <FormControl>
                        <Input required placeholder="Finder" />
                      </FormControl>
                      <FormControl>
                        <Button
                          component="label"
                          role={undefined}
                          tabIndex={-1}
                          variant="outlined"
                          color="neutral"
                          startDecorator={
                            <SvgIcon>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>
                            </SvgIcon>
                          }
                        >
                          Upload a file
                          <VisuallyHiddenInput
                            type="file"
                            accept="jpg, png, jpeg"
                          />
                        </Button>
                      </FormControl>
                      <Button variant="solid">Submit</Button>
                    </Stack>
                  </ModalDialog>
                </Modal>
              </Grid>
            </Grid>
          </Box>
          {displayedItems.map((item) => {
            return (
              <Grid
                key={item.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card sx={{ maxWidth: 345 }} elevation={3}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/found.jpg"
                    title="Found Item"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      Found by: {item.foundBy}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component="a"
                      href={`/office_dashboard/foundItems/${item.id}`}
                      size="small"
                      variant="plain"
                    >
                      More Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Pagination
        count={Math.ceil(foundItems.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </>
  );
}
