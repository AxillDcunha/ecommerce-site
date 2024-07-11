import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Grid, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import img1 from "./assets/2.jpg";
import { useMediaQuery } from "@mui/material";
import "./login2.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://influverse-backend.onrender.com/api/auth/login",
        formData
      );

      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      } else {
        console.log("Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid container sx={{ height: "100vh" }}>
      {!isMobile && (
        <Grid item xs={12} md={6}>
          <Box className="image-area" sx={{ height: "100%", width: 1 }}>
            <img src={img1} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="img" />
          </Box>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        md={isMobile ? 12 : 6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? 2 : 0,
          backgroundColor: "#F0ECE5",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
          <Box
            sx={{
              padding: "20px",
              backgroundColor: "#F0ECE5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            //   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography className="font-sty" sx={{ fontSize: "24px", marginBottom: "20px" }}>
              Welcome to Ecommerce
            </Typography>
            <TextField
              name="email"
              type="email"
              placeholder="Email"
              variant="outlined"
              value={formData.email}
              required
              onChange={handleFormChange}
              sx={{ width: "100%", marginY: "10px" }}
            />
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              variant="outlined"
              value={formData.password}
              required
              onChange={handleFormChange}
              sx={{ width: "100%", marginY: "10px" }}
            />
            <Box
              sx={{
                display: "flex",
                width: 1,
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography>
                Don't have an account?{" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    paddingLeft: "5px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component={NavLink}
                  to="/signup"
                >
                  Sign Up
                </Typography>
              </Typography>
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ backgroundColor: "#161A30" }}
                endIcon={<SendIcon />}
              >
                Login
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
