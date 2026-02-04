import { Box, Flex, Text } from "@chakra-ui/react";
import useMessageStore from "../store/useMessageStore";


interface TextMessageProps {
    isMe: boolean;
    messageId: string;
}

const TextMessage = ({ isMe, messageId }: TextMessageProps) => {
    const messagesById = useMessageStore(state => state.messagesById);
    const message = messagesById[messageId];
    return (
        <Box
            w="full"
        >
            <Flex
                w="full"
                justify={isMe ? "flex-end" : "flex-start"}
            >
                <Box
                    w="fit-content"
                    h="fit"
                    p="3"
                    bgColor={isMe ? "brand.500" : "#242424"}
                    rounded="md"
                >
                    <Text>
                        {message.content}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default TextMessage;
