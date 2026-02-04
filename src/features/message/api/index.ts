import type { Message } from "../@types";

export function getMessages(chatId: string) {
    return new Promise<Message[]>((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}

const data = [
    {
        id: 1,
        conversation_id: 777,
        sender_id: 10,
        content: "سلام خوبی؟",
        created_at: "2025-02-03T14:01:12Z",
        delivered_at: "2025-02-03T14:01:13Z",
        read_at: "2025-02-03T14:01:20Z"
    },
    {
        id: 2,
        conversation_id: 777,
        sender_id: 25,
        content: "سلام، خوبم تو چطوری؟",
        created_at: "2025-02-03T14:01:55Z",
        delivered_at: "2025-02-03T14:01:55Z",
        read_at: "2025-02-03T14:02:02Z"
    },
    {
        id: 3,
        conversation_id: 777,
        sender_id: 10,
        content: "منم خوبم، رسیدی خونه؟",
        created_at: "2025-02-03T14:02:12Z",
        delivered_at: "2025-02-03T14:02:12Z",
        read_at: "2025-02-03T14:02:30Z"
    },
    {
        id: 4,
        conversation_id: 777,
        sender_id: 25,
        content: "آره الان رسیدم. تو چی کار می‌کنی؟",
        created_at: "2025-02-03T14:02:59Z",
        delivered_at: "2025-02-03T14:02:59Z",
        read_at: "2025-02-03T14:03:15Z"
    },
    {
        id: 5,
        conversation_id: 777,
        sender_id: 10,
        content: "دارم روی پروژه کار می‌کنم.",
        created_at: "2025-02-03T14:03:40Z",
        delivered_at: "2025-02-03T14:03:41Z",
        read_at: "2025-02-03T14:03:55Z"
    },
    {
        id: 6,
        conversation_id: 777,
        sender_id: 25,
        content: "همون پروژه‌ای که دیروز گفتی؟",
        created_at: "2025-02-03T14:04:20Z",
        delivered_at: "2025-02-03T14:04:20Z",
        read_at: "2025-02-03T14:04:34Z"
    },
    {
        id: 7,
        conversation_id: 777,
        sender_id: 10,
        content: "آره، یکم پیچیده شده.",
        created_at: "2025-02-03T14:04:50Z",
        delivered_at: "2025-02-03T14:04:50Z",
        read_at: "2025-02-03T14:05:01Z"
    },
    {
        id: 8,
        conversation_id: 777,
        sender_id: 25,
        content: "خب بفرست ببینم شاید بتونم کمک کنم.",
        created_at: "2025-02-03T14:05:22Z",
        delivered_at: "2025-02-03T14:05:23Z",
        read_at: "2025-02-03T14:05:45Z"
    },
    {
        id: 9,
        conversation_id: 777,
        sender_id: 10,
        content: "باشه الان اسکرین می‌گیرم.",
        created_at: "2025-02-03T14:05:58Z",
        delivered_at: "2025-02-03T14:05:58Z",
        read_at: "2025-02-03T14:06:10Z"
    },
    {
        id: 10,
        conversation_id: 777,
        sender_id: 25,
        content: "راستی فردا میای بیرون؟",
        created_at: "2025-02-03T14:06:45Z",
        delivered_at: "2025-02-03T14:06:45Z",
        read_at: "2025-02-03T14:06:59Z"
    },
    {
        id: 11,
        conversation_id: 777,
        sender_id: 10,
        content: "فکر کنم بتونم، ساعت چند؟",
        created_at: "2025-02-03T14:07:12Z",
        delivered_at: "2025-02-03T14:07:12Z",
        read_at: "2025-02-03T14:07:28Z"
    },
    {
        id: 12,
        conversation_id: 777,
        sender_id: 25,
        content: "حدود ۶ خوبه؟",
        created_at: "2025-02-03T14:07:50Z",
        delivered_at: "2025-02-03T14:07:50Z",
        read_at: "2025-02-03T14:08:01Z"
    },
    {
        id: 13,
        conversation_id: 777,
        sender_id: 10,
        content: "اوکی، هماهنگ شد.",
        created_at: "2025-02-03T14:08:22Z",
        delivered_at: "2025-02-03T14:08:23Z",
        read_at: "2025-02-03T14:08:33Z"
    },
    {
        id: 14,
        conversation_id: 777,
        sender_id: 25,
        content: "باشه بعداً دقیق خبر میدم.",
        created_at: "2025-02-03T14:09:01Z",
        delivered_at: "2025-02-03T14:09:02Z",
        read_at: "2025-02-03T14:09:20Z"
    },
    {
        id: 15,
        conversation_id: 777,
        sender_id: 10,
        content: "اوکی من هستم.",
        created_at: "2025-02-03T14:09:40Z",
        delivered_at: "2025-02-03T14:09:40Z",
        read_at: "2025-02-03T14:09:55Z"
    },
    {
        id: 16,
        conversation_id: 777,
        sender_id: 25,
        content: "پیامت دیر رسید، گوشیم هنگ کرده بود.",
        created_at: "2025-02-03T14:10:12Z",
        delivered_at: "2025-02-03T14:10:13Z",
        read_at: "2025-02-03T14:10:30Z"
    },
    {
        id: 17,
        conversation_id: 777,
        sender_id: 10,
        content: "مشکلی نیست، الان دیدم.",
        created_at: "2025-02-03T14:10:48Z",
        delivered_at: "2025-02-03T14:10:48Z",
        read_at: "2025-02-03T14:11:04Z"
    },
    {
        id: 18,
        conversation_id: 777,
        sender_id: 25,
        content: "اون فایل رو گرفتی؟",
        created_at: "2025-02-03T14:11:30Z",
        delivered_at: "2025-02-03T14:11:31Z",
        read_at: "2025-02-03T14:11:50Z"
    },
    {
        id: 19,
        conversation_id: 777,
        sender_id: 10,
        content: "آره دانلود شد، شب تستش می‌کنم.",
        created_at: "2025-02-03T14:12:12Z",
        delivered_at: "2025-02-03T14:12:12Z",
        read_at: "2025-02-03T14:12:33Z"
    },
    {
        id: 20,
        conversation_id: 777,
        sender_id: 25,
        content: "محشره، هر مشکلی بود بفرست.",
        created_at: "2025-02-03T14:12:55Z",
        delivered_at: "2025-02-03T14:12:55Z",
        read_at: null
    }
]
