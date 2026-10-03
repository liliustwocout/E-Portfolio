# 🚀 E-Portfolio — Creative Full-Stack & 3D Interactive Web

<div align="center">

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Django](https://img.shields.io/badge/Django-5.2-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/DRF-3.16-red?style=for-the-badge&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

**A high-performance, futuristic portfolio combining interactive 3D WebGL experiences with a scalable Django REST backend.**

[Tính Năng Nổi Bật](#-tính-năng-nổi-bật) •
[Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng) •
[Cấu Trúc Dự Án](#-cấu-trúc-dự-án) •
[Hướng Dẫn Cài Đặt](#-hướng-dẫn-cài-đặt) •
[API Endpoints](#-backend-api-endpoints) •
[Tác Giả](#-tác-giả)

</div>

---

## 🌟 Tính Năng Nổi Bật

- **🌐 Hiệu Ứng 3D Scroll Reaction (@react-three/fiber & Three.js):**
  - **Lõi Cyber 3D (Holographic Core):** Khung dây đa diện phát sáng neon (*Icosahedron wireframe*), chứa lõi tinh thể ánh tím co giãn theo nhịp thở (*pulse*), cùng 2 vòng quỹ đạo (*torus rings*) xoay đa trục.
  - **Phản hồi theo cuộn trang:** Vị trí, kích thước và góc nhìn của mô hình 3D chuyển động mượt mà (*linear interpolation lerp / damping*) tương ứng với từng phân đoạn khi người dùng cuộn trang.
  - **Hiệu ứng Parallax chuột:** Mô hình 3D và không gian sao vũ trụ nghiêng linh hoạt theo con trỏ chuột.
  - **Trường hạt tinh vân 3D (Cosmic Starfield):** Hơn 1.000 hạt ánh sáng tạo chiều sâu vũ trụ chân thực.
- **✨ Con Trỏ Chuột Hào Quang (Dynamic Mouse Spotlight):** Vùng ánh sáng mềm mại bám theo con trỏ chuột, tự động mở rộng bán kính khi hover vào các nút hoặc thẻ tương tác.
- **📊 Thanh Tiến Trình Cuộn Trang (Scroll Progress Bar):** Thanh gradient phát sáng chạy mượt mà ở mép trên cùng màn hình theo tỷ lệ đọc trang.
- **💎 Phong Cách Thiết Kế Dark Glassmorphism:** Tone màu không gian sâu (`#05070f`), hiệu ứng kính mờ `backdrop-blur-xl`, viền phát sáng neon cyan & tím cùng typography hiện đại (*Space Grotesk*, *Outfit*, *JetBrains Mono*).
- **📱 Floating Navbar Thông Minh:** Menu lơ lửng phong cách pill-shaped, tự động làm mờ khi cuộn, có chỉ báo mục đang xem chuyển động mượt bằng Framer Motion và hỗ trợ responsive di động hoàn chỉnh.
- **💼 Tích Hợp Toàn Diện Backend & Frontend:**
  - Frontend gọi REST API Django để tải danh sách dự án động (`/api/projects/`).
  - Đi kèm bộ dữ liệu dự án fallback giàu chi tiết (bao gồm dự án thực tế **DevShare-Lite**).
  - Bộ lọc danh mục tức thì: *All*, *Full-Stack*, *3D & Creative*, *Backend Systems*.
- **⚡ Dòng Thời Gian Nghề Nghiệp (Career Timeline):** Hiển thị các cột mốc nghề nghiệp với các node phát sáng và thẻ thành tựu chi tiết.
- **📬 Liên Hệ Trực Tiếp:** Thẻ thông tin kính mờ, nút sao chép email 1-chạm (*one-click copy*) kèm thông báo tức thì, cùng form gửi lời nhắn tương tác.

---

## 🛠️ Công Nghệ Sử Dụng

### Frontend
| Công nghệ | Phiên bản | Mục đích |
| :--- | :--- | :--- |
| **React** | `^19.1.1` | Thư viện UI cốt lõi |
| **Three.js** | `^0.180.0` | Thư viện đồ họa không gian 3D WebGL |
| **@react-three/fiber** | `^9.3.0` | React renderer dành cho Three.js |
| **@react-three/drei** | `^10.7.6` | Tiện ích và shaders hỗ trợ Three.js |
| **Framer Motion** | `^12.23.22` | Animation giao diện mượt mà và layout morphing |
| **Tailwind CSS** | `^3.4.17` | Utility-first CSS framework cho giao diện Glassmorphism |
| **Vite** | `^7.1.7` | Công cụ build và máy chủ phát triển cực nhanh |
| **React Icons / Lucide** | Mới nhất | Hệ thống icon vector sắc nét |

### Backend
| Công nghệ | Phiên bản | Mục đích |
| :--- | :--- | :--- |
| **Python** | `3.11+` | Ngôn ngữ lập trình chính |
| **Django** | `5.2.6` | Web framework mạnh mẽ, bảo mật cao |
| **Django REST Framework** | `3.16.1` | Xây dựng RESTful API chuẩn chuẩn OpenAPI |
| **django-cors-headers** | `4.9.0` | Xử lý Cross-Origin Resource Sharing (CORS) |
| **SQLite / PostgreSQL** | Sẵn sàng | Hệ quản trị cơ sở dữ liệu |
| **Whitenoise / Gunicorn** | Mới nhất | Hỗ trợ phục vụ static files và chạy production |

---

## 📂 Cấu Trúc Dự Án

```bash
Portfolio/
├── .gitignore                    # Bộ lọc file tạm, pycache, node_modules
├── README.md                     # Tài liệu hướng dẫn dự án
├── backend/                      # Django REST API Backend
│   ├── manage.py                 # Django management CLI
│   ├── db.sqlite3                # SQLite database (có sẵn dữ liệu mẫu)
│   ├── backend/                  # Cấu hình project Django
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py           # Cấu hình app, CORS, middleware, database
│   │   ├── urls.py               # Root routing
│   │   └── wsgi.py
│   └── api/                      # Django App API
│       ├── admin.py              # Đăng ký model trong Django Admin
│       ├── models.py             # Schema Project (title, description, link)
│       ├── serializers.py        # ModelSerializer chuyển đổi dữ liệu JSON
│       ├── urls.py               # Router cho ViewSets
│       └── views.py              # ProjectViewSet (CRUD API)
│
└── frontend/                     # React + Vite + Three.js Frontend
    ├── index.html                # Entry HTML với Google Fonts chuẩn
    ├── package.json              # Khai báo dependencies frontend
    ├── tailwind.config.js        # Cấu hình màu neon, font, bóng glass
    ├── vite.config.js            # Cấu hình Vite bundler
    └── src/
        ├── main.jsx              # Entry React DOM
        ├── App.jsx               # Tổ hợp toàn bộ layout & canvas 3D
        ├── index.css             # Base styles, scrollbar cyber, glassmorphism
        └── components/
            ├── ScrollCanvas3D.jsx   # Canvas 3D WebGL phản hồi theo scroll & mouse
            ├── ScrollProgressBar.jsx# Thanh tiến trình cuộn đầu trang
            ├── MouseSpotlight.jsx   # Hiệu ứng hào quang bám theo chuột
            ├── Navbar.jsx           # Thanh điều hướng lơ lửng glassmorphism
            ├── Hero.jsx             # Phân đoạn giới thiệu & thống kê nổi
            ├── Skills.jsx           # Phân đoạn kỹ năng theo danh mục
            ├── Projects.jsx         # Thẻ dự án 3D & kết nối API backend
            ├── Experience.jsx       # Dòng thời gian sự nghiệp phát sáng
            ├── Contact.jsx          # Thẻ liên hệ, copy email & form gửi
            └── Footer.jsx           # Chân trang công nghệ & nút Back to top
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu Cầu Môi Trường
- **Node.js**: Phiên bản 20+ hoặc 22+
- **Python**: Phiên bản 3.11+
- **Git**

---

### Bước 1: Clone Repository
```bash
git clone https://github.com/liliustwocout/E-Portfolio.git
cd E-Portfolio
```

---

### Bước 2: Khởi Chạy Backend (Django)

1. **Di chuyển vào thư mục backend:**
   ```bash
   cd backend
   ```

2. **Kích hoạt Virtual Environment (nếu có sẵn) hoặc tạo mới:**
   - *Windows (PowerShell):*
     ```powershell
     ..\.venv\Scripts\activate
     # Hoặc tạo mới: python -m venv .venv; .\.venv\Scripts\activate
     ```
   - *macOS / Linux:*
     ```bash
     source ../.venv/bin/activate
     # Hoặc tạo mới: python3 -m venv .venv; source .venv/bin/activate
     ```

3. **Cài đặt thư viện Python (nếu chưa có):**
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. **Chạy Migration cơ sở dữ liệu:**
   ```bash
   python manage.py migrate
   ```

5. **Khởi động server Django:**
   ```bash
   python manage.py runserver 127.0.0.1:8000
   ```
   > 📍 **Backend API:** [http://127.0.0.1:8000/api/projects/](http://127.0.0.1:8000/api/projects/)  
   > 📍 **Admin Panel:** [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

---

### Bước 3: Khởi Chạy Frontend (React + Vite)

Mở một cửa sổ Terminal mới:

1. **Di chuyển vào thư mục frontend:**
   ```bash
   cd frontend
   ```

2. **Cài đặt gói phụ thuộc:**
   ```bash
   npm install
   ```

3. **Khởi động máy chủ phát triển:**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt:**
   Truy cập [http://localhost:5173/](http://localhost:5173/) để trải nghiệm toàn bộ giao diện 3D!

---

### Bước 4: Build Cho Production (Tùy Chọn)
Để đóng gói bản phát hành frontend tối ưu hóa cao:
```bash
cd frontend
npm run build
```
Thư mục `frontend/dist/` được tạo ra sẵn sàng triển khai lên Vercel, Netlify, Cloudflare Pages hoặc tích hợp cùng Django static files.

---

## 🔌 Backend API Endpoints

Django REST Framework cung cấp sẵn REST API đầy đủ tính năng:

| Phương thức | Endpoint | Mô tả |
| :--- | :--- | :--- |
| `GET` | `/api/projects/` | Lấy danh sách toàn bộ dự án |
| `POST` | `/api/projects/` | Tạo dự án mới (Yêu cầu quyền admin) |
| `GET` | `/api/projects/{id}/` | Xem thông tin chi tiết một dự án |
| `PUT` | `/api/projects/{id}/` | Cập nhật dự án |
| `PATCH` | `/api/projects/{id}/` | Cập nhật một phần dự án |
| `DELETE` | `/api/projects/{id}/` | Xóa dự án |

**Mẫu dữ liệu JSON trả về:**
```json
[
  {
    "id": 1,
    "title": "DevShare-Lite",
    "description": "DevShare Lite là nền tảng chia sẻ kiến thức, hỏi đáp và kết nối cộng đồng IT...",
    "link": "https://github.com/liliusgamer/DevShare-Lite"
  }
]
```

---

## 🎨 Tùy Biến Giao Diện & Nội Dung

- **Thay đổi thông tin cá nhân & liên hệ:** Chỉnh sửa file [frontend/src/components/Contact.jsx](frontend/src/components/Contact.jsx) và [frontend/src/components/Footer.jsx](frontend/src/components/Footer.jsx).
- **Thêm/bớt kỹ năng công nghệ:** Cập nhật danh sách trong [frontend/src/components/Skills.jsx](frontend/src/components/Skills.jsx).
- **Tùy chỉnh vật thể 3D:** Mở [frontend/src/components/ScrollCanvas3D.jsx](frontend/src/components/ScrollCanvas3D.jsx) để thay đổi màu sắc phát sáng (*emissive*), hình học (*geometries*), hoặc tốc độ xoay.

---

## 👤 Tác Giả

**Dat Le**
- **GitHub:** [@liliustwocout](https://github.com/liliustwocout) / [@liliusgamer](https://github.com/liliusgamer)
- **Email:** [liliusgamer@gmail.com](mailto:liliusgamer@gmail.com)
- **Role:** Creative Full-Stack & 3D Interactive Web Engineer

---

## 📝 Giấy Phép (License)

Dự án được phân phối dưới giấy phép [MIT License](LICENSE). Tự do sử dụng, chỉnh sửa và đóng góp cho cộng đồng!