# 🛍️ Exclusive E-commerce

A modern, responsive e-commerce platform built with React and powered by Firebase. Experience seamless shopping with advanced features, elegant design, and robust functionality.

![E-commerce Platform](https://img.shields.io/badge/Platform-E--commerce-blue)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-11.10.0-FFCA28?logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.10-38B2AC?logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)

##Live lin
click here: https://exclusive-stroe-94iprjxnq-nur756islam-gmailcoms-projects.vercel.app/

## 🚀 Features

### 🛒 Shopping Experience
- **Product Catalog**: Browse through categorized products with detailed information
- **Advanced Search**: Find products quickly with intelligent search functionality
- **Shopping Cart**: Add, remove, and modify items with real-time updates
- **Wishlist**: Save favorite products for later purchase
- **Flash Sales**: Limited-time offers with countdown timers
- **Product Reviews**: Read and write product reviews with rating system

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Interactive Components**: Hover effects, smooth transitions, and micro-interactions
- **Image Carousels**: Product image galleries with navigation controls

### 🔐 User Management
- **Authentication**: Secure login/register system with Firebase Auth
- **User Profiles**: Personalized user dashboard and profile management
- **Order History**: Track past purchases and order status
- **Account Settings**: Update personal information and preferences

### 💰 E-commerce Functionality
- **Secure Checkout**: Multi-step checkout process with form validation
- **Payment Integration**: Ready for payment gateway integration
- **Coupon System**: Apply discount codes and promotional offers
- **Order Management**: Complete order processing workflow
- **Inventory Tracking**: Real-time stock management

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and development server
- **Redux Toolkit** - State management solution
- **React Router 7.6.2** - Client-side routing
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library

### Backend & Database
- **Firebase 11.10.0** - Backend-as-a-Service
    - Authentication
    - Firestore Database
    - Cloud Storage
    - Hosting

### UI Components & Libraries
- **React Hook Form** - Form handling and validation
- **React Icons** - Comprehensive icon library
- **React Slick** - Carousel/slider component
- **React Toastify** - Notification system
- **Lucide React** - Beautiful icons
- **Flowbite** - Additional UI components

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NurTheDev/Exclusive-e-commerce.git
   cd Exclusive-e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
    - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Enable Authentication, Firestore, and Storage
    - Copy your Firebase config and create `.env` file:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`


## 📁 Project Structure

```
Exclusive-e-commerce/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── store/             # Redux store configuration
│   ├── services/          # API services
│   ├── styles/            # CSS and styling files
│   └── App.jsx            # Main application component
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md             # Project documentation
```

## 🎯 Key Components

### 🛍️ Shopping Cart
- Responsive cart design for all devices
- Real-time quantity updates
- Remove items functionality
- Total price calculation
- Coupon code application

### 🔍 Product Catalog
- Category-based filtering
- Search functionality
- Product image galleries
- Rating and review system
- Quick view feature

### 👤 User Authentication
- Firebase Auth integration
- Protected routes
- User profile management
- Password reset functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**NurTheDev**
- GitHub: [@NurTheDev](https://github.com/NurTheDev)
- LinkedIn: [Connect with me](https://linkedin.com/in/nurthedev)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Firebase](https://firebase.google.com/) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Heroicons](https://heroicons.com/) - Beautiful icons
- [Unsplash](https://unsplash.com/) - Stock photos

## 📞 Support

If you like this project, please give it a ⭐ on GitHub!

For support, email nurthedev@example.com or join our community discussions.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/NurTheDev">NurTheDev</a></p>
</div>
