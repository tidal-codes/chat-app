import { useMutation } from "@tanstack/react-query";
import { supabaseSendOtp, supabaseSignOut, supabaseVerifyOTP } from "../api";

export function useSendOtp() {
    return useMutation({
        mutationFn: (email: string) => test(),
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

export function useSignout() {
    return useMutation({
        mutationFn: () => supabaseSignOut()
    })
}

async function test() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("done")
        }, 600);
    })
}