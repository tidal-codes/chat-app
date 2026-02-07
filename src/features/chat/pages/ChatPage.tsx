import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import ChatInput from '../components/ChatInput';
import ChatPageHeader from '../components/ChatPageHeader';
import MessageView from '@/features/message/components/MessageView';
import { useParams } from 'react-router';
import { useEffect, useRef } from 'react';

const ChatPage = () => {
    const { chatId } = useParams();
    if (!chatId) throw new Error("no chat id provided");
    const scrollElementRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollElementRef.current;
        if (!el) return;

        el.scrollTo({
            top: el.scrollHeight,
            behavior: "auto"
        });
    }, [chatId])

    function scrollToBottom() {
        const el = scrollElementRef.current;
        if (!el) return;

        console.log("IS GOING TO GET SCROLLED")
        el.scrollTo({
            top: el.scrollHeight,
            behavior: "smooth"
        });
    }

    return (
        <Flex w="full" h="full" flexDir="column">
            <Box>
                <ChatPageHeader />
            </Box>
            <Flex flex="1" minH="0" flexDir="column">
                <Box
                    ref={scrollElementRef}
                    flex="1"
                    minH="0"
                    overflowY="auto"
                    px="4"
                >
                    <Box px="40">
                        <MessageView chatId={chatId} scrollToBottom={scrollToBottom} />
                    </Box>
                </Box>
                <Box w="full" pb="3" pt="1" px="40">
                    <ChatInput />
                </Box>
            </Flex>
        </Flex>

    );
}

export default ChatPage;
