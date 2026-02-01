import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
    const { register, handleSubmit, formState: { isLoading, errors } } = useForm<EmailFormSchema>({
        resolver: zodResolver(emailSchema)
    })

    return {
        register,
        handleSubmit,
        isLoading,
        errors
    }
}