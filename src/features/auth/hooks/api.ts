import { useMutation } from "@tanstack/react-query";
import { supabaseSendOtp, supabaseSignOut, supabaseVerifyOTP } from "../api";
import { toast } from "@/shared/utils/toast";

export function useSendOtp() {
    return useMutation({
        mutationFn: (email: string) => supabaseSendOtp(email),
        onError: (error) => {
            console.log(error);
        }
    })
}

export function useVerifyOtp({ onSuccess, onError, onMutate }: {
    onSuccess: () => void,
    onError: () => void,
    onMutate: () => void
}) {
    return useMutation({
        mutationFn: ({ email, token }: { email: string, token: string }) => supabaseVerifyOTP({ email, token }),
        onMutate: () => {
            onMutate()
        },
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
async function test1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done")
        }, 3500);
    })
}