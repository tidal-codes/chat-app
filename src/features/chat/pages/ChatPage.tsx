import { Box, Flex } from '@chakra-ui/react';
import ChatInput from '../components/ChatInput';
import ChatPageHeader from '../components/ChatPageHeader';
import MessageView from '@/features/message/components/MessageView';
import { useParams } from 'react-router';

const ChatPage = () => {
    const { chatId } = useParams();
    if (!chatId) throw new Error("no chat id provided")
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
            <Flex
                flexDir="column"
                alignItems="center"
                h="full"
            >
                <Box
                    w="full"
                    h="fit-content"
                >
                    <ChatPageHeader />
                </Box>
                <Box
                    flex="1"
                    minH="0"
                    w="full"
                >
                    <MessageView chatId={chatId} />
                </Box>
            </Flex>
        </Box>
    );
}

export default ChatPage;
