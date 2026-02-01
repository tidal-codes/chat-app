import LoginPage from "@/features/auth/pages/LoginPage";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
    {
        path: "/auth",
        element: <LoginPage />
    }
]

export default routes;