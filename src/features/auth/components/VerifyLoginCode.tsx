import PinInput from "@/shared/ui/PinInput";
import { Flex, Link, Text } from "@chakra-ui/react";
import type { Steps } from "../@types";
import { clearActiveOtp } from "../utils/localStorageManager";
import useHandleVerifyCode from "../hooks/useVerifyOtp";
import useLoginEffect from "../hooks/useLoginEffect";

interface VerifyLoginCodeProps {
    email: string
    setStep: React.Dispatch<React.SetStateAction<Steps>>
}

const VerifyLoginCode = ({ email, setStep }: VerifyLoginCodeProps) => {
    const { status, setStatus, isDisable, getStringArray, setCode } = useHandleVerifyCode(email);
    useLoginEffect();
    return (
        <>
            <Flex flexDir="column">
                <Flex gap="3" alignItems="center">
                    <Text
                        as="h2"
                        fontSize="lg"
                        fontWeight="bold"
                    >
                        {email}
                    </Text>
                    <Link
                        fontSize="xs"
                        color="brand.200"
                        onClick={() => {
                            clearActiveOtp();
                            setStep("EMAIL");
                        }}
                    >
                        edit your email
                    </Link>
                </Flex>
                <Text fontSize="sm" color="fg.muted">
                    please enter the code we have sent to your email. if you don't see it, check your spam folder
                </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" my="5">
                <PinInput
                    pins={6}
                    value={getStringArray()}
                    onValueChange={(value) => setCode(value)}
                    disabled={isDisable}
                    status={status}
                    setStatus={setStatus}
                />
            </Flex>
        </>
    );
}

export default VerifyLoginCode;
