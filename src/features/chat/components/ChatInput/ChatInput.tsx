import useAuth from '@/features/auth/hooks/useAuth';
import { useSendMessage } from '@/features/message/hooks/Queries';
import { Box, Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import EmojisButton from './EmojisButton';
import MessageInput from './MessageInput';
import SendButton from './SendButton';
import MediaButton from './MediaButton';

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
        if (!inputRef.current) return;
        inputRef.current.innerText = "";
        mutate({
            conversation_id: chatId!,
            sender_id: auth.user!.id,
            text
        })
    }

    return (
        <Box
            w="full"
        >
            <Flex
                w="full"
                alignItems="center"
                p="2"
                gap="2"
                bgColor="#2d2d2d"
            >
                <EmojisButton />
                <Box flex="1">
                    <MessageInput
                        inputRef={inputRef}
                        handleInput={handleInput}
                    />
                </Box>
                <Flex>
                    <MediaButton />
                    <SendButton show={Boolean(text.trim())} sendMessage={sendMessage} />
                </Flex>
            </Flex>
        </Box>
    );
}

export default ChatInput;
