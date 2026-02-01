import { PinInput as ChakraPinInput } from "@chakra-ui/react";

interface PinInputProps {
    pins: number,
    value: string[]
    onValueChange: (value: string) => void

}

const PinInput = ({ pins, value, onValueChange }: PinInputProps) => {
    return (
        <ChakraPinInput.Root placeholder="" value={value} onValueChange={(data) => onValueChange(data.valueAsString)}>
            <ChakraPinInput.HiddenInput />
            <ChakraPinInput.Control>
                {Array.from({ length: pins }).map((_, i) => {
                    return <ChakraPinInput.Input borderColor="gray.600" index={i} />
                })}
            </ChakraPinInput.Control>
        </ChakraPinInput.Root>
    );
}

export default PinInput;
