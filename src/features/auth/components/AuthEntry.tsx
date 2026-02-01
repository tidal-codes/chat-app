import LoginForm from './EmailForm';
import { Flex, Separator, Text } from '@chakra-ui/react';
import TestAccountLogin from './TestAccountLogin';
import useStep from '../hooks/useStep';
import { useEmailForm } from '../hooks/forms';
import VerifyLoginCode from './VerifyLoginCode';
import PinInput from '@/shared/ui/PinInput';
import { useState } from 'react';
import { string } from 'zod';

const AuthEntry = () => {
    const { register, errors, handleSubmit, getValues } = useEmailForm();
    const { step, setStep } = useStep();
    const [number, setNumber] = useState<string>("");
    return (
        <Flex
            flexDir="column"
            p="2"
            maxW="md"
            w="full"
            gap="3"
        >
            {step === "EMAIL" && (
                <>
                    <LoginForm
                        setStep={setStep}
                        register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                    <Flex alignItems="center" justifyContent="center" gap="4">
                        <Separator flex="1" borderColor="gray.600" />
                        <Text>Or</Text>
                        <Separator flex="1" borderColor="gray.600" />
                    </Flex>
                    <TestAccountLogin />
                </>
            )}
            {step === "OTP" && (
                <VerifyLoginCode email={getValues().email} setStep={setStep} />
            )}
        </Flex>
    );
}

export default AuthEntry;
