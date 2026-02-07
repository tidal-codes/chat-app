import supabase from "@/core/supabase";
import type { Message, SendMessageParams } from "../@types";

export async function getMessages(chatId: string): Promise<Message[]> {
    const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", chatId);

    if (error) {
        console.log(error);
        throw new Error(error.message)
    }
    return data as Message[]
}

export async function sendMessage(messageParams: SendMessageParams) {
    const { data, error } = await supabase
        .from("messages")
        .insert({
            conversation_id: messageParams.conversation_id,
            sender_id: messageParams.sender_id,
            text: messageParams.text,
        })
        .select()
        .single();

    if (error) throw error
    return data;
}

export function listenToMessages(callback: (payload: any) => void) {
    const channel = supabase
        .channel("messages_changes")
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "messages",
            },
            (payload) => {
                callback(payload)
            }
        )
        .subscribe()


    return channel
}
