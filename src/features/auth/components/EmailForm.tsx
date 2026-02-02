import Field from '@/shared/ui/Field';
import { Box, Button, Flex, Input, InputGroup } from '@chakra-ui/react';
import { type EmailFormSchema } from '../hooks/forms';
import type { Steps } from '../@types';
import useSubmitEmail from '../hooks/useSubmitEmail';
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from 'react-hook-form';
import EmailInputEndElement from './EmailInputEndElement';

interface EmailFormProps {
    setStep: React.Dispatch<React.SetStateAction<Steps>>
    register: UseFormRegister<EmailFormSchema>
    handleSubmit: UseFormHandleSubmit<EmailFormSchema>
    watch: UseFormWatch<EmailFormSchema>
    errors: FieldErrors<EmailFormSchema>
}

const EmailForm = ({ setStep, handleSubmit, register, watch, errors }: EmailFormProps) => {

    const { submit, isPending } = useSubmitEmail(setStep);
    const email = watch("email");

    return (
        <Box>
            <form onSubmit={handleSubmit(submit)}>
                <Flex
                    flexDir="column"
                    gap="3"
                >
                    <Field
                        label='Email'
                    >
                        <InputGroup
                            endElement={<EmailInputEndElement
                                fieldError={errors?.email ?? null}
                                fieldValue={email}
                            />}
                        >
                            <Input
                                {...register("email")}
                            />
                        </InputGroup>
                    </Field>
                    {!errors?.email && email && (
                        <Button
                            w="full"
                            type="submit"
                            loading={isPending}
                            bgColor="#774cff"
                            color='white'
                        >
                            Next
                        </Button>
                    )}
                </Flex>
            </form>
        </Box>
    );
}

export default EmailForm;
