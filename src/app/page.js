"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import { Input, Button } from "@mui/joy";
import LoginIcon from "@mui/icons-material/Login";
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FormHelperText from '@mui/joy/FormHelperText';

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
    setIsError(false);
    e.preventDefault();
    setIsLoading(true);
    console.log('nya')

    setTimeout(() => {
      if (form.username === "office" && form.password === "office") {
        router.push("/office_dashboard");
      } else if (form.username === "user" && form.password === "user") {
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
        <Grid item xs={9} sm={9} md={6} lg={4}>
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
                      <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        variant="outlined"
                        size="md"
                        value={form.username}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        variant="outlined"
                        size="md"
                        value={form.password}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        type="submit"
                        variant="solid"
                        loading={isLoading}
                      >
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {isError && (
                        <FormHelperText sx={{ color: 'red' }}>
                          <InfoOutlined />
                          Oops! something is wrong.
                        </FormHelperText>
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
