import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { useGetChats } from "../hooks/Queries";
import useChatsStore from "../store/chats";
import ChatItem from "./ChatItem";


const ChatsList = () => {
    const { isLoading } = useGetChats();
    const chatIds = useChatsStore(state => state.chatIds);

    return (
        <Box>
            <Flex
                flexDir="column"
                gap="2"
                p="3"
            >
                {
                    isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => {
                            return <Skeleton
                                key={i}
                                w="full"
                                h="53px"
                                variant="shine"

                            />
                        })
                    ) : (
                        chatIds.map(chatId => (
                            <ChatItem key={chatId} chatId={chatId} />
                        ))
                    )
                }
            </Flex>
        </Box>
    );
}

export default ChatsList;
