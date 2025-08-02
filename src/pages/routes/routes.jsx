import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { ProfilePage } from "../ProfilePage";
import { DailyPage } from "../DailyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/daily",
    element: <DailyPage />
  },
])

export function AppRoutes() {
  return (
    <RouterProvider router={router} />
  )
}