const employees = [
  {
    id: 1,
    name: "Nayan Shinde",
    email: "nayan.shinde@gmail.com",
    password: "user@123",

    taskCount: [
      { status: "New Task", count: 2 },
      { status: "In Progress", count: 1 },
      { status: "Completed", count: 1 },
      { status: "Pending", count: 1 },
      { status: "Failed Task", count: 1 },
    ],

    tasks: [
      {
        id: 101,
        status: "New Task",
        priority: "High",
        title: "Design Login Page",
        description:
          "Create a modern and responsive employee login page using React and Material UI. Add proper form validation, responsive layout, and smooth hover animations for better user experience.",
        date: "2026-05-28",
        category: "Design",
      },

      {
        id: 102,
        status: "Completed",
        priority: "Medium",
        title: "Fix Navbar Bug",
        description:
          "Resolve alignment and responsive issues in the navbar component. Ensure proper spacing, mobile responsiveness, and smooth navigation functionality across all devices.",
        date: "2026-05-20",
        category: "Development",
      },

      {
        id: 103,
        status: "In Progress",
        priority: "Very High",
        title: "Dashboard API Integration",
        description:
          "Integrate dashboard statistics APIs with frontend components. Handle loading states, error handling, and dynamic data rendering using React hooks.",
        date: "2026-05-31",
        category: "Development",
      },

      {
        id: 104,
        status: "Pending",
        priority: "Low",
        title: "Create Notification Panel",
        description:
          "Develop a notification sidebar for employees and admin users. Notifications should display recent task updates and system alerts dynamically.",
        date: "2026-06-02",
        category: "Design",
      },

      {
        id: 105,
        status: "Failed Task",
        priority: "Medium",
        title: "Dark Mode Implementation",
        description:
          "Implement dark mode support for the EMS dashboard. The previous implementation caused layout inconsistencies and needs to be redesigned properly.",
        date: "2026-05-22",
        category: "Development",
      },

      {
        id: 106,
        status: "New Task",
        priority: "High",
        title: "Employee Profile UI",
        description:
          "Create employee profile cards with task statistics, profile information, and performance overview. Use responsive grid layouts and interactive UI elements.",
        date: "2026-06-04",
        category: "Design",
      },
    ],
  },

  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    password: "user@123",

    taskCount: [
      { status: "New Task", count: 1 },
      { status: "In Progress", count: 1 },
      { status: "Completed", count: 2 },
      { status: "Pending", count: 1 },
      { status: "Failed Task", count: 1 },
    ],

    tasks: [
      {
        id: 201,
        status: "Completed",
        priority: "High",
        title: "API Integration",
        description:
          "Integrate employee management APIs with frontend modules. Ensure proper authentication handling and optimize API response rendering in the dashboard.",
        date: "2026-05-30",
        category: "Development",
      },

      {
        id: 202,
        status: "Pending",
        priority: "Medium",
        title: "Testing Dashboard",
        description:
          "Perform complete testing of dashboard modules including task cards, charts, and profile sections. Report all bugs with proper documentation.",
        date: "2026-06-02",
        category: "Testing",
      },

      {
        id: 203,
        status: "In Progress",
        priority: "Very High",
        title: "Redux State Management",
        description:
          "Implement Redux Toolkit for global state management in the EMS application. Manage authentication, tasks, and employee details efficiently.",
        date: "2026-06-01",
        category: "Development",
      },

      {
        id: 204,
        status: "Failed Task",
        priority: "Low",
        title: "Old Report Module Fix",
        description:
          "Fix issues in the report generation module where exported files were missing task data and employee statistics due to incorrect mapping.",
        date: "2026-05-18",
        category: "Development",
      },

      {
        id: 205,
        status: "New Task",
        priority: "High",
        title: "Attendance UI",
        description:
          "Create attendance management UI with calendar integration and status indicators. Add responsive layouts for both desktop and mobile devices.",
        date: "2026-06-06",
        category: "Design",
      },

      {
        id: 206,
        status: "Completed",
        priority: "Medium",
        title: "Optimize React Components",
        description:
          "Refactor reusable React components and improve rendering performance using memoization and optimized component structure.",
        date: "2026-05-25",
        category: "Development",
      },
    ],
  },

  {
    id: 3,
    name: "Priya Patil",
    email: "priya.patil@gmail.com",
    password: "user@123",

    taskCount: [
      { status: "New Task", count: 2 },
      { status: "In Progress", count: 1 },
      { status: "Completed", count: 1 },
      { status: "Pending", count: 1 },
      { status: "Failed Task", count: 0 },
    ],

    tasks: [
      {
        id: 301,
        status: "Completed",
        priority: "High",
        title: "Deploy Frontend",
        description:
          "Deploy the EMS frontend application on production servers. Configure environment variables and optimize build performance before deployment.",
        date: "2026-05-18",
        category: "Deployment",
      },

      {
        id: 302,
        status: "In Progress",
        priority: "Very High",
        title: "UI Enhancement",
        description:
          "Improve dashboard card designs, animations, and responsive behavior. Focus on modern UI trends and accessibility improvements.",
        date: "2026-05-29",
        category: "Design",
      },

      {
        id: 303,
        status: "New Task",
        priority: "Medium",
        title: "Employee Analytics Page",
        description:
          "Create analytics dashboard showing employee performance, completed tasks, pending tasks, and graphical reports using charts.",
        date: "2026-06-03",
        category: "Development",
      },

      {
        id: 304,
        status: "Pending",
        priority: "Low",
        title: "Accessibility Improvements",
        description:
          "Improve accessibility support across the EMS project including keyboard navigation, semantic HTML, and better screen reader support.",
        date: "2026-06-05",
        category: "Testing",
      },

      {
        id: 305,
        status: "New Task",
        priority: "High",
        title: "Profile Settings Module",
        description:
          "Develop employee profile settings page with editable profile information, password update functionality, and image upload support.",
        date: "2026-06-08",
        category: "Development",
      },
    ],
  },

  {
    id: 4,
    name: "Aman Verma",
    email: "aman.verma@gmail.com",
    password: "user@123",

    taskCount: [
      { status: "New Task", count: 1 },
      { status: "In Progress", count: 1 },
      { status: "Completed", count: 1 },
      { status: "Pending", count: 2 },
      { status: "Failed Task", count: 1 },
    ],

    tasks: [
      {
        id: 401,
        status: "Pending",
        priority: "High",
        title: "Create Reports Module",
        description:
          "Develop reports module with employee statistics, charts, and downloadable PDF reports for admins and managers.",
        date: "2026-06-01",
        category: "Development",
      },

      {
        id: 402,
        status: "Pending",
        priority: "Medium",
        title: "Database Optimization",
        description:
          "Optimize MongoDB queries and indexing strategies for better task fetching performance and reduced API response time.",
        date: "2026-06-03",
        category: "Development",
      },

      {
        id: 403,
        status: "Completed",
        priority: "Low",
        title: "Footer Redesign",
        description:
          "Redesign footer section with updated company details, navigation links, and responsive styling for all screen sizes.",
        date: "2026-05-19",
        category: "Design",
      },

      {
        id: 404,
        status: "In Progress",
        priority: "Very High",
        title: "Authentication Module",
        description:
          "Implement JWT authentication and role-based access control for employees and admin users across the EMS application.",
        date: "2026-06-04",
        category: "Development",
      },

      {
        id: 405,
        status: "Failed Task",
        priority: "Medium",
        title: "Socket Integration",
        description:
          "Attempt real-time socket integration for instant task updates. Existing implementation failed due to event synchronization issues.",
        date: "2026-05-26",
        category: "Development",
      },

      {
        id: 406,
        status: "New Task",
        priority: "High",
        title: "Task Timeline View",
        description:
          "Create task timeline component displaying task progress, deadlines, and employee activity history in chronological order.",
        date: "2026-06-09",
        category: "Design",
      },
    ],
  },

  {
    id: 5,
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@gmail.com",
    password: "user@123",

    taskCount: [
      { status: "New Task", count: 2 },
      { status: "In Progress", count: 1 },
      { status: "Completed", count: 1 },
      { status: "Pending", count: 1 },
      { status: "Failed Task", count: 1 },
    ],

    tasks: [
      {
        id: 501,
        status: "New Task",
        priority: "Medium",
        title: "Employee Chat UI",
        description:
          "Develop internal employee chat interface with responsive message layout, online indicators, and modern UI design patterns.",
        date: "2026-06-07",
        category: "Design",
      },

      {
        id: 502,
        status: "Completed",
        priority: "High",
        title: "Task Filter Feature",
        description:
          "Implement advanced task filtering functionality using category, status, and priority filters in the employee dashboard.",
        date: "2026-05-24",
        category: "Development",
      },

      {
        id: 503,
        status: "Pending",
        priority: "Low",
        title: "Unit Testing",
        description:
          "Write unit test cases for reusable React components and verify application functionality across different modules.",
        date: "2026-06-01",
        category: "Testing",
      },

      {
        id: 504,
        status: "In Progress",
        priority: "Very High",
        title: "Admin Dashboard",
        description:
          "Create dynamic admin dashboard with employee statistics, task overview, charts, and management functionality.",
        date: "2026-06-02",
        category: "Development",
      },

      {
        id: 505,
        status: "Failed Task",
        priority: "Medium",
        title: "Search Optimization",
        description:
          "Improve task search functionality with optimized filtering logic and better search result performance across large datasets.",
        date: "2026-05-20",
        category: "Development",
      },

      {
        id: 506,
        status: "New Task",
        priority: "High",
        title: "Responsive Tables",
        description:
          "Create responsive employee tables with sorting, filtering, and horizontal scrolling support for smaller devices.",
        date: "2026-06-10",
        category: "Design",
      },
    ],
  },

  {
    id: 6,
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    password: "user@123",

    taskCount: [
      { status: "New Task", count: 1 },
      { status: "In Progress", count: 1 },
      { status: "Completed", count: 2 },
      { status: "Pending", count: 1 },
      { status: "Failed Task", count: 1 },
    ],

    tasks: [
      {
        id: 601,
        status: "Completed",
        priority: "Medium",
        title: "Landing Page Design",
        description:
          "Design a modern landing page for the EMS project with attractive sections, animations, and responsive layouts.",
        date: "2026-05-15",
        category: "Design",
      },

      {
        id: 602,
        status: "Completed",
        priority: "High",
        title: "Task CRUD APIs",
        description:
          "Develop CRUD APIs for employee tasks including create, update, delete, and status management functionalities.",
        date: "2026-05-22",
        category: "Development",
      },

      {
        id: 603,
        status: "In Progress",
        priority: "Very High",
        title: "Performance Optimization",
        description:
          "Improve application performance by implementing lazy loading, code splitting, and optimized rendering strategies.",
        date: "2026-06-05",
        category: "Development",
      },

      {
        id: 604,
        status: "Pending",
        priority: "Low",
        title: "Browser Compatibility Testing",
        description:
          "Test EMS application across multiple browsers and devices to ensure consistent UI and functionality behavior.",
        date: "2026-06-06",
        category: "Testing",
      },

      {
        id: 605,
        status: "Failed Task",
        priority: "Medium",
        title: "Chart Integration",
        description:
          "Integrate chart libraries for analytics dashboard. Previous implementation had rendering and responsiveness issues.",
        date: "2026-05-27",
        category: "Development",
      },

      {
        id: 606,
        status: "New Task",
        priority: "High",
        title: "Role Management System",
        description:
          "Implement employee role management with permissions, access levels, and admin controls throughout the EMS application.",
        date: "2026-06-11",
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

export const addTaskToEmployee = (employeeEmail, task) => {
  const employeesData = JSON.parse(localStorage.getItem("employees")) || [];

  const updatedEmployees = employeesData.map((employee) => {
    if (employee.email !== employeeEmail) {
      return employee;
    }

    const nextTaskId =
      (employee.tasks?.reduce(
        (maxId, currentTask) => Math.max(maxId, currentTask.id),
        0,
      ) || 0) + 1;

    const newTask = {
      id: nextTaskId,
      ...task,
    };

    const updatedTaskCount = employee.taskCount?.map((countItem) =>
      countItem.status === newTask.status
        ? { ...countItem, count: countItem.count + 1 }
        : countItem,
    );

    return {
      ...employee,
      tasks: [...(employee.tasks || []), newTask],
      taskCount: updatedTaskCount || employee.taskCount,
    };
  });

  const assignedEmployee = updatedEmployees.find(
    (employee) => employee.email === employeeEmail,
  );

  if (!assignedEmployee) {
    return null;
  }

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  return assignedEmployee;
};

export const updateTaskStatus = (employeeEmail, taskId, newStatus) => {
  const employeesData = JSON.parse(localStorage.getItem("employees")) || [];

  const updatedEmployees = employeesData.map((employee) => {
    if (employee.email !== employeeEmail) {
      return employee;
    }

    const existingTask = employee.tasks?.find((task) => task.id === taskId);
    const updatedTasks = employee.tasks?.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task,
    );

    const updatedTaskCount = employee.taskCount?.map((countItem) => {
      if (!existingTask || existingTask.status === newStatus) {
        return countItem;
      }
      if (countItem.status === existingTask.status) {
        return { ...countItem, count: Math.max(0, countItem.count - 1) };
      }
      if (countItem.status === newStatus) {
        return { ...countItem, count: countItem.count + 1 };
      }
      return countItem;
    });

    return {
      ...employee,
      tasks: updatedTasks || employee.tasks,
      taskCount: updatedTaskCount || employee.taskCount,
    };
  });

  const assignedEmployee = updatedEmployees.find(
    (employee) => employee.email === employeeEmail,
  );

  if (!assignedEmployee) {
    return null;
  }

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  return assignedEmployee;
};
