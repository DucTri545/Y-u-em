const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('D:\\Bé Yêu 💕')); // Đường dẫn đến thư mục chứa file

// Route để xử lý yêu cầu đến root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route để lưu hoạt động
app.post('/saveActivity', (req, res) => {
    const { activity, time } = req.body;
    const log = `${activity} - ${time}\n`;
    fs.appendFile('activityLog.txt', log, (err) => {
        if (err) {
            return res.status(500).send('Error saving activity');
        }
        res.send('Activity saved');
    });
});

// Route để lấy lịch sử hoạt động
app.get('/activityLog', (req, res) => {
    fs.readFile('activityLog.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading activity log');
        }
        res.send(data.split('\n').filter(Boolean)); // Trả về danh sách hoạt động
    });
});

// Khởi động server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
