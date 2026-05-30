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

const initialFormData = {
  email: "",
  password: "",
};

const LoginEmp = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Validation Function
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Email Validation
    if (!loginData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginData.email)
    ) {
      tempErrors.email = "Enter a valid email address";
      isValid = false;
    }

    // Password Validation
    if (!loginData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (loginData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);

    return isValid;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoginData(initialFormData);
      handleLogin(loginData.email, loginData.password);
      setErrors({
        email: "",
        password: "",
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.2fr",
            },
            gap: 3,
            alignItems: "stretch",
          }}
        >
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
            <Box component="form" onSubmit={handleSubmit}>
              {/* Email */}
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                margin="normal"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
                error={Boolean(errors.email)}
                helperText={errors.email}
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
                label="Password"
                type={showPassword ? "text" : "password"}
                margin="normal"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                error={Boolean(errors.password)}
                helperText={errors.password}
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#64748b" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  background: "linear-gradient(90deg, #2563eb, #1d4ed8)",

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

          <Paper
            elevation={0}
            sx={{
              borderRadius: "28px",
              p: 4,
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",

              "&::before": {
                content: '""',
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-40px",
                left: "-40px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Employee Management System
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                A modern employee management platform for managing tasks,
                employee activities, progress tracking, and performance
                monitoring through role-based access control.
              </Typography>
            </Box>

            {/* Demo Credentials */}
            <Box
              sx={{
                mt: 4,
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "1.05rem",
                }}
              >
                Demo Credentials
              </Typography>

              {/* Admin */}
              <Box
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography fontWeight={700}>Admin Login</Typography>

                <Typography variant="body2">Email: admin@gmail.com</Typography>

                <Typography variant="body2">Password: admin@123</Typography>
              </Box>

              {/* Employee */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography fontWeight={700}>Employees Login</Typography>

                <Typography variant="body2">
                  Email:
                  <ul style={{ paddingLeft: "20px", margin: "8px 0px" }}>
                    <li>nayan.shinde@gmail.com</li>
                    <li>rahul.sharma@gmail.com</li>
                    <li>priya.patil@gmail.com</li>
                    <li>aman.verma@gmail.com</li>
                    <li>sneha.kulkarni@gmail.com</li>
                    <li>arjun.mehta@gmail.com</li>
                  </ul>
                </Typography>

                <Typography variant="body2">
                  Password (common for all employees): user@123
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginEmp;
