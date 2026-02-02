import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getActiveOtpEmail } from '../utils/localStorageManager';

export const emailSchema = z.object({
    email: z.email("invalid email"),
});

export const otpSchema = z.object({
    otp: z
        .string()
        .min(6, "کد باید ۶ رقم باشد")
        .max(6, "کد باید ۶ رقم باشد"),
});

export type EmailFormSchema = z.infer<typeof emailSchema>
export type OtpFormSchema = z.infer<typeof otpSchema>

export function useEmailForm() {
    const email = getActiveOtpEmail() as string;
    const { register, handleSubmit, getValues, watch, formState: { isLoading, errors } } = useForm<EmailFormSchema>({
        defaultValues: {
            email: email || ""
        },
        resolver: zodResolver(emailSchema),
        mode: "onChange"
    })

    return {
        register,
        handleSubmit,
        getValues,
        watch,
        isLoading,
        errors
    }
}