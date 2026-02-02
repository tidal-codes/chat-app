import { Box, chakra, Flex } from '@chakra-ui/react';
import { CircleCheck, CircleX } from 'lucide-react';
import type { FieldError } from 'react-hook-form';

interface EmailInputEndElementProps {
    fieldError: FieldError | null;
    fieldValue: string
}
const CircleXChakra = chakra(CircleX);
const CircleCheckChakra = chakra(CircleCheck);

const EmailInputEndElement = ({ fieldError, fieldValue }: EmailInputEndElementProps) => {

    return (
        <Box>
            <Flex>
                <Box>
                    {
                        fieldValue.trim() && (
                            fieldError ?
                                <CircleXChakra color="red.400" width={5} height={5} />
                                :
                                <CircleCheckChakra color="green.400" width={5} height={5} />
                        )
                    }
                </Box>
            </Flex>
        </Box>
    );
}

export default EmailInputEndElement;
