import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { ProfilePage } from "../ProfilePage";
import { DailyPage } from "../DailyPage";
import { ExercisesPage } from "../ExercisesPage";
import { TeacherPage } from "../TeacherPage";

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
    path: "/daily",
    element: <DailyPage />
  },
  {
    path: "/exercises",
    element: <ExercisesPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/teacher",
    element: <TeacherPage />
  },
])

export function AppRoutes() {
  return (
    <RouterProvider router={router} />
  )
}