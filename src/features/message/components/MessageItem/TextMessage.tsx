import { Flex, Text, Box } from "@chakra-ui/react";
import useMessageStore from "../../store/useMessageStore";
import MessageStatus from "./MessageStatus";


interface TextMessageProps {
    isMe: boolean;
    messageId: string;
    tale: boolean
}

const TextMessage = ({ isMe, messageId, tale }: TextMessageProps) => {
    const messagesById = useMessageStore(state => state.messagesById);
    const message = messagesById[messageId];
    return (
        <Flex w="full">
            <Flex
                w="full"
                gap="1"
                justify={isMe ? "flex-end" : "flex-start"}
            >
                <Box position="relative">
                    {tale && (
                        <Box
                            position="absolute"
                            top="10px"
                            left={isMe ? "auto" : "-8px"}
                            right={isMe ? "-8px" : "auto"}
                            width="0"
                            height="0"
                            borderTop="7px solid transparent"
                            borderBottom="7px solid transparent"
                            borderRight={isMe ? "none" : "7px solid #242424"}
                            borderLeft={isMe ? "7px solid var(--chakra-colors-brand-500)" : "none"}
                        />
                    )}

                    <Flex
                        w="fit-content"
                        minW="100px"
                        maxW="310px"
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
                </Box>
            </Flex>
        </Flex>
    );
}

export default TextMessage;
