import supabase from "@/core/supabase";

export async function supabaseSendOtp(email: string) {
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            shouldCreateUser: true
        }
    })

    if (error) throw error;
}

export async function supabaseLogin(email: string, password: string) {
    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    return {
        error,
        data
    }
}

export async function supabaseVerifyOTP({ email, token }: { email: string; token: string }) {
    const { error, data } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email'
    })
    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function supabaseSignOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
}