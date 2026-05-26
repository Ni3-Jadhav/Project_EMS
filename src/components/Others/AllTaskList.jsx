import React from "react";
import { Box, Card, Chip, Stack, Typography, Avatar } from "@mui/material";

const taskData = [
  {
    id: 1,
    employee: "Nitin Jadhav",
    title: "Employee Dashboard UI Design",
    status: "Completed",
    color: "#16a34a",
  },
  {
    id: 2,
    employee: "Rahul Sharma",
    title: "Attendance API Integration",
    status: "In Progress",
    color: "#2563eb",
  },
  {
    id: 3,
    employee: "Priya Patil",
    title: "Task Management Module",
    status: "Pending",
    color: "#f59e0b",
  },
  {
    id: 4,
    employee: "Aman Verma",
    title: "Responsive Layout Testing",
    status: "Failed",
    color: "#ef4444",
  },
  {
    id: 5,
    employee: "Sneha Joshi",
    title: "Create Authentication Screens",
    status: "Accepted",
    color: "#7c3aed",
  },
  {
    id: 6,
    employee: "Rohit Patil",
    title: "Optimize Dashboard Performance",
    status: "Review",
    color: "#0891b2",
  },
];

const AllTaskList = () => {
  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      {/* Heading */}
      <Box sx={{ width: "90%", mx: "auto", borderRadius: "24px" }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.95rem",
            }}
          >
            Overview of all assigned employee tasks
          </Typography>
        </Box>

        {/* Scroll Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "250px",
            overflowY: "auto",
            pr: 1,
            mb: 3,
            scrollBehavior: "smooth",

            /* Hide Scrollbar */
            scrollbarWidth: "none",
            msOverflowStyle: "none",

            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {taskData.map((task) => (
            <Box
              key={task.id}
              sx={{
                p: {
                  xs: 1,
                  sm: 1.5,
                },
                borderRadius: 2,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
                cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 14px 30px rgba(15,23,42,0.08)",
                  borderColor: "#cbd5e1",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 3,
                  lineHeight: 2.5,
                }}
              >
                {/* Avatar */}
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: `${task.color}20`,
                    color: task.color,
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {task.employee.charAt(0)}
                </Avatar>

                {/* Details */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      // mb: 0.5,
                    }}
                  >
                    {task.employee}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.92rem",
                      color: "#64748b",
                      // lineHeight: 1.6,
                    }}
                  >
                    {task.title}
                  </Typography>
                </Box>

                {/* Status */}
                <Chip
                  label={task.status}
                  sx={{
                    px: 1,
                    fontWeight: 600,
                    borderRadius: "10px",
                    background: `${task.color}15`,
                    color: task.color,
                    minWidth: "110px",

                    "& .MuiChip-label": {
                      px: 1,
                    },
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AllTaskList;
