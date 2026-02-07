import useAuth from '@/features/auth/hooks/useAuth';
import { useSendMessage } from '@/features/message/hooks/Queries';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Paperclip, SendHorizontal, Smile } from 'lucide-react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';

const ChatInput = () => {
    const [text, setText] = useState("");
    const { mutate } = useSendMessage();
    const { chatId } = useParams();
    const auth = useAuth();
    const inputRef = useRef<HTMLParagraphElement>(null);

    const handleInput = () => {
        const value = inputRef.current?.textContent || "";
        setText(value);
    };

    function sendMessage() {
        mutate({
            conversation_id: chatId!,
            sender_id: auth.user!.id,
            text
        })
    }

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
                        whiteSpace="pre-wrap"
                        wordBreak="break-word"
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
                        onClick={() => sendMessage()}
                    >
                        <SendHorizontal />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ChatInput;
