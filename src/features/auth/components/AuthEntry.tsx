import LoginForm from './EmailForm';
import { Flex, Separator, Text } from '@chakra-ui/react';
import TestAccountLogin from './TestAccountLogin';
import type React from 'react';
import type { Steps } from '../@types';

interface AuthEntryProps {
    setStep: React.Dispatch<React.SetStateAction<Steps>>
}

const AuthEntry = ({ setStep }: AuthEntryProps) => {
    return (
        <>
            <LoginForm setStep={setStep} />
            <Flex alignItems="center" justifyContent="center" gap="4">
                <Separator flex="1" borderColor="gray.600" />
                <Text>Or</Text>
                <Separator flex="1" borderColor="gray.600" />
            </Flex>
            <TestAccountLogin />
        </>
    );
}

export default AuthEntry;
