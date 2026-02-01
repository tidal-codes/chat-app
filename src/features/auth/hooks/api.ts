import { useMutation } from "@tanstack/react-query";
import { supabaseSendOtp } from "../api";

export function useSendOtp() {
    return useMutation({
        mutationFn: (email: string) => supabaseSendOtp(email),
        onError: (error) => {
            console.log(error);
        }
    })
}