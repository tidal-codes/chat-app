import { Box } from "@chakra-ui/react";
import useSetMessages from "../hooks/useSetMessages";
import MessagesList from "./MessagesList";
import useAuth from "@/features/auth/hooks/useAuth";

interface MessageViewProps {
    chatId: string;
    scrollToBottom: () => void
}

const MessageView = ({ chatId, scrollToBottom }: MessageViewProps) => {
    useSetMessages(chatId);
    const auth = useAuth();

    if (auth.loading || !auth.user) {
        return (
            <Box
                w="full"
                h="full"
                bgColor="red.300">
                is loading
            </Box>
        )
    }
    return (
        <Box>
            <MessagesList user={auth.user} scrollToBottom={scrollToBottom} />
        </Box>
    );
}

export default MessageView;
