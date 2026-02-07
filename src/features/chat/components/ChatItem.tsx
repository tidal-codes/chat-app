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
            bgColor={isActive ? "brand.200" : "#2f2f2f"}
            px="3"
            py="2"
            rounded="md"
        >
            <Flex
                alignItems="center"
                justifyContent="space-between"
                gap="2"
            >
                <Flex gap="2">
                    <Box>
                        <Avatar size="xl" />
                    </Box>
                </Flex>
                <Flex
                    flex="1"
                    flexDir="column"
                >
                    <Flex w="full" alignItems="center" justifyContent="space-between">
                        <Text>
                            {chat.contact.first_name} {chat.contact.last_name}
                        </Text>
                        <Text
                            color="fg.muted"
                            fontSize="sm"
                        >
                            {createdAt.getHours()}:{createdAt.getMinutes()}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text
                            color="fg.muted"
                            fontSize="sm"
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
