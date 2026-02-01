import type { SubmitHandler } from "react-hook-form";
import type { Steps } from "../@types";
import { useSendOtp } from "./api";
import type { EmailFormSchema } from "./forms";

export default function useSubmitEmail(setStep: React.Dispatch<React.SetStateAction<Steps>>) {
    const { isPending, mutateAsync } = useSendOtp();
    
    const submit: SubmitHandler<EmailFormSchema> = async (data) => {
        try {
            await mutateAsync(data.email);
        } finally {
            setStep("OTP");
        }
    }


    return {
        submit,
        isPending
    }
}