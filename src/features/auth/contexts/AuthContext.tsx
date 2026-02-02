import supabase from "@/core/supabase";
import type { User } from "@supabase/supabase-js";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface AuthContextType {
    user: User | null;
    loading: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSession = async () => {
            const { data } = await supabase.auth.getSession();
            setUser(data.session?.user ?? null);
            setLoading(false);
        }
        loadSession();

        const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user ?? null);
        })

        return () => listener.subscription.unsubscribe()
    }, [])

    const values = {
        user,
        loading
    }

    return (
        <AuthContext value={values}>
            {!loading && children}
        </AuthContext>
    )
}
