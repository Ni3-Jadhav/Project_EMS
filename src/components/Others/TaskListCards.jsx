import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { StackedBarChart } from "@mui/icons-material";

const taskList = [
  {
    id: 1,
    priority: "Very High",
    title: "Complete Employee Dashboard UI",
    createdDate: "23 May 2026",
    createdTime: "10:30 AM",
    updatedDate: "24 May 2026",
    updatedTime: "02:15 PM",
    color: "#ef4444",
    description:
      "Design and implement a responsive employee dashboard interface using React.js and Material UI. Include task cards, charts, employee statistics, and optimized layouts for mobile, tablet, and desktop screens.",
  },
  {
    id: 2,
    priority: "High",
    title: "API Integration for Attendance",
    createdDate: "21 May 2026",
    createdTime: "09:20 AM",
    updatedDate: "22 May 2026",
    updatedTime: "05:40 PM",
    color: "#f59e0b",
    description:
      "Integrate attendance APIs with frontend modules and display employee attendance records dynamically. Handle loading states, validations, and proper error handling for failed API requests.",
  },
  {
    id: 3,
    priority: "Medium",
    title: "Optimize Dashboard Performance",
    createdDate: "20 May 2026",
    createdTime: "11:00 AM",
    updatedDate: "21 May 2026",
    updatedTime: "04:10 PM",
    color: "#2563eb",
    description:
      "Improve rendering performance by optimizing reusable components, reducing unnecessary re-renders, and implementing lazy loading where needed for large dashboard sections.",
  },
  {
    id: 4,
    priority: "Low",
    title: "Prepare Weekly Report",
    createdDate: "18 May 2026",
    createdTime: "01:00 PM",
    updatedDate: "19 May 2026",
    updatedTime: "03:25 PM",
    color: "#10b981",
    description:
      "Generate and prepare the weekly employee activity report with project updates, completed tasks, pending items, and team performance summaries for management review.",
  },
];

const TaskListCards = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      {/* Horizontal Scroll Container */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          py: 2,
          mx: 3,
          px: 1,

          scrollBehavior: "smooth",

          "&::-webkit-scrollbar": {
            height: "6px",
          },

          "&::-webkit-scrollbar-track": {
            background: "#e2e8f0",
            borderRadius: "10px",
          },

          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
            borderRadius: "10px",
          },

          "&::-webkit-scrollbar-thumb:hover": {
            background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
          },
        }}
      >
        {taskList.map((task) => (
          <Card
            key={task.id}
            onClick={() => setSelectedTask(task)}
            sx={{
              width: {
                xs: "80%",
                sm: "40%",
                md: "40%",
                lg: "30%",
              },

              flexShrink: 0,
              borderRadius: "22px",
              p: 3,
              cursor: "pointer",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              transition: "all 0.35s ease",
              position: "relative",
              overflow: "hidden",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 15px rgba(15,23,42,0.12)",
              },

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "5px",
                background: task.color,
              },
            }}
          >
            {/* Header */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              mb={2}
            >
              <Chip
                label={task.priority}
                size="small"
                sx={{
                  background: `${task.color}20`,
                  color: task.color,
                  fontWeight: 600,
                  borderRadius: "8px",
                }}
              />

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  fontWeight: 500,
                }}
              >
                {task.createdDate}
              </Typography>
            </Stack>

            {/* Title */}
            <Typography
              sx={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#0f172a",
                mb: 1.5,
                lineHeight: 1.4,
              }}
            >
              {task.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#475569",
                fontSize: "0.94rem",
                lineHeight: 1.7,

                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {task.description}
            </Typography>

            {/* View More */}
            <Typography
              sx={{
                mt: 2,
                color: "#2563eb",
                fontWeight: 600,
                fontSize: "0.92rem",
                width: "fit-content",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              View More
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Popup Modal */}
      <Dialog
        open={Boolean(selectedTask)}
        onClose={() => setSelectedTask(null)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "24px",
            p: 1,
            overflow: "hidden",
          },
        }}
      >
        {selectedTask && (
          <DialogContent sx={{ p: 3 }}>
            {/* Close Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 1,
              }}
            >
              <IconButton
                onClick={() => setSelectedTask(null)}
                sx={{
                  background: "#f1f5f9",

                  "&:hover": {
                    background: "#e2e8f0",
                  },
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>

            {/* Header */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <Chip
                label={selectedTask.priority}
                sx={{
                  background: `${selectedTask.color}20`,
                  color: selectedTask.color,
                  fontWeight: 700,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    color: "#64748b",
                    textAlign: "right",
                  }}
                >
                  Created: {selectedTask.createdDate} |{" "}
                  {selectedTask.createdTime}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    color: "#64748b",
                    textAlign: "right",
                  }}
                >
                  Updated: {selectedTask.updatedDate} |{" "}
                  {selectedTask.updatedTime}
                </Typography>
              </Box>
            </Stack>

            {/* Title */}
            <Typography
              sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.5rem",
                },
                fontWeight: 700,
                color: "#0f172a",
                mb: 2,
                lineHeight: 1.4,
              }}
            >
              {selectedTask.title}
            </Typography>

            {/* Description */}
            <Box
              sx={{
                maxHeight: "220px",
                overflowY: "auto",
                pr: 1,

                "&::-webkit-scrollbar": {
                  width: "6px",
                },

                "&::-webkit-scrollbar-thumb": {
                  background: "#94a3b8",
                  borderRadius: "10px",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: "0.96rem",
                  lineHeight: 2,
                }}
              >
                {selectedTask.description}
                <br />
                <br />
                This task requires proper implementation, responsive layouts,
                optimized component structures, and clean UI consistency across
                the employee management system dashboard. Ensure all modules
                follow the same design language and maintain reusable
                architecture.
              </Typography>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default TaskListCards;
