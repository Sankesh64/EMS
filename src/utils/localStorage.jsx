
const employees = [
    {
        "id": 1,
        "firstName": "Arjun Sharma",
        "email": "arjun@company.com",
        "password": "arjun123",
        "role": "Frontend Developer",
        "department": "Engineering",
        "joinDate": "2022-03-15",
        "avatar": "AS",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 3, "failed": 0 },
        "tasks": [
            { "id": "t1", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Revamp Homepage UI", "taskDescription": "Redesign the landing page with new brand guidelines and improve mobile responsiveness.", "taskDate": "2025-05-10", "category": "Design" },
            { "id": "t2", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Client Requirement Meeting", "taskDescription": "Discuss Q2 feature requirements with the product team and document action items.", "taskDate": "2025-04-28", "category": "Meeting" },
            { "id": "t3", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Fix Login Bug", "taskDescription": "Resolve the token expiry bug causing random logouts on the mobile app.", "taskDate": "2025-05-08", "category": "Development" },
            { "id": "t4", "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Write Unit Tests", "taskDescription": "Add Jest test coverage for the authentication module — target 80% coverage.", "taskDate": "2025-05-15", "category": "QA" },
            { "id": "t5", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "API Integration", "taskDescription": "Integrate the new payment gateway REST API into the checkout flow.", "taskDate": "2025-04-20", "category": "Development" },
            { "id": "t6", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Performance Audit", "taskDescription": "Run Lighthouse audit and fix critical performance issues.", "taskDate": "2025-04-15", "category": "DevOps" }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha Patil",
        "email": "sneha@company.com",
        "password": "sneha123",
        "role": "Backend Developer",
        "department": "Engineering",
        "joinDate": "2021-07-01",
        "avatar": "SP",
        "taskCounts": { "active": 1, "newTask": 2, "completed": 2, "failed": 1 },
        "tasks": [
            { "id": "t7", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Database Query Optimization", "taskDescription": "Optimize slow-running SQL queries in the reporting module.", "taskDate": "2025-05-09", "category": "Database" },
            { "id": "t8", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Design Feature Mockups", "taskDescription": "Create Figma mockups for the analytics dashboard feature.", "taskDate": "2025-04-22", "category": "Design" },
            { "id": "t9", "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Set Up Redis Cache", "taskDescription": "Configure Redis caching layer for session management.", "taskDate": "2025-05-18", "category": "DevOps" },
            { "id": "t10", "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "API Rate Limiting", "taskDescription": "Implement rate limiting middleware to prevent API abuse.", "taskDate": "2025-05-20", "category": "Development" },
            { "id": "t11", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Security Patch v2.1", "taskDescription": "Apply the latest security patches to all Node.js dependencies.", "taskDate": "2025-04-10", "category": "Security" },
            { "id": "t12", "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Migrate to PostgreSQL", "taskDescription": "Migrate the legacy MySQL database — blocked due to schema conflicts.", "taskDate": "2025-04-05", "category": "Database" }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi Kumar",
        "email": "ravi@company.com",
        "password": "ravi123",
        "role": "UI/UX Designer",
        "department": "Design",
        "joinDate": "2023-01-10",
        "avatar": "RK",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 2, "failed": 0 },
        "tasks": [
            { "id": "t13", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Client Presentation Slides", "taskDescription": "Create slides for the Q2 business review with key stakeholders.", "taskDate": "2025-05-12", "category": "Presentation" },
            { "id": "t14", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Design System Docs", "taskDescription": "Document all reusable components and design tokens in Figma.", "taskDate": "2025-05-11", "category": "Documentation" },
            { "id": "t15", "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Mobile App Redesign", "taskDescription": "Revamp mobile app UI to align with the new brand identity.", "taskDate": "2025-05-20", "category": "Design" },
            { "id": "t16", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Custom Icon Set", "taskDescription": "Design a custom icon set for dashboard navigation modules.", "taskDate": "2025-04-25", "category": "Design" },
            { "id": "t17", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "User Research Analysis", "taskDescription": "Analyze survey responses and summarize key UX pain points.", "taskDate": "2025-04-18", "category": "Research" }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya Desai",
        "email": "priya@company.com",
        "password": "priya123",
        "role": "DevOps Engineer",
        "department": "Infrastructure",
        "joinDate": "2022-09-05",
        "avatar": "PD",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "id": "t18", "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Update Dev Documentation", "taskDescription": "Refresh developer docs to reflect the new microservices architecture.", "taskDate": "2025-05-14", "category": "Documentation" },
            { "id": "t19", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "CI/CD Pipeline Setup", "taskDescription": "Configure GitHub Actions for automated build, test, and deployment.", "taskDate": "2025-05-10", "category": "DevOps" },
            { "id": "t20", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Kubernetes Cluster", "taskDescription": "Deploy staging environment on a new K8s cluster with auto-scaling.", "taskDate": "2025-05-08", "category": "Infrastructure" },
            { "id": "t21", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "SSL Certificate Renewal", "taskDescription": "Renew and configure SSL certificates for all production domains.", "taskDate": "2025-04-30", "category": "Security" }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan Mehta",
        "email": "karan@company.com",
        "password": "karan123",
        "role": "Product Manager",
        "department": "Product",
        "joinDate": "2020-11-20",
        "avatar": "KM",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 3, "failed": 0 },
        "tasks": [
            { "id": "t22", "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Sprint Planning Q3", "taskDescription": "Plan and prioritize Q3 sprint backlog with engineering and design leads.", "taskDate": "2025-05-16", "category": "Management" },
            { "id": "t23", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Deploy v2.5 Release", "taskDescription": "Coordinate and execute the production deployment of v2.5.", "taskDate": "2025-04-28", "category": "DevOps" },
            { "id": "t24", "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Client Feedback Campaign", "taskDescription": "Run NPS survey and compile feedback from enterprise clients post-launch.", "taskDate": "2025-05-09", "category": "Support" },
            { "id": "t25", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Roadmap 2025 Presentation", "taskDescription": "Present the full-year product roadmap to the board of directors.", "taskDate": "2025-04-15", "category": "Presentation" },
            { "id": "t26", "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Competitive Analysis", "taskDescription": "Research and document feature gaps against top 3 competitor products.", "taskDate": "2025-04-10", "category": "Research" }
        ]
    }
];

const admin = [{ "id": 1, "firstName": "Admin", "email": "admin@company.com", "password": "admin123" }];

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};

export const registerEmployee = (newEmployee) => {
    const existing = JSON.parse(localStorage.getItem('employees')) || [];
    const emailExists = existing.some(e => e.email === newEmployee.email);
    if (emailExists) return { success: false, message: 'This email is already registered.' };

    const initials = newEmployee.firstName.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const employee = {
        id: Date.now(),
        firstName: newEmployee.firstName.trim(),
        email: newEmployee.email.toLowerCase().trim(),
        password: newEmployee.password,
        role: newEmployee.role || 'Employee',
        department: newEmployee.department || 'General',
        joinDate: new Date().toISOString().split('T')[0],
        avatar: initials,
        taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
        tasks: []
    };

    existing.push(employee);
    localStorage.setItem('employees', JSON.stringify(existing));
    return { success: true, employee };
};
