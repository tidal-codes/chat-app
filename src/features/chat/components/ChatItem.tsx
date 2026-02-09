import { Box, Flex, Text } from "@chakra-ui/react";
import useChatsStore from "../store/chats";
import Avatar from "@/shared/ui/Avatar";


const ChatItem = ({ chatId, isActive }: { chatId: string, isActive: boolean }) => {
    const chats = useChatsStore(state => state.chats);
    const chat = chats[chatId];
    const createdAt = new Date(chat.last_message.created_at);

    return (
        <Box
            w="full"
            bgColor={isActive ? "brand.300" : "#2f2f2f"}
            p="2"
            rounded="md"
        >
            <Flex
                alignItems="center"
                justifyContent="space-between"
                gap="2"
            >
                <Flex gap="2">
                    <Box>
                        <Avatar w="54px" h="54px" />
                    </Box>
                </Flex>
                <Flex
                    flex="1"
                    flexDir="column"
                    minW="0"
                >
                    <Flex w="full" alignItems="center" justifyContent="space-between">
                        <Text
                            truncate={true}
                            fontSize="md"
                            fontWeight="semibold"
                        >
                            {chat.contact.first_name} {chat.contact.last_name}
                        </Text>
                        <Text
                            color={isActive ? "white" : "fg.muted"}
                            fontSize="sm"
                        >
                            {createdAt.getHours()}:{createdAt.getMinutes()}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text
                            color={isActive ? "white" : "fg.muted"}
                            fontSize="sm"
                            truncate={true}
                        >
                            {chat.last_message.text}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>

    );
}

export default ChatItem;
