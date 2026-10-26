# 🚀 Dự án Phần mềm tiến độ FPT Telecom xây dựng bằng NodeJS - ExpressJS - MongoDB Base

Một nền tảng backend hiện đại được xây dựng bằng **Node.js**, **Express.js** và **MongoDB**, tích hợp sẵn các công nghệ và công cụ cần thiết để phát triển nhanh các ứng dụng web fullstack.

---

## 🧰 Công nghệ sử dụng

### Backend:
- **Node.js** – môi trường chạy JavaScript phía server
- **Express.js** – framework tối giản, hiệu quả
- **MongoDB** – cơ sở dữ liệu NoSQL
- **Mongoose + mongodb driver** – kết nối và thao tác dữ liệu
- **JWT** – xác thực người dùng bằng token
- **Joi** – xác thực dữ liệu đầu vào
- **Socket.IO** – giao tiếp realtime
- **Cloudinary + Multer** – xử lý và upload ảnh
- **Google Calendar API** – đồng bộ sự kiện
- **Brevo API (Sendinblue)** – gửi email tự động
- **Babel** – hỗ trợ cú pháp ES6+ cho Node.js
- **Cross-env** – quản lý biến môi trường

### Frontend (tích hợp sẵn nếu cần mở rộng):
- **React 18**
- **Material UI v7** – giao diện thân thiện
- **Chart.js + react-chartjs-2** – hiển thị biểu đồ
- **FullCalendar** – hiển thị và quản lý lịch làm việc

---

## 📁 Cấu trúc thư mục chính

```
server/
├── config/         # Cấu hình hệ thống (MongoDB, env, CORS, Google API, Cloudinary,...)
├── controllers/    # Xử lý logic cho các route (ngắn gọn, gọi services)
├── middlewares/    # Middleware chung: xác thực JWT, xử lý lỗi,...
├── models/         # Định nghĩa schema Mongoose (Users, Products, Orders,...)
├── providers/      # Cấu hình các nhà cung cấp như mail (Brevo), storage,...
├── routes/         # Định nghĩa API endpoint (RESTful)
├── services/       # Xử lý nghiệp vụ phức tạp (tách biệt với controller)
├── sockets/        # Cấu hình Socket.IO (gửi dữ liệu realtime)
├── utils/          # Các hàm tiện ích dùng chung (mã hóa, format date,...)
├── validations/    # Xác thực đầu vào (dùng Joi hoặc custom)
└── server.js       # Điểm khởi động ứng dụng

```
## 🚀 Cài đặt & Chạy dự án


| Lệnh | Mục đích |
|------|----------|
| `yarn dev` | Chạy ở chế độ phát triển với hot-reload |
| `yarn build` | Biên dịch mã nguồn vào thư mục `build/` |
| `yarn production` | Build và chạy ở chế độ production |
| `yarn lint` | Kiểm tra và chuẩn hóa code theo ESLint |

---


### 1. Tải mã nguồn về

```bash
git clone https://github.com/ahihi102145/F_Backend.git
cd F_web_quanlycongviec
```
### 2.Cài đặt thư viện
```
yarn install
```
### 3.Tạo file .env
```
MONGODB_URI = ''
DATABASE_NAME=''
LOCAL_DEV_APP_HOST=''
LOCAL_DEV_APP_PORT=

AUTHOR =''

WEBSITE_DOMAIN_DEVELOPMENT=''
WEBSITE_DOMAIN_PRODUCTION=''

BREVO_API_KEY ='',
ADMIN_EMAIL_ADDRESS='',
ADMIN_EMAIL_NAME='Admin Vector'

ACCESS_TOKEN_SECRET_SIGNATURE=''
ACCESS_TOKEN_LIFE=''

REFRESH_TOKEN_SECRET_SIGNATURE=''
REFRESH_TOKEN_LIFE=''

CLOUDINARY_CLOUD_NAME =''
CLOUDINARY_API_KEY=''
CLOUDINARY_API_SECRET=''

GOOGLE_CLIENT_ID =''
GOOGLE_CLIENT_SECRET =''
GOOGLE_REDIRECT_URI=''
```
