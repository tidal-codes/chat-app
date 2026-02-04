import { Box } from '@chakra-ui/react';
import ChatInput from '../components/ChatInput';

const ChatPage = () => {
    return (
        <Box
            w="full"
            h="full"
            position="relative"
        >
            <Box
                position="absolute"
                bottom="5"
                left="5"
                right="5"
            >
                <ChatInput />
            </Box>
        </Box>
    );
}

export default ChatPage;
