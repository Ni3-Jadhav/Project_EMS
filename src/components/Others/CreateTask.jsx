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
  FormHelperText,
} from "@mui/material";

import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { addTaskToEmployee } from "../../utils/LocalStorage";

const CreateTask = () => {
  const data = useContext(AuthContext);
  const usersData = data?.userData?.employees || [];
  const initialFormData = {
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
    priority: "",
    status: "New Task",
  };
  const initialErrors = {
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
    priority: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState(initialErrors);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      tempErrors.title = "Task Title is required";
      isValid = false;
    }
    if (!formData.description.trim()) {
      tempErrors.description = "Task Description is required";
      isValid = false;
    }
    const today = new Date().toISOString().split("T")[0];

    if (!formData.date) {
      tempErrors.date = "Task Date is required";
      isValid = false;
    } else if (formData.date < today) {
      tempErrors.date = "Please select a future date";
      isValid = false;
    }
    if (!formData.assignTo) {
      tempErrors.assignTo = "Please assign the task to an employee";
      isValid = false;
    }
    if (!formData.category) {
      tempErrors.category = "Task Category is required";
      isValid = false;
    }
    if (!formData.priority) {
      tempErrors.priority = "Task Priority is required";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setErrors(initialErrors);
    console.log(formData);

    const newTask = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      category: formData.category,
      priority: formData.priority,
      status: formData.status || "New Task",
    };

    const assignedEmployee = usersData.find(
      (e) => e.email === formData.assignTo,
    );

    if (assignedEmployee) {
      const savedEmployee = addTaskToEmployee(formData.assignTo, newTask);

      if (savedEmployee) {
        console.log("new task saved for employee", savedEmployee);
        data.refreshUserData?.();
      } else {
        console.error("Failed to save task: assigned employee not found.");
      }
    }

    setFormData(initialFormData);
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
                  error={Boolean(errors.title)}
                  helperText={errors.title}
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
                  error={Boolean(errors.description)}
                  helperText={errors.description}
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
                  error={Boolean(errors.date)}
                  helperText={errors.date}
                  inputProps={{
                    min: new Date().toISOString().split("T")[0],
                  }}
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
                <FormControl fullWidth error={Boolean(errors.assignTo)}>
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
                    {usersData.map((employee) => (
                      <MenuItem key={employee.id} value={employee.email}>
                        {employee.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{errors.assignTo}</FormHelperText>
                </FormControl>
              </Grid>

              {/* Category */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "25%" } }}
              >
                <FormControl fullWidth error={Boolean(errors.category)}>
                  <InputLabel>Category</InputLabel>

                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    label="Category"
                    error={Boolean(errors.category)}
                    helperText={errors.category}
                    sx={{
                      borderRadius: "14px",
                    }}
                  >
                    <MenuItem value="Design">Design</MenuItem>

                    <MenuItem value="Development">Development</MenuItem>

                    <MenuItem value="Testing">Testing</MenuItem>

                    <MenuItem value="Deployment">Deployment</MenuItem>
                  </Select>
                  <FormHelperText>{errors.category}</FormHelperText>
                </FormControl>
              </Grid>

              {/** Priority */}
              <Grid
                item
                sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "25%" } }}
              >
                <FormControl fullWidth error={Boolean(errors.priority)}>
                  <InputLabel>Priority</InputLabel>

                  <Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    label="Priority"
                    sx={{
                      borderRadius: "14px",
                    }}
                  >
                    <MenuItem value="Low">Low</MenuItem>

                    <MenuItem value="Medium">Medium</MenuItem>

                    <MenuItem value="High">High</MenuItem>

                    <MenuItem value="Very High">Very High</MenuItem>
                  </Select>
                  <FormHelperText>{errors.priority}</FormHelperText>
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
