import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const TaskNumbers = ({ userData }) => {
  const taskStyles = {
    "New Task": {
      icon: <AssignmentOutlinedIcon />,
      bgColor: "#2563eb",
    },

    "In Progress": {
      icon: <AutorenewOutlinedIcon />,
      bgColor: "#f59e0b",
    },

    Completed: {
      icon: <CheckCircleIcon />,
      bgColor: "#16a34a",
    },

    Pending: {
      icon: <PendingActionsOutlinedIcon />,
      bgColor: "#7c3aed",
    },

    "Failed Task": {
      icon: <HighlightOffOutlinedIcon />,
      bgColor: "#ef4444",
    },
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {userData?.taskCount?.map((task, index) => (
          <Grid
            item
            sx={{
              width: { xs: "90%", sm: "45%", md: "30%", lg: "18%" },
              height: { xs: "300px", sm: "250px", md: "200px", lg: "200px" },
            }}
            key={index}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: "20px",
                background: taskStyles[task.status]?.bgColor,
                color: "#fff",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.35s ease",
                height: "90%",

                "&:hover": {
                  transform: "translateY(-4px) scale(1.02)",
                  boxShadow: "0 8px 15px rgba(0,0,0,0.15)",
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-25px",
                  left: "-25px",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    mb: 2,
                    width: 50,
                    height: 50,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.15)",

                    "& svg": {
                      fontSize: "1.7rem",
                    },
                  }}
                >
                  {taskStyles[task.status]?.icon}
                </Box>

                {/* Count */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.8rem",
                      sm: "2rem",
                    },
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {task.count}
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "1rem",
                    fontWeight: 500,
                    opacity: 0.95,
                  }}
                >
                  {task.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskNumbers;
