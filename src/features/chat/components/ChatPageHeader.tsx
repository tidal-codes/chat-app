import Avatar from "@/shared/ui/Avatar";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { EllipsisVertical } from "lucide-react";


const ChatPageHeader = () => {
    return (
        <Box
            w="full"
            bgColor="#2f2f2f"
        >
            <Flex
                px="3"
                py="2"
                gap="3"
            >
                <Box>
                    <Avatar size="xl" />
                </Box>
                <Flex
                    flex="1"
                    flexDir="column"
                >
                    <Text>
                        user name
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                        last seen was when?
                    </Text>
                </Flex>
                <Flex>
                    <Button
                        variant="ghost"
                        size="icon_lg"
                        rounded="full"
                    >
                        <EllipsisVertical />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ChatPageHeader;
