import { Box, VStack } from "@chakra-ui/react";
import useMessageStore from "../store/useMessageStore";
import TextMessage from "./MessageItem/TextMessage";
import type { User } from "@supabase/supabase-js";
import { useEffect } from "react";
import { shouldHaveTale } from "../utils";


const MessagesList = ({ user, scrollToBottom }: { user: User, scrollToBottom: () => void }) => {
    const messageIds = useMessageStore(state => state.messageIds);
    const messagesById = useMessageStore(state => state.messagesById);

    useEffect(() => {
        if (messageIds.length === 0) return;

        const lastId = messageIds[messageIds.length - 1];
        const lastMsg = messagesById[lastId];

        const isMine = lastMsg.sender_id === user.id;
        if (isMine) {
            scrollToBottom();
        }

    }, [messageIds]);


    return (
        <Box>
            <VStack
                p="3"
                gap="0"
            >
                {messageIds.map((id, i) => {
                    const isMe = messagesById[id].sender_id === user.id
                    const tale = shouldHaveTale({
                        previousMsg: messagesById[messageIds[i - 1]],
                        nextMsg: messagesById[messageIds[i + 1]],
                        currentMsg: messagesById[id]
                    })
                    return (
                        <Box
                            w="full"
                            my="2"
                        >
                            <TextMessage
                                key={id}
                                messageId={id}
                                isMe={isMe}
                                tale={tale}
                            />
                        </Box>
                    )
                })}
            </VStack>
        </Box>
    );
}

export default MessagesList;
