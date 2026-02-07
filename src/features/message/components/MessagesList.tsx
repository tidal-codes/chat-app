import { Box, VStack } from "@chakra-ui/react";
import useMessageStore from "../store/useMessageStore";
import TextMessage from "./TextMessage";
import type { User } from "@supabase/supabase-js";


const MessagesList = ({ user }: { user: User }) => {
    const messageIds = useMessageStore(state => state.messageIds);
    const messagesById = useMessageStore(state => state.messagesById);

    return (
        <Box
            w="full"
            h="full"
        // overflowY="auto"
        >
            <VStack
                p="3"
                pb="100px"

            >
                {messageIds.map(id => {
                    const isMe = messagesById[id].sender_id === user.id
                    return <TextMessage key={id} messageId={id} isMe={isMe} />
                })}
            </VStack>
        </Box>
    );
}

export default MessagesList;
