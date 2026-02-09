import useAuth from "@/features/auth/hooks/useAuth";
import type { Message } from "../@types";
import { differenceInMinutes } from "date-fns";

export function isNextMessageForCurrentUser(nextMsg: Message) {
    const auth = useAuth();
    if (!auth.user) throw new Error("authentication error");

    return auth.user.id === nextMsg.sender_id
}

export function shouldHaveTale({
    previousMsg,
    nextMsg,
    currentMsg
}: {
    previousMsg?: Message,
    nextMsg?: Message,
    currentMsg: Message
}): boolean {
    if (previousMsg && !nextMsg) {
        return true;
    }
    if (!previousMsg && nextMsg) {
        return !isNextMessageForCurrentUser(nextMsg);
    }

    // حالت ۳: قبلی و بعدی هر دو وجود دارند
    if (previousMsg && nextMsg) {
        const prevTime = new Date(previousMsg.created_at);
        const currTime = new Date(currentMsg.created_at);

        const diff = differenceInMinutes(currTime, prevTime);

        // اگر فاصله زمانی بیشتر از ۳ دقیقه بود → قطع ارتباط، دم لازم نیست
        if (diff >= 3) {
            return true;
        }

        // فاصله کم → این پیام ادامه گروه پیام‌های قبلی‌ست → دم دارد
        return false;
    }

    // حالت غیرممکن ولی برای اطمینان
    return true;
}
