import { format } from 'date-fns'
export function getMessageSentTime(timestamp: string) {
    const date = new Date(timestamp);
    return format(date, "HH:mm")
}