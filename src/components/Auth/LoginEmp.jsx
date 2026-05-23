import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";

const formData = {
  email : "",
  password : ""
};

const LoginEmp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", loginData);
    setLoginData(formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: "24px",
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            transition: "all 0.4s ease",
            border: "1px solid rgba(255,255,255,0.4)",

            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.16)",
            },
          }}
        >
          {/* Heading */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#0f172a",
                mb: 1,
                fontSize: { xs: "1.8rem", sm: "2.2rem" },
              }}
            >
              Employee Login
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              Sign in to access your dashboard
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={(e) => handleSubmit(e)}>
            {/* Email */}
            <TextField
              fullWidth
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value})}
              label="Email Address"
              type="email"
              margin="normal"
              variant="outlined"
              required
              placeholder="Enter your email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#64748b" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              value={loginData.password}
              onChange={(e)=> setLoginData({ ...loginData, password: e.target.value})}
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              placeholder="Enter your password"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#64748b" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                },
              }}
            />

            {/* Login Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                py: 1.6,
                borderRadius: "14px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                background:
                  "linear-gradient(90deg, #2563eb, #1d4ed8)",

                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginEmp;