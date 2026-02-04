import { useEffect } from "react";
import { useGetChats } from "./Queries";
import useChatsStore from "../store/chats";

export default function useInitialChats() {
    const { data } = useGetChats();
    const setChats = useChatsStore(state => state.setChats);

    useEffect(() => {
        setChats(data || []);
    }, [data])
}