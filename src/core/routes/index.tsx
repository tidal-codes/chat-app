import LoginPage from "@/features/auth/pages/LoginPage";
import LoggedIn from "@/features/test/LoggedIn";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
    {
        path: "/auth",
        element: <LoginPage />
    },
    {
        path: "/loggedIn",
        element: <LoggedIn />
    }
]

export default routes;