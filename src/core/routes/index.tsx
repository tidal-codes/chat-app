import LoginPage from "@/features/auth/pages/LoginPage";
import ChatPage from "@/features/chat/pages/ChatPage";
import Chats from "@/features/chat/pages/Chats";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
    {
        path: "/auth",
        element: <LoginPage />
    },
    {
        path: "/c",
        element: <Chats />,
        children: [
            {
                path: ":chatId",
                element: <ChatPage />
            }
        ]
    }
]

export default routes;