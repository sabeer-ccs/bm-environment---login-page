import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { LoginPage } from "./screens/LoginPage";
import { RoleManagement } from "./screens/RoleManagement";
import { RoleManagementScreen } from "./screens/RoleManagementScreen";
import { Screen4 } from "./screens/Screen4";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LoginPage />,
  },
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/role-management",
    element: <RoleManagement />,
  },
  {
    path: "/role-management2",
    element: <RoleManagementScreen />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/role-management3",
    element: <Screen4 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
