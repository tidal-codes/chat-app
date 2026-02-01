import { useEffect, useState } from "react";
import type { Steps } from "../@types";

export default function useStep() {
    const [step, setStep] = useState<Steps>("EMAIL");

    useEffect(() => {
        const activeOtp = localStorage.getItem("activeOtp");
        activeOtp && setStep("OTP");

    }, [])

    return { step, setStep }
}