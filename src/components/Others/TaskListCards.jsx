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
  TextField,
  MenuItem,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { StackedBarChart } from "@mui/icons-material";

const TaskListCards = ({ userData }) => {
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
        {userData?.tasks.map((task) => (
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

                background:
                  task.priority === "Very High"
                    ? "#ef4444"
                    : task.priority === "High"
                      ? "#f59e0b"
                      : task.priority === "Medium"
                        ? "#2563eb"
                        : "#10b981",
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
                  background:
                    task.priority === "Very High"
                      ? "#ef444420"
                      : task.priority === "High"
                        ? "#f59e0b20"
                        : task.priority === "Medium"
                          ? "#2563eb20"
                          : "#10b98120",

                  color:
                    task.priority === "Very High"
                      ? "#ef4444"
                      : task.priority === "High"
                        ? "#f59e0b"
                        : task.priority === "Medium"
                          ? "#2563eb"
                          : "#10b981",

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
                {task.date}
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

            {/* Footer */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Typography
                sx={{
                  color: "#2563eb",
                  fontWeight: 600,
                  fontSize: "0.92rem",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                View More
              </Typography>
            </Stack>
          </Card>
        ))}
      </Box>

      {/* Popup Modal */}
      <Dialog
        open={Boolean(selectedTask)}
        onClose={() => setSelectedTask(null)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: {
              xs: "18px",
              sm: "26px",
            },
            overflow: "hidden",
            background: "#ffffff",
            boxShadow: "0 25px 60px rgba(15,23,42,0.18)",
          },
        }}
      >
        {selectedTask && (
          <DialogContent
            sx={{
              p: {
                xs: 2.5,
                sm: 4,
              },
            }}
          >
            {/* Top Header */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 3,
              }}
            >
              {/* Left */}
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.3rem",
                      sm: "1.7rem",
                    },
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.4,
                    mb: 1,
                  }}
                >
                  {selectedTask.title}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {/* Priority */}
                  <Chip
                    label={selectedTask.priority}
                    size="small"
                    sx={{
                      background:
                        selectedTask.priority === "Very High"
                          ? "#ef444420"
                          : selectedTask.priority === "High"
                            ? "#f59e0b20"
                            : selectedTask.priority === "Medium"
                              ? "#2563eb20"
                              : "#10b98120",

                      color:
                        selectedTask.priority === "Very High"
                          ? "#ef4444"
                          : selectedTask.priority === "High"
                            ? "#f59e0b"
                            : selectedTask.priority === "Medium"
                              ? "#2563eb"
                              : "#10b981",

                      fontWeight: 700,
                      borderRadius: "8px",
                    }}
                  />

                  {/* Category */}
                  <Chip
                    label={selectedTask.category}
                    size="small"
                    sx={{
                      background: "#7c3aed20",
                      color: "#7c3aed",
                      fontWeight: 700,
                      borderRadius: "8px",
                    }}
                  />

                  {/* Current Status */}
                  <Chip
                    label={selectedTask.status}
                    size="small"
                    sx={{
                      background:
                        selectedTask.status === "Completed"
                          ? "#16a34a20"
                          : selectedTask.status === "In Progress"
                            ? "#2563eb20"
                            : selectedTask.status === "Pending"
                              ? "#f59e0b20"
                              : selectedTask.status === "Failed Task"
                                ? "#ef444420"
                                : "#7c3aed20",

                      color:
                        selectedTask.status === "Completed"
                          ? "#16a34a"
                          : selectedTask.status === "In Progress"
                            ? "#2563eb"
                            : selectedTask.status === "Pending"
                              ? "#f59e0b"
                              : selectedTask.status === "Failed Task"
                                ? "#ef4444"
                                : "#7c3aed",

                      fontWeight: 700,
                      borderRadius: "8px",
                    }}
                  />
                </Stack>
              </Box>

              {/* Close Button */}
              <IconButton
                onClick={() => setSelectedTask(null)}
                sx={{
                  width: 42,
                  height: 42,
                  background: "#f1f5f9",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    background: "#e2e8f0",
                    transform: "rotate(90deg)",
                  },
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Stack>

            {/* Date Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                justifyContent: "space-between",
                gap: 2,
                mb: 3,
                p: 2,
                borderRadius: "16px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "#64748b",
                    mb: 0.5,
                  }}
                >
                  Created Date
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  {selectedTask.date}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "#64748b",
                    mb: 0.5,
                  }}
                >
                  Change Task Status
                </Typography>

                <TextField
                  select
                  size="small"
                  defaultValue={selectedTask.status}
                  sx={{
                    minWidth: {
                      xs: "100%",
                      sm: "220px",
                    },

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      background: "#ffffff",
                    },
                  }}
                >
                  <MenuItem value="New Task">New Task</MenuItem>

                  <MenuItem value="Pending">Pending</MenuItem>

                  <MenuItem value="In Progress">In Progress</MenuItem>

                  <MenuItem value="Completed">Completed</MenuItem>

                  <MenuItem value="Failed Task">Failed Task</MenuItem>
                </TextField>
              </Box>
            </Box>

            {/* Description */}
            <Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  mb: 1.5,
                }}
              >
                Task Description
              </Typography>

              <Box
                sx={{
                  maxHeight: "260px",
                  overflowY: "auto",
                  p: 2,
                  borderRadius: "16px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",

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
                </Typography>
              </Box>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default TaskListCards;
