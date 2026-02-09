import { Box, Text } from "@chakra-ui/react";
import type { RefObject } from "react";

interface InputProps {
    inputRef: RefObject<HTMLParagraphElement | null>;
    handleInput: () => void
}

const MessageInput = ({ inputRef, handleInput }: InputProps) => {
    const onInput = () => {
        const el = inputRef.current;
        if (!el) return;

        // normalize contentEditable (چیزهای مخفی رو حذف می‌کنیم)
        if (el.innerText.trim() === "") {
            el.innerHTML = ""; // کاملاً خالی!
        }

        handleInput();
    };
    return (
        <Text
            ref={inputRef}
            contentEditable
            dir="auto"
            onInput={onInput}
            suppressContentEditableWarning
            outline="none"
            p="2"
            whiteSpace="pre-wrap"
            wordBreak="break-word"
            zIndex="1000"
            _empty={{
                _before: {
                    content: '"Message"',
                    color: "fg.muted",
                }
            }}
        />
    );
}

export default MessageInput;
