import { useEffect } from 'react';
import { useSignout } from '../auth/hooks/api';
import useAuth from '../auth/hooks/useAuth';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { clearActiveOtp } from '../auth/utils/localStorageManager';

const LoggedIn = () => {
    const {user} = useAuth();
    const { mutate } = useSignout();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            clearActiveOtp()
            navigate("/auth")
        }
    }, [user])
    return (
        <div>
            you are logged in
            <Text>{user?.email}</Text>
            <Button onClick={() => mutate()}>logout</Button>
        </div>
    );
}

export default LoggedIn;
