import { Box, VStack } from "@chakra-ui/react";
import useMessageStore from "../store/useMessageStore";
import TextMessage from "./MessageItem/TextMessage";
import type { User } from "@supabase/supabase-js";
import { useEffect } from "react";


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
            >
                {messageIds.map((id, i) => {
                    const isMe = messagesById[id].sender_id === user.id
                    return <TextMessage key={id} messageId={id} isMe={isMe} />
                })}
            </VStack>
        </Box>
    );
}

export default MessagesList;
