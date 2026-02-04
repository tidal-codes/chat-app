import { Box, Button, Flex } from '@chakra-ui/react';
import { Menu, Search } from 'lucide-react';
const ChatViewHeader = () => {
    return (
        <Box w="full">
            <Flex
                w="full"
                py="2"
                px="3"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box>
                    <Button
                        variant="ghost"
                        size="lg"
                        p='2'
                        rounded="full"
                    >
                        <Menu />
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="ghost"
                        size="lg"
                        p='2'
                        rounded="full"
                    >
                        <Search />
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
}

export default ChatViewHeader;
