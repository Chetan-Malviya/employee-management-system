const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Fix Navbar Bug",
        description:
          "Resolve alignment issue in the navigation bar on mobile view.",
        date: "2025-01-14",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "API Integration",
        description: "Connect dashboard with analytics API endpoint.",
        date: "2025-01-12",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Improve UI Spacing",
        description: "Update spacing across the homepage for better UX.",
        date: "2025-01-15",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 2,
    firstName: "Rohan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Create Login Page",
        description: "Develop responsive login screen with validation.",
        date: "2025-01-11",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Set Up MongoDB",
        description: "Initialize database schema for user accounts.",
        date: "2025-01-10",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize Images",
        description: "Reduce image sizes to improve load speed.",
        date: "2025-01-16",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Code Review",
        description: "Review pull requests from the frontend team.",
        date: "2025-01-13",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    firstName: "Vikas",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add Jest test cases for authentication module.",
        date: "2025-01-10",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix 404 Page",
        description: "Design and implement a custom 404 page.",
        date: "2025-01-14",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Refactor Controllers",
        description: "Clean up code for better readability.",
        date: "2025-01-15",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    firstName: "Suresh",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Deploy Application",
        description: "Deploy latest version to production.",
        date: "2025-01-12",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Check Logs",
        description: "Analyze production logs for errors.",
        date: "2025-01-13",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Upgrade Dependencies",
        description: "Update outdated npm packages.",
        date: "2025-01-14",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Improve CI/CD",
        description: "Enhance GitHub workflow automation.",
        date: "2025-01-16",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 5,
    firstName: "Aniket",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Design Dashboard",
        description: "Create layout for admin dashboard.",
        date: "2025-01-11",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Handle Form Validation",
        description: "Add real-time validation to user input.",
        date: "2025-01-13",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Create API Docs",
        description: "Write documentation for REST APIs.",
        date: "2025-01-15",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Fix Dark Mode Issues",
        description: "Resolve color mismatches in dark mode.",
        date: "2025-01-14",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Enhance Search Feature",
        description: "Add debounce and highlight results.",
        date: "2025-01-16",
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
