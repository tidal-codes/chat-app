import { Box, VStack } from "@chakra-ui/react";
import useMessageStore from "../store/useMessageStore";
import TextMessage from "./TextMessage";


const MessagesList = () => {
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

            >
                {messageIds.map(id => {
                    const isMe = messagesById[id].sender_id === 10
                    return <TextMessage key={id} messageId={id} isMe={isMe} />
                })}
            </VStack>
        </Box>
    );
}

export default MessagesList;
