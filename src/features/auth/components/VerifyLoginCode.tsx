import PinInput from "@/shared/ui/PinInput";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import type { Steps } from "../@types";
import { clearActiveOtp } from "../utils/localStorageManager";
import useHandleVerifyCode from "../hooks/useVerifyOtp";
import useLoginEffect from "../hooks/useLoginEffect";

interface VerifyLoginCodeProps {
    email: string
    setStep: React.Dispatch<React.SetStateAction<Steps>>
}

const VerifyLoginCode = ({ email, setStep }: VerifyLoginCodeProps) => {
    const { getVerificationStatus, getStringArray, setCode } = useHandleVerifyCode(email);
    const status = getVerificationStatus();
    useLoginEffect();
    return (
        <>
            <Box>
                <Text
                    as="h2"
                    fontSize="lg"
                    fontWeight="bold"
                >
                    verification Code
                </Text>
                <Text>
                    {`we sent a code to ${email}`}
                </Text>
                <Text>
                    enter it below to continue
                </Text>
            </Box>
            <Flex alignItems="center" justifyContent="center">
                <PinInput
                    pins={6}
                    value={getStringArray()}
                    onValueChange={(value) => setCode(value)}
                />
            </Flex>
            <Flex>
                <Link onClick={() => {
                    clearActiveOtp();
                    setStep("EMAIL");
                }}>
                    edit your email
                </Link>
            </Flex>
        </>
    );
}

export default VerifyLoginCode;
