const employees = [
  {
    id: 1,
    name: "Nitin Jadhav",
    email: "nitin.jadhav@gmail.com",
    password: "user@123",
    tasks: [
      {
        id: 101,
        status: "Pending",
        title: "Design Login Page",
        description: "Create responsive login UI using React and MUI.",
        date: "2026-05-28",
        category: "Design",
      },
      {
        id: 102,
        status: "Completed",
        title: "Fix Navbar Bug",
        description: "Resolve responsive navbar alignment issue.",
        date: "2026-05-20",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    password: "user@123",
    tasks: [
      {
        id: 103,
        status: "In Progress",
        title: "API Integration",
        description: "Integrate employee API with frontend dashboard.",
        date: "2026-05-30",
        category: "Development",
      },
      {
        id: 104,
        status: "Pending",
        title: "Testing Dashboard",
        description: "Perform unit testing for dashboard components.",
        date: "2026-06-02",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    name: "Priya Patil",
    email: "priya.patil@gmail.com",
    password: "user@123",
    tasks: [
      {
        id: 105,
        status: "Completed",
        title: "Deploy Frontend",
        description: "Deploy React application to production server.",
        date: "2026-05-18",
        category: "Deployment",
      },
      {
        id: 106,
        status: "In Progress",
        title: "UI Enhancement",
        description: "Improve dashboard card animations and layout.",
        date: "2026-05-29",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    name: "Aman Verma",
    email: "aman.verma@gmail.com",
    password: "user@123",
    tasks: [
      {
        id: 107,
        status: "Pending",
        title: "Create Reports Module",
        description: "Develop employee performance reports section.",
        date: "2026-06-01",
        category: "Development",
      },
      {
        id: 108,
        status: "Pending",
        title: "Database Optimization",
        description: "Optimize MongoDB queries for task management.",
        date: "2026-06-03",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
    password: "admin@123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employees: employeesData, admin: adminData };
};
