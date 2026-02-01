import Field from '@/shared/ui/Field';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { type EmailFormSchema } from '../hooks/forms';
import type { Steps } from '../@types';
import useSubmitEmail from '../hooks/useSubmitEmail';
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface EmailFormProps {
    setStep: React.Dispatch<React.SetStateAction<Steps>>
    register: UseFormRegister<EmailFormSchema>
    handleSubmit: UseFormHandleSubmit<EmailFormSchema>
    errors: FieldErrors<EmailFormSchema>
}

const EmailForm = ({ setStep, handleSubmit, register, errors }: EmailFormProps) => {

    const { submit, isPending } = useSubmitEmail(setStep);

    return (
        <Box>
            <form onSubmit={handleSubmit(submit)}>
                <Flex
                    flexDir="column"
                    gap="3"
                >
                    <Field
                        label='Email'
                        errorText={errors?.email?.message}
                        invalid={Boolean(errors?.email?.message)}
                    >
                        <Input
                            {...register("email")}
                            borderColor="gray.500"
                        />
                    </Field>
                    <Button
                        w="full"
                        type="submit"
                        loading={isPending}
                    >
                        Next
                    </Button>
                </Flex>
            </form>
        </Box>
    );
}

export default EmailForm;
