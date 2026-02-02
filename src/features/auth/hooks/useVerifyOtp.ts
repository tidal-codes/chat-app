import { useEffect, useState } from "react";
import { useVerifyOtp } from "./api";

export default function useHandleVerifyCode(email: string) {
    const [code, setCode] = useState<string>("");
    const { data, error, isPending, mutate } = useVerifyOtp();
    console.log(data)
    console.log(error)

    function getVerificationStatus(): "NO-CODE" | "WRONG-CODE" | "CORRECT-CODE" {
        if (!data && !error) return "NO-CODE";
        if (error) return "WRONG-CODE";
        return "CORRECT-CODE";
    }

    function getStringArray(): string[] {
        return Array.from({ length: 6 }).map((_, i) => {
            return code.split("")[i] || ""
        })
    }

    function verifyCode() {
        mutate({ email, token: code });
    }

    useEffect(() => {
        if (code.length === 6) {
            verifyCode()
        }
    }, [code])

    return {
        code,
        setCode,
        getStringArray,
        isPending,
        verifyCode,
        getVerificationStatus
    }
}