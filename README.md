# FPT Web - Full-stack Project

Dự án hợp nhất Backend (Node.js + Express + MongoDB) và Frontend (React + Vite + Material UI).

---

## 📁 Cấu trúc thư mục (Monorepo)

```text
Fpt_web/
├── backend/                  # Mã nguồn Backend (Express.js, MongoDB, Babel)
│   ├── src/
│   │   ├── config/           # Cấu hình MongoDB, CORS, Environment
│   │   ├── controllers/      # Điều hướng xử lý request
│   │   ├── models/           # Định nghĩa MongoDB schema/model
│   │   ├── routes/           # Định nghĩa API routes (v1, v2, ...)
│   │   ├── services/         # Business logic
│   │   └── server.js         # Entry point backend (cổng mặc định: 8017)
│   ├── .env.example          # Mẫu biến môi trường backend
│   └── package.json
│
├── frontend/                 # Mã nguồn Frontend (React 18, Vite, Material UI)
│   ├── src/
│   │   ├── components/       # Các component dùng chung (AppBar, ModeSelect, ...)
│   │   ├── pages/            # Các trang giao diện (Boards, Users, ...)
│   │   ├── redux/            # Quản lý state Redux
│   │   ├── utitls/           # Constants (API_ROOT: http://localhost:8017), Sorts
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── package.json              # Quản lý Workspaces cho toàn bộ dự án
├── .gitignore                # Gitignore chung cho cả frontend & backend
└── README.md
```

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

### 1. Yêu cầu hệ thống
- **Node.js**: phiên bản `>= 18.x`
- **npm**: phiên bản `>= 9.x`

### 2. Cài đặt toàn bộ thư viện (Dependencies)
Chỉ cần chạy lệnh sau tại thư mục gốc:

```bash
npm install
```
*(Lệnh này tự động cài đặt dependencies cho cả root, backend và frontend thông qua npm workspaces).*

### 3. Cấu hình biến môi trường
Tạo file `.env` trong thư mục `backend/` dựa trên file mẫu `.env.example`:

```bash
cp backend/.env.example backend/.env
```

Cập nhật thông tin kết nối MongoDB và PORT trong `backend/.env` nếu cần.

### 4. Khởi chạy dự án

#### Chạy đồng thời cả Backend và Frontend:
```bash
npm run dev
```
- **Backend**: Chạy tại `http://localhost:8017`
- **Frontend**: Chạy tại cổng Vite mặc định (thường là `http://localhost:5173`)

#### Hoặc chạy riêng lẻ từng phần:
```bash
# Chỉ chạy Backend
npm run dev:backend

# Chỉ chạy Frontend
npm run dev:frontend
```

---

## 🛠️ Các lệnh Build & Kiểm tra mã (Scripts)

| Lệnh | Chức năng |
| :--- | :--- |
| `npm run dev` | Chạy song song cả Backend và Frontend ở chế độ dev |
| `npm run dev:backend` | Chỉ chạy Backend với `nodemon` |
| `npm run dev:frontend` | Chỉ chạy Frontend với `vite` |
| `npm run build` | Build cả Backend (Babel) và Frontend (Vite) |
| `npm run build:backend` | Build code backend ra thư mục `backend/build` |
| `npm run build:frontend` | Build code frontend ra thư mục `frontend/dist` |
| `npm run lint` | Chạy eslint kiểm tra code cho cả hai bên |
