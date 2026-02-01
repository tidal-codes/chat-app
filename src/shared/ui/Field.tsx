import { Field as ChakraField } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface FieldProps {
    label?: string;
    helperText?: string;
    errorText?: string;
    invalid?: boolean;
    children: ReactNode
}

const Field = ({ label, helperText, errorText, invalid = false, children }: FieldProps) => {
    return (
        <ChakraField.Root invalid={invalid}>
            {label && (
                <ChakraField.Label>
                    {label}
                </ChakraField.Label>
            )}
            {children}
            {helperText && (
                <ChakraField.HelperText>
                    {helperText}
                </ChakraField.HelperText>
            )}
            {errorText && (
                <ChakraField.ErrorText >
                    {errorText}
                </ChakraField.ErrorText>
            )}
        </ChakraField.Root>
    );
}

export default Field;
