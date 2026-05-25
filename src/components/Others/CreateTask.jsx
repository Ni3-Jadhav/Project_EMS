import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";

import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "90%",
          mx: "auto",
          borderRadius: "24px",
          p: {
            xs: 3,
            sm: 4,
            md: 5,
          },
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 35px rgba(15,23,42,0.06)",
          transition: "all 0.35s ease",

          "&:hover": {
            boxShadow: "0 18px 45px rgba(15,23,42,0.10)",
          },
        }}
      >
        {/* Heading */}
        <Box sx={{ mb: 4, width: "90%", mx: "auto" }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
              },
              fontWeight: 700,
              color: "#0f172a",
              mb: 1,
            }}
          >
            Create New Task
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.95rem",
            }}
          >
            Fill all task details to assign a new task
          </Typography>
        </Box>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "80%", mx: "auto" }}
        >
          <Grid
            container
            spacing={3}
            sx={{ mb: 2, display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              {/* Task Title */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "35%", lg: "35%" } }}
              >
                <TextField
                  fullWidth
                  label="Task Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        transform: "translateY(-1px)",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Description */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" } }}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              {/* Date */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "25%" } }}
              >
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
              </Grid>

              {/* Assign To */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "25%" } }}
              >
                <FormControl fullWidth>
                  <InputLabel>Assign To</InputLabel>

                  <Select
                    name="assignTo"
                    value={formData.assignTo}
                    onChange={handleChange}
                    label="Assign To"
                    sx={{
                      borderRadius: "14px",
                    }}
                  >
                    <MenuItem value="Nitin Jadhav">Nitin Jadhav</MenuItem>

                    <MenuItem value="Rahul Sharma">Rahul Sharma</MenuItem>

                    <MenuItem value="Priya Patil">Priya Patil</MenuItem>

                    <MenuItem value="Aman Verma">Aman Verma</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Category */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "25%" } }}
              >
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>

                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    label="Category"
                    sx={{
                      borderRadius: "14px",
                    }}
                  >
                    <MenuItem value="Design">Design</MenuItem>

                    <MenuItem value="Development">Development</MenuItem>

                    <MenuItem value="Testing">Testing</MenuItem>

                    <MenuItem value="Deployment">Deployment</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* Button */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  startIcon={<AddTaskRoundedIcon />}
                  sx={{
                    py: 1.6,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #2563eb, #1d4ed8)",

                    boxShadow: "none",
                    transition: "all 0.35s ease",

                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 24px rgba(37,99,235,0.28)",
                      background: "linear-gradient(90deg, #1d4ed8, #1e40af)",
                    },
                  }}
                >
                  Create Task
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default CreateTask;
