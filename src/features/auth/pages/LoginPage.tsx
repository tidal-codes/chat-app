import { Box, Flex } from '@chakra-ui/react';
import AuthEntry from '../components/AuthEntry';

const LoginPage = () => {
    return (
        <Box h="100vh" w="full">
            <Flex h="full" w="full" backgroundColor="#242424" alignItems="center" justifyContent="center">  
                    <AuthEntry/>
            </Flex>
        </Box>
    );
}

export default LoginPage;
