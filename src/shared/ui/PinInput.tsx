import type { OtpStatus } from "@/features/auth/@types";
import { PinInput as ChakraPinInput } from "@chakra-ui/react";


interface PinInputProps {
    pins: number,
    value: string[],
    disabled?: boolean,
    status: OtpStatus
    setStatus: (status: OtpStatus) => void
    onValueChange: (value: string) => void

}

const PinInput = ({ pins, value, disabled = false, status, setStatus, onValueChange }: PinInputProps) => {
    function getInputBorderColor(): string {
        if (status === "CURRECT") return "status.success";
        if (status === "WRONG") return "status.error";
        return "border"
    }
    return (
        <ChakraPinInput.Root
            placeholder=""
            value={value}
            onValueChange={(data) => {
                setStatus("IDLE");
                onValueChange(data.valueAsString)
            }}
            disabled={disabled}
            size="xl"
        >
            <ChakraPinInput.HiddenInput />
            <ChakraPinInput.Control>
                {Array.from({ length: pins }).map((_, i) => {
                    return <ChakraPinInput.Input
                        data-status={status}
                        borderColor={getInputBorderColor()}
                        outline={status !== "IDLE" ? "none" : "1px solid"}
                        index={i}
                    />
                })}
            </ChakraPinInput.Control>
        </ChakraPinInput.Root>
    );
}

export default PinInput;
