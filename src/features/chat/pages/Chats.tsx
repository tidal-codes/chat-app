import { Box, Flex } from "@chakra-ui/react";
import ChatsView from "../components/ChatsView";
import { Outlet } from "react-router";

const Chats = () => {

    return (
        <Box w="full" h="100vh" bgColor="#242424" overflow="hidden">
            <Flex
                alignItems='center'
                h="full"
                w="full"
            >
                <Box
                    minW="0"
                    flex="2"
                    h="full"
                >
                    <ChatsView />
                </Box>
                <Box
                    flex="4"
                    h="full"
                    bgColor="red.300"
                >
                    <Outlet />
                </Box>
            </Flex>
        </Box>
    )
}

export default Chats;
