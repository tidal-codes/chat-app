import { Flex } from '@chakra-ui/react';
import useStep from '../hooks/useStep';
import { useEmailForm } from '../hooks/forms';
import VerifyLoginCode from './VerifyLoginCode';
import EmailSection from './EmailSection';
import { motion } from "motion/react";

const AuthEntry = () => {
    const { register, errors, handleSubmit, watch, getValues } = useEmailForm();
    const { step, setStep } = useStep();
    const MotionFlex = motion(Flex);

    return (
        <Flex
            flexDir="column"
            p="4"
            maxW="md"
            rounded="md"
            w="full"
            gap="3"
            bgColor="#2f2f2f"

        >
            {step === "EMAIL" && (
                <EmailSection
                    setStep={setStep}
                    register={register}
                    handleSubmit={handleSubmit}
                    watch={watch}
                    errors={errors}
                />
            )}
            {step === "OTP" && (
                <VerifyLoginCode email={getValues().email} setStep={setStep} />
            )}
        </Flex>
    );
}

export default AuthEntry;
