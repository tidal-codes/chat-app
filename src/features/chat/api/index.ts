export async function getUserChats(): Promise<any> {
    // Implementation to fetch user chats from the backend
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(JSON.stringify(data)));
    }, 2000);
  });
}


const data = [
    {
        "chatId": "c1",
        "user": {
            "id": "u101",
            "username": "ali_dev",
            "fullName": "Ali Rezaei",
            "avatar": "https://i.pravatar.cc/150?u=101",
            "isOnline": true
        },
        "lastMessage": {
            "id": "m9001",
            "text": "باشه الان میام.",
            "sentByMe": false,
            "createdAt": "2026-02-03T09:12:00Z"
        },
        "unreadCount": 2
    },
    {
        "chatId": "c2",
        "user": {
            "id": "u102",
            "username": "sara_js",
            "fullName": "Sara Mohammadi",
            "avatar": "https://i.pravatar.cc/150?u=102",
            "isOnline": false
        },
        "lastMessage": {
            "id": "m9002",
            "text": "مرسی که فرستادی.",
            "sentByMe": true,
            "createdAt": "2026-02-03T08:45:00Z"
        },
        "unreadCount": 0
    },
    {
        "chatId": "c3",
        "user": {
            "id": "u103",
            "username": "mohsen_87",
            "fullName": "Mohsen Kiani",
            "avatar": "https://i.pravatar.cc/150?u=103",
            "isOnline": true
        },
        "lastMessage": {
            "id": "m9003",
            "text": "باشه فردا خبر میدم.",
            "sentByMe": false,
            "createdAt": "2026-02-03T07:22:00Z"
        },
        "unreadCount": 5
    },
    {
        "chatId": "c4",
        "user": {
            "id": "u104",
            "username": "nima.codes",
            "fullName": "Nima Rad",
            "avatar": "https://i.pravatar.cc/150?u=104",
            "isOnline": false
        },
        "lastMessage": {
            "id": "m9004",
            "text": "دمت گرم.",
            "sentByMe": true,
            "createdAt": "2026-02-03T06:11:00Z"
        },
        "unreadCount": 0
    },
    {
        "chatId": "c5",
        "user": {
            "id": "u105",
            "username": "ruby_gh",
            "fullName": "Ruby Ghasemi",
            "avatar": "https://i.pravatar.cc/150?u=105",
            "isOnline": true
        },
        "lastMessage": {
            "id": "m9005",
            "text": "کجایی؟",
            "sentByMe": false,
            "createdAt": "2026-02-03T05:58:00Z"
        },
        "unreadCount": 1
    },
    {
        "chatId": "c6",
        "user": {
            "id": "u106",
            "username": "hamed_ui",
            "fullName": "Hamed Karimi",
            "avatar": "https://i.pravatar.cc/150?u=106",
            "isOnline": false
        },
        "lastMessage": {
            "id": "m9006",
            "text": "فایل رو گرفتی؟",
            "sentByMe": true,
            "createdAt": "2026-02-03T05:40:00Z"
        },
        "unreadCount": 0
    },
    {
        "chatId": "c7",
        "user": {
            "id": "u107",
            "username": "maya_art",
            "fullName": "Maya Farhadi",
            "avatar": "https://i.pravatar.cc/150?u=107",
            "isOnline": false
        },
        "lastMessage": {
            "id": "m9007",
            "text": "فعلاً سرم شلوغه.",
            "sentByMe": false,
            "createdAt": "2026-02-02T23:10:00Z"
        },
        "unreadCount": 3
    },
    {
        "chatId": "c8",
        "user": {
            "id": "u108",
            "username": "omid.react",
            "fullName": "Omid Zarei",
            "avatar": "https://i.pravatar.cc/150?u=108",
            "isOnline": true
        },
        "lastMessage": {
            "id": "m9008",
            "text": "بریم برای فردا.",
            "sentByMe": true,
            "createdAt": "2026-02-02T20:33:00Z"
        },
        "unreadCount": 0
    },
    {
        "chatId": "c9",
        "user": {
            "id": "u109",
            "username": "shayan_tech",
            "fullName": "Shayan Fallah",
            "avatar": "https://i.pravatar.cc/150?u=109",
            "isOnline": false
        },
        "lastMessage": {
            "id": "m9009",
            "text": "آره انجام شد.",
            "sentByMe": false,
            "createdAt": "2026-02-02T18:00:00Z"
        },
        "unreadCount": 0
    },
    {
        "chatId": "c10",
        "user": {
            "id": "u110",
            "username": "tara_dev",
            "fullName": "Tara Motevali",
            "avatar": "https://i.pravatar.cc/150?u=110",
            "isOnline": true
        },
        "lastMessage": {
            "id": "m9010",
            "text": "باشه فردا صحبت می‌کنیم.",
            "sentByMe": false,
            "createdAt": "2026-02-02T15:22:00Z"
        },
        "unreadCount": 4
    }
]
