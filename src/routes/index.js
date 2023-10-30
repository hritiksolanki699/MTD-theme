import React, { lazy } from "react";

// Auth pages
const Login = lazy(() => import("../pages/auth/Login"));
const Registration = lazy(() => import("../pages/auth/Registration"));

// All other pages
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const UserDashboard = lazy(() => import("../pages/dashboard/UserDashboard"));
const Clients = lazy(() => import("../pages/clients/ClientsList"));
const AddClient = lazy(() => import("../pages/clients/AddClient"));
const License = lazy(() => import("../pages/settings/License"));
const Practice = lazy(() => import("../pages/settings/PracticeDetails"));
const EditPracticeDetails = lazy(() =>
  import("../pages/settings/EditPracticeDetails")
);
const UserAccess = lazy(() => import("../pages/settings/UserAccess"));
const AddUser = lazy(() => import("../pages/settings/AddUser"));
const EmailPreferences = lazy(() =>
  import("../pages/settings/EmailPreferences")
);
const Configuration = lazy(() => import("../pages/settings/Configuration"));
const PersonalDetails = lazy(() =>
  import("../pages/personalDetails/PersonalDetails")
);
const EditProfile = lazy(() => import("../pages/personalDetails/EditProfile"));

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: <Login />,
  },
  {
    path: "/registration",
    name: "Registration",
    component: <Registration />,
  },
];

const pagesRoutes = [
  {
    path: "/",
    name: "Dashboard",
    component: <Dashboard />,
    index: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <UserDashboard />,
    index: false,
  },
  {
    path: "/clients",
    name: "Clients",
    component: <Clients />,
    index: false,
  },
  {
    path: "/client-add",
    name: "Add Client",
    component: <AddClient />,
    index: false,
  },
  {
    path: "/license",
    name: "License",
    component: <License />,
    index: false,
  },
  {
    path: "/practice",
    name: "Practice",
    component: <Practice />,
    index: false,
  },
  {
    path: "/edit-practice-details",
    name: "Edit Practice Details",
    component: <EditPracticeDetails />,
    index: false,
  },
  {
    path: "/user-access",
    name: "User Access",
    component: <UserAccess />,
    index: false,
  },
  {
    path: "/add-user",
    name: "Add User",
    component: <AddUser />,
    index: false,
  },
  {
    path: "/email-preferences",
    name: "Email Preferences",
    component: <EmailPreferences />,
    index: false,
  },
  {
    path: "/configuration",
    name: "Configuration",
    component: <Configuration />,
    index: false,
  },
  {
    path: "/personal-details",
    name: "Personal Details",
    component: <PersonalDetails />,
    index: false,
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    component: <EditProfile />,
    index: false,
  },
];

export { authRoutes, pagesRoutes };
