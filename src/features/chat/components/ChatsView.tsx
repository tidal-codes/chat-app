import { Box, Flex } from '@chakra-ui/react';
import ChatViewHeader from './ChatViewHeader';
import ChatsList from './ChatsList';
import useInitialChats from '../hooks/useInitialChats';

const ChatsView = () => {
    useInitialChats();
    return (
        <Box w="full" h="full" bgColor="#2f2f2f">
            <Flex
                flexDir="column"
                alignItems='center'
                borderEnd="1px solid #3a3a3a"
                h="full"
                w="full"
            >
                <Box w="full" borderBottom="1px solid #4a4a4a">
                    <ChatViewHeader />
                </Box>
                <Box flex="1" w="full" overflowY="auto" bgColor="#242424">
                    <ChatsList />
                </Box>
            </Flex>
        </Box>
    );
}

export default ChatsView;
