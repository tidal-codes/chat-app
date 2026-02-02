import type { User } from "@supabase/supabase-js"

export type Steps = "EMAIL" | "OTP" | "DONE"
export type OtpStatus = "IDLE" | "WRONG" | "CURRECT"
export type AuthContextState = {
    user: User | null;
    loading: boolean;
}