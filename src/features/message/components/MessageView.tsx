import { Box } from "@chakra-ui/react";
import useSetMessages from "../hooks/useSetMessages";
import MessagesList from "./MessagesList";

interface MessageViewProps {
    chatId: string
}

const MessageView = ({ chatId }: MessageViewProps) => {
    useSetMessages(chatId);
    return (
        <Box
            w="full"
            h="full"
            overflowY="auto"
            bgColor="red.300">
            <MessagesList />
        </Box>
    );
}

export default MessageView;
