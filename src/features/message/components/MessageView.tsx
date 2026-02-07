import { Box } from "@chakra-ui/react";
import useSetMessages from "../hooks/useSetMessages";
import MessagesList from "./MessagesList";
import useAuth from "@/features/auth/hooks/useAuth";

interface MessageViewProps {
    chatId: string
}

const MessageView = ({ chatId }: MessageViewProps) => {
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
        <Box
            w="full"
            h="full"
            overflowY="auto"
            bgColor="red.300">
            <MessagesList user={auth.user} />
        </Box>
    );
}

export default MessageView;
