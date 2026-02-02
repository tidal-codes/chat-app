import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("context error")
    }
    return authContext;
}