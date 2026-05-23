import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const taskData = [
  {
    id: 1,
    title: "New Task",
    count: 12,
    icon: <AssignmentOutlinedIcon />,
    bgColor: "#2563eb",
  },
  {
    id: 2,
    title: "Completed",
    count: 28,
    icon: <CheckCircleIcon />,
    bgColor: "#16a34a",
  },
  {
    id: 3,
    title: "Accepted",
    count: 18,
    icon: <ThumbUpAltOutlinedIcon />,
    bgColor: "#f59e0b",
  },
  {
    id: 4,
    title: "Failed",
    count: 5,
    icon: <HighlightOffOutlinedIcon />,
    bgColor: "#ef4444",
  },
];

const TaskNumbers = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={3} sx={{ justifyContent: "space-around"}}>
        {taskData.map((task) => (
          <Grid
            item
            sx={{
              width:{xs: "90%", sm: "45%", md: "20%", lg: "20%"},
              height: {xs: "300px", sm: "250px", md: "200px", lg: "200px" },
            }}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            key={task.id}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: "20px",
                background: task.bgColor,
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
                  {task.icon}
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
                  {task.title}
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