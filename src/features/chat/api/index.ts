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
        "chatId": "777",
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
    }
]
