import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AuthEntry from '../components/AuthEntry';
import VerifyLoginCode from '../components/VerifyLoginCode';
import type { Steps } from '../@types';

const LoginPage = () => {
    const [step, setStep] = useState<Steps>("EMAIL");
    return (
        <Box h="100vh" w="full">
            <Flex h="full" w="full" backgroundColor="#242424" alignItems="center" justifyContent="center">
                <Flex
                    flexDir="column"
                    p="2"
                    maxW="md"
                    w="full"
                    gap="3"
                >
                    {step === "EMAIL" && <AuthEntry setStep={setStep} />}
                    {step === "OTP" && <VerifyLoginCode />}
                </Flex>
            </Flex>
        </Box>
    );
}

export default LoginPage;
