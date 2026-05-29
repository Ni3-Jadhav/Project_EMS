import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";

const EmployeeDashboadHeader = ({
  employeeName,
  setUser,
  setLoggedInUserData,
}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Toolbar
        sx={{
          minHeight: "78px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: "#dbeafe",
              color: "#2563eb",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            {employeeName.charAt(0)}
          </Avatar>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.35rem",
                  },
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                Hello, {employeeName}
              </Typography>

              <WavingHandIcon
                sx={{
                  color: "#f59e0b",
                  fontSize: "1.4rem",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.85rem",
                },
                color: "#64748b",
                mt: 0.3,
              }}
            >
              Welcome back to your dashboard
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}
        <Button
          variant="contained"
          startIcon={<LogoutRoundedIcon />}
          onClick={handleLogout}
          sx={{
            px: { xs: 2, sm: 3 },
            py: 1,
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "0.95rem",
            fontWeight: 600,
            background: "#ef4444",
            boxShadow: "none",
            transition: "all 0.3s ease",

            "&:hover": {
              background: "#dc2626",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(239,68,68,0.25)",
            },
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default EmployeeDashboadHeader;
