import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Paperclip, SendHorizontal, Smile } from 'lucide-react';
import { useRef, useState } from 'react';

const ChatInput = () => {
    const [text, setText] = useState("");
    const inputRef = useRef<HTMLParagraphElement>(null);

    const handleInput = () => {
        const value = inputRef.current?.textContent || "";
        setText(value);
    };

    return (
        <Box
            w="full"
            bgColor="#2f2f2f"
            rounded="full"
        >
            <Flex
                w="full"
                alignItems="center"
                p="2"
                gap="2"
            >
                <Button
                    variant="ghost"
                    size="icon_lg"
                    rounded="full"
                >
                    <Smile />
                </Button>

                <Box h="full" flex="1">
                    <Text
                        ref={inputRef}
                        contentEditable
                        dir="auto"
                        onInput={handleInput}
                        suppressContentEditableWarning
                        outline="none"
                        px="0"
                    />
                </Box>

                <Flex gap="2">
                    <Button
                        variant="ghost"
                        size="icon_lg"
                        rounded="full"
                    >
                        <Paperclip />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon_lg"
                        rounded="full"
                        bgColor="brand.500"
                        color="white"
                    >
                        <SendHorizontal />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ChatInput;
