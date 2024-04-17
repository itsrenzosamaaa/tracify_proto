"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Box, Grid, Typography, Button, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (form.username === "office" && form.password === "office") {
        setIsError(false);
        router.push("/office_dashboard");
      } else if (form.username === "student" && form.password === "student") {
        setIsError(false);
        router.push("/user_dashboard");
      } else {
        setIsError(true);
      }

      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card
            elevation={3}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              marginTop: "70px",
              borderRadius: "5%",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LoginIcon color="primary" sx={{ fontSize: "3rem" }} />
                </Grid>
                <Typography variant="h4" component="div" align="center">
                  Tracify
                </Typography>
                <Typography variant="body1" align="center">
                  Lost and Found System
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={form.username}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        value={form.password}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      {isError && (
                        <Typography
                          variant="p"
                          component="div"
                          sx={{ color: "red", textAlign: "center" }}
                        >
                          Invalid Credentials!!
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
