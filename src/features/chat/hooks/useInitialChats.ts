import { useEffect } from "react";
import { useGetConversations } from "./Queries";
import useChatsStore from "../store/chats";

export default function useInitialChats() {
    const { data } = useGetConversations();
    const setChats = useChatsStore(state => state.setChats);

    useEffect(() => {
        setChats(data || []);
    }, [data])
}