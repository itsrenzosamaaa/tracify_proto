"use client";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "next/link";
import Image from "next/image";1

const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function LostItemsID({ params }) {
  const id = params.id;
  const lostItems = [
    {
      id: 1,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 2,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 3,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 4,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 5,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 6,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 7,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
    {
      id: 8,
      name: "Wallet",
      category: 'Accessories',
      description:
        "Sa canteen ko po siya naiwan. Basta may lamang 300 po siya.",
      owner: "Izer Alindogan",
      location: 'RLO202',
      dateLost: 'January 12, 2024',
      timeLost: '2:30 PM',
    },
  ];

  const lostID = lostItems.find((item) => item.id === parseInt(id));

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: "1", display: "flex", marginRight: "1%" }}>
        <Sidebar />
        <Grid container spacing={2} sx={{ marginTop: "6rem", marginX: "1rem" }}>
          {lostID ? (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <Card elevation={3} sx={{ my: "1rem" }}>
                  <Box
                    sx={{
                      my: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Image src="/lost.jpg" height="140" width="250" alt="Found Item" />
                  </Box>
                  <Box sx={{ mx: "2rem", my: "2rem" }}>
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
                        <strong>Found by:</strong>
                      </span>
                      <span>{lostID.owner}</span>
                    </Typography>
                  </Box>
                </Card>
                <Card elevation={3} sx={{ my: "1rem" }}>
                  <Box sx={{ mx: "2rem", my: "2rem" }}>
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
                        <strong>Found in:</strong>
                      </span>
                      <span>{lostID.location}</span>
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
                        <strong>Date Found:</strong>
                      </span>
                      <span>{lostID.dateLost}</span>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <span>
                        <strong>Time Found:</strong>
                      </span>
                      <span>{lostID.timeLost}</span>
                    </Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={8} sx={{ marginBottom: "1rem" }}>
                <Card elevation={3} sx={{ my: "1rem" }}>
                  <Box sx={{ mx: "2rem", my: "2rem" }}>
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
                      <span>{lostID.name}</span>
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
                        <strong>Item Category:</strong>
                      </span>
                      <span>{lostID.category}</span>
                    </Typography>
                  </Box>
                </Card>
                <Card elevation={3} sx={{ my: "1rem" }}>
                  <Box sx={{ mx: "2rem", my: "2rem" }}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "1rem",
                      }}
                    >
                      <span>
                        <strong>Item Description:</strong>
                      </span>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        height: "4.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        wordBreak: "break-word",
                        py: "3rem",
                      }}
                    >
                      <span>&ldquo;{lostID.description}&rdquo;</span>
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </>
          ) : (
            <>
              <Typography variant="p" component="div">
                Oops! I think the item you searched for is not on the list...{" "}
                <br />
                Click <Link href="/office_dashboard/foundItems">here</Link> to
                redirect.
              </Typography>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
}
