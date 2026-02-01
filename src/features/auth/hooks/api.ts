import { useMutation, useQuery } from "@tanstack/react-query";
import { supabaseSendOtp, supabaseVerifyOTP } from "../api";
import type { AuthResponse, Session, User } from "@supabase/supabase-js";

export function useSendOtp() {
    return useMutation({
        mutationFn: (email: string) => supabaseSendOtp(email),
        onError: (error) => {
            console.log(error);
        }
    })
}

export function useVerifyOtp() {
    return useMutation({
        mutationFn: ({ email, token }: { email: string, token: string }) => supabaseVerifyOTP({ email, token })
    })
}