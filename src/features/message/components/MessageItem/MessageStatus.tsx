import { Box, Flex, Text } from '@chakra-ui/react';
import { getMessageSentTime } from '../../utils/time';
import type { MessageStatus as MessageStatusType} from '../../@types';
import { Check, CircleX, Clock } from 'lucide-react';

interface MessageStatusProps {
    sentTime: string,
    status: MessageStatusType,
    isMe: boolean
}

const MessageStatus = ({ sentTime, status, isMe }: MessageStatusProps) => {
    const time = getMessageSentTime(sentTime)
    const getStatusIcon = () => {
        switch (status) {
            case "SENDING":
                return <Clock size="15" />;
            case "SENT":
                return <Check size="15" />;
            case "FAILED":
                return <CircleX size="15" />;
            default:
                throw new Error("no icon found");
        }
    }
    return (
        <Box>
            <Flex
                gap="1"
                alignItems="center"
                justify="flex-end"
                >
                <Box>
                    <Text fontSize="xs">{time}</Text>
                </Box>
                {isMe && (
                    <Box>
                        <Text fontSize="xs">{getStatusIcon()}</Text>
                    </Box>
                )}
            </Flex>
        </Box>
    );
}

export default MessageStatus;
