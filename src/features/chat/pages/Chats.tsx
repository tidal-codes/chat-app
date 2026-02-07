import { Box, Flex } from "@chakra-ui/react";
import ChatsView from "../components/ChatsView";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { listenToMessages } from "@/features/message/api";
import supabase from "@/core/supabase";

const Chats = () => {

    useEffect(() => {
        const channle = listenToMessages((payload) => console.log(payload));

        return () => {
            supabase.removeChannel(channle);
        }
    }, [])

    return (
        <Box w="full" h="100vh" bgColor="#242424">
            <Flex alignItems='center' h="full" w="full">
                <Box flex="2" h="full">
                    <ChatsView />
                </Box>
                <Box flex="4" h="full">
                    <Outlet />
                </Box>
            </Flex>
        </Box>
    )
}

export default Chats;
