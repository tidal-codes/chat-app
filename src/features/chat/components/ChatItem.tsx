import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import useChatsStore from "../store/chats";
import Avatar from "@/shared/ui/Avatar";


const ChatItem = ({ chatId }: { chatId: string }) => {
    const chats = useChatsStore(state => state.chats);
    const chat = chats[chatId];
    const createdAt = new Date(chat.lastMessage.createdAt);

    return (
        <Link
            as={RouterLink}
            to={chatId}
        >
            <Box
                w="full"
                bgColor="#2f2f2f"
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
                                {chat.user.fullName}
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
                                {chat.lastMessage.text}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Link>

    );
}

export default ChatItem;
