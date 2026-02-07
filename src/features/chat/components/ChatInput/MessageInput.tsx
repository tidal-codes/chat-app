import { Text } from "@chakra-ui/react";
import type { RefObject } from "react";

interface InputProps {
    inputRef: RefObject<HTMLParagraphElement | null>;
    handleInput: () => void
}

const MessageInput = ({ inputRef, handleInput }: InputProps) => {
    return (
        <Text
            ref={inputRef}
            contentEditable
            dir="auto"
            onInput={handleInput}
            suppressContentEditableWarning
            outline="none"
            p="2"
            whiteSpace="pre-wrap"
            wordBreak="break-word"
        />
    );
}

export default MessageInput;
