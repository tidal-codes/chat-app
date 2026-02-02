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

export function useVerifyOtp({ onSuccess, onError }: {
    onSuccess: () => void,
    onError: () => void
}) {
    return useMutation({
        mutationFn: ({ email, token }: { email: string, token: string }) => test1(),
        onSuccess: () => {
            onSuccess()
        },
        onError: () => {
            onError()
        }
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
async function test1(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("done")
        }, 500);
    })
}