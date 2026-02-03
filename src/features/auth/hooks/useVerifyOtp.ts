import { useEffect, useRef, useState } from "react";
import { useVerifyOtp } from "./api";
import type { OtpStatus } from "../@types";
import { toast } from "@/shared/utils/toast";

export default function useHandleVerifyCode(email: string) {
    const [code, setCode] = useState<string>("");
    const [status, setStatus] = useState<OtpStatus>("IDLE");
    const [isDisable, setDisable] = useState(false);
    const toastIdRef = useRef<null | string>(null);
    const { data, error, isPending, mutateAsync } = useVerifyOtp({ onSuccess, onError, onMutate });
    if (data) console.log(data);
    if (error) console.log(error)

    function onSuccess() {
        toast.update(toastIdRef.current!, {
            title: "loggedin successfully",
            type: "success"
        })
        setStatus("CURRECT")
    }
    function onError() {
        setStatus("WRONG");
    }
    function onMutate() {
        toastIdRef.current = toast.loading("checking your code")
    }
    function getStringArray(): string[] {
        return Array.from({ length: 6 }).map((_, i) => {
            return code.split("")[i] || ""
        })
    }
    async function verifyCode() {
        setDisable(true);
        await mutateAsync({ email, token: code });
        setDisable(false);
    }
    useEffect(() => {
        if (code.length === 6) {
            verifyCode()
        }
    }, [code])

    return {
        code,
        setCode,
        setStatus,
        status,
        isDisable,
        getStringArray,
        isPending,
        verifyCode
    }
}