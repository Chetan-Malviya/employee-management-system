const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in the navigation bar on mobile view.",
        date: "2025-01-14",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect dashboard with analytics API endpoint.",
        date: "2025-01-12",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Improve UI Spacing",
        description: "Update spacing and padding across the homepage for better UX.",
        date: "2025-01-15",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Login Page",
        description: "Develop responsive login screen with validation.",
        date: "2025-01-11",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Set Up MongoDB",
        description: "Initialize database schema for user accounts.",
        date: "2025-01-10",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Reduce image sizes to improve page load speed.",
        date: "2025-01-16",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Code Review",
        description: "Review pull requests from frontend team.",
        date: "2025-01-13",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add Jest test cases for user authentication module.",
        date: "2025-01-10",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix 404 Page",
        description: "Design and implement a custom 404 page.",
        date: "2025-01-14",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor Controllers",
        description: "Clean up code in user controller for better readability.",
        date: "2025-01-15",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy Application",
        description: "Deploy latest version of the app to production.",
        date: "2025-01-12",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Check Logs",
        description: "Analyze production logs for errors after deployment.",
        date: "2025-01-13",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Upgrade Dependencies",
        description: "Update outdated npm packages and fix vulnerabilities.",
        date: "2025-01-14",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Improve CI/CD",
        description: "Enhance GitHub workflow for automated testing.",
        date: "2025-01-16",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Dashboard",
        description: "Create layout for admin dashboard UI.",
        date: "2025-01-11",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Handle Form Validation",
        description: "Add real-time validation to all user input fields.",
        date: "2025-01-13",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create API Docs",
        description: "Write documentation for all REST endpoints.",
        date: "2025-01-15",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Fix Dark Mode Issues",
        description: "Resolve color mismatch in dark mode components.",
        date: "2025-01-14",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Enhance Search Feature",
        description: "Add debounce and result highlighting.",
        date: "2025-01-16",
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  console.log(employees, admin);
};