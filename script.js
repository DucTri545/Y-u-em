const activities = [
    "Đi ăn với anh hoặc anh mua cho em ăn ❤️",
    "Xem phim",
    "Đi một nơi mà em muốn",
    "Đi chơi xaaa",
    "Gửi anh hình ảnh một món quà mà em thích",
    "Anh yêu em nhiều",
    "Đi ăn ốc",
    "Ăn anh 😘",
    "Để lại một tên bài hát mà em muốn anh đàn cho em nghe",
    "Một món quà handmade được nhận sau 14 ngày kể từ khi đọc câu này hihi",
    "Anh sẽ ôm em khi gặp anh",
    "Anh sẽ hôn em khi mình gặp nhau",
    "500k or làm nails + gội đầu dưỡng sinh",
    "Chở em đi shopping",
    "Đi bơi",
    "Một ngày cùng nhau làm việc tốt",
    "Ting ting ting tài khoản =))",
];

document.getElementById("randomActivityBtn").onclick = function() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const selectedActivity = activities[randomIndex];
    document.getElementById("activityResult").innerText = selectedActivity;
    saveActivity(selectedActivity);
};

function saveActivity(activity) {
    const time = new Date().toISOString();
    console.log(`Hoạt động: ${activity}, Thời gian: ${time}`);

    // Gửi yêu cầu POST tới server
    fetch('/saveActivity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ activity, time })
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Error saving activity');
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
