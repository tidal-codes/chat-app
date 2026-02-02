import type { User } from "@supabase/supabase-js"

export type Steps = "EMAIL" | "OTP" | "DONE"
export type AuthContextState = {
    user : User | null;
    loading : boolean;
}