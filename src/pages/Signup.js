import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useMediaQuery } from '@mui/material';
import img1 from "./assets/33.jpg";
import axios from 'axios';
import './login2.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        "https://influverse-backend.onrender.com/api/auth/signup",
        formData
      );

      if (response.status === 201) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      } else {
        console.log("Signup failed.");
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
          alignItems:isMobile ? "flex-start":"center",
          justifyContent: "center",
          padding: isMobile ? 5 : 0,
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
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography className="font-sty" sx={{ fontSize: "24px", marginBottom: "20px" }}>
              Sign Up
            </Typography>
            <TextField
              name="name"
              type="text"
              placeholder="Name"
              variant="outlined"
              value={formData.name}
              required
              onChange={handleFormChange}
              sx={{ width: "100%", marginY: "10px" }}
            />
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
                Already have an account?{" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    paddingLeft: "5px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component={Link}
                  to="/login"
                >
                  Login
                </Typography>
              </Typography>
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ backgroundColor: "#161A30" }}
                endIcon={<SendIcon />}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
