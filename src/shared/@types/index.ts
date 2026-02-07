export interface User {
    id: string;
    first_name: string;
    last_name: string | null;
    username: string;
    bio: string | null;
    is_online: boolean;
    avatar_url: string
}

