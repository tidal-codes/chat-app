import { Box, Flex, Text } from "@chakra-ui/react";
import useMessageStore from "../../store/useMessageStore";
import MessageStatus from "./MessageStatus";
import Options from "./Options";


interface TextMessageProps {
    isMe: boolean;
    messageId: string;
}

const TextMessage = ({ isMe, messageId }: TextMessageProps) => {
    const messagesById = useMessageStore(state => state.messagesById);
    const message = messagesById[messageId];
    return (
        <Flex
            w="full"
        >
            <Flex
                w="full"
                gap="1"
                justify={isMe ? "flex-end" : "flex-start"}
            >
                <Flex
                    w="fit-content"
                    h="fit"
                    flexDir="column"
                    gap="1"
                    p="2"
                    bgColor={isMe ? "brand.500" : "#242424"}
                    rounded="md"
                >
                    <Text fontSize="sm">
                        {message.text}
                    </Text>
                    <MessageStatus
                        sentTime={message.created_at}
                        status={message.status}
                        isMe={isMe}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default TextMessage;
