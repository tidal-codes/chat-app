import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import { clearActiveOtp } from "../utils/localStorageManager";
import { useEffect } from "react";

export default function useLoginEffect() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                clearActiveOtp()
                navigate("/loggedIn");
            }, 2000);
        }
    }, [user])
}