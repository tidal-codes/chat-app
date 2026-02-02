import { Flex, Text } from "@chakra-ui/react";
import EmailForm from "./EmailForm";
import type { Steps } from "../@types";
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import type { EmailFormSchema } from "../hooks/forms";

interface EmailSectionProps {
    setStep: React.Dispatch<React.SetStateAction<Steps>>
    register: UseFormRegister<EmailFormSchema>
    handleSubmit: UseFormHandleSubmit<EmailFormSchema>
    watch: UseFormWatch<EmailFormSchema>
    errors: FieldErrors<EmailFormSchema>
}

const EmailSection = ({ setStep, handleSubmit, register, watch, errors }: EmailSectionProps) => {
    return (
        <>
            <Flex flexDir="column" mb="5">
                <Text
                    fontSize="lg"
                    fontWeight="bold"
                    textTransform="capitalize"
                    as="h3"
                >
                    sign in to your account
                </Text>
                <Text
                    fontSize="sm"
                    color="fg.muted"
                    textTransform="capitalize"
                >
                    enter your email and tab on next to continue
                </Text>
            </Flex>
            <EmailForm
                setStep={setStep}
                register={register}
                handleSubmit={handleSubmit}
                watch={watch}
                errors={errors}
            />
            {/* <Flex alignItems="center" justifyContent="center" gap="4">
                <Separator flex="1" borderColor="gray.600" />
                <Text>Or</Text>
                <Separator flex="1" borderColor="gray.600" />
            </Flex>
            <TestAccountLogin /> */}
        </>
    );
}

export default EmailSection;
