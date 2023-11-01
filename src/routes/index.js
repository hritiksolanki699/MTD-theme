import React, { lazy } from "react";
import Support from "../pages/support/Support";

// Auth pages
const Login = lazy(() => import("../pages/auth/Login"));
const Registration = lazy(() => import("../pages/auth/Registration"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));

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
const AddContact = lazy(() => import("../pages/settings/AddContact"));
const PersonalDetails = lazy(() =>
  import("../pages/personalDetails/PersonalDetails")
);
const EditProfile = lazy(() => import("../pages/personalDetails/EditProfile"));
const TermsOfServices = lazy(() =>
  import("../pages/termsOfServices/TermsOfServices")
);
const SingleBusinessDetail = lazy(() =>
  import("../pages/singleBusiness/SIngleBusinessDetail")
);
const SingleBusinessDetailEdit = lazy(() =>
  import("../pages/singleBusiness/SIngleBusinessDetailEdit")
);
const HMRCAuthenticate = lazy(() =>
  import("../pages/HMRCAuthenticate/HMRCAuthenticate")
);
const AuthenticationCode = lazy(() =>
  import("../pages/HMRCAuthenticate/AuthenticationCode")
);
const Transactions = lazy(() => import("../pages/transactions/Transactions"));
const AddSalesTransaction = lazy(() =>
  import("../pages/transactions/AddSalesTransaction")
);
const AddPurchaseTransaction = lazy(() =>
  import("../pages/transactions/AddPurchaseTransaction")
);
const VatReturn = lazy(() => import("../pages/vatReturn/VatReturn"));

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
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: <ForgotPassword />,
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
    path: "/open-return",
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
    path: "/licence",
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
    path: "/add-contact",
    name: "Add Contact",
    component: <AddContact />,
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
  {
    path: "/terms-of-services",
    name: "Terms Of Services",
    component: <TermsOfServices />,
    index: false,
  },
  {
    path: "/business-detail",
    name: "Single Business Detail",
    component: <SingleBusinessDetail />,
    index: false,
  },
  {
    path: "/edit-business-details",
    name: "Single Business Detail Edit",
    component: <SingleBusinessDetailEdit />,
    index: false,
  },
  {
    path: "/HMRC-authenticate",
    name: "HMRC Authenticate",
    component: <HMRCAuthenticate />,
    index: false,
  },
  {
    path: "/authentication-code",
    name: "Authentication Code",
    component: <AuthenticationCode />,
    index: false,
  },
  {
    path: "/sales",
    name: "Transactions",
    component: <Transactions />,
    index: false,
  },
  {
    path: "/purchases",
    name: "Transactions",
    component: <Transactions />,
    index: false,
  },
  {
    path: "/add-purchase-transaction",
    name: "Add Purchase Transaction",
    component: <AddPurchaseTransaction />,
    index: false,
  },
  {
    path: "/add-sales-transaction",
    name: "Add Sales Transaction",
    component: <AddSalesTransaction />,
    index: false,
  },
  {
    path: "/vat-return",
    name: "VAT Return",
    component: <VatReturn />,
    index: false,
  },
  {
    path: "/support",
    name: "Support",
    component: <Support />,
    index: false,
  },
];

export { authRoutes, pagesRoutes };
