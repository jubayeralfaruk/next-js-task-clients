# Next.js E-commerce Application

A modern, responsive e-commerce application built with Next.js 15/16 App Router, featuring product browsing, dual authentication systems, and product management capabilities.

## 🚀 Project Description

This is a full-stack e-commerce application that provides both public product browsing and authenticated product management features. The application implements a dual authentication system with mock authentication as the primary method and NextAuth.js as an optional enhanced system.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15/16 (App Router)
- **Backend API**: Express.js (External API for products)
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: 
  - Primary: Cookie-based Mock Authentication
  - Optional: NextAuth.js (Google OAuth + Credentials)
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Database**: MongoDB (via Express API)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-js-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   GOOGLE_CLIENT_ID=your-google-client-id (optional)
   GOOGLE_CLIENT_SECRET=your-google-client-secret (optional)
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗺️ Route Summary

### Public Routes (No Authentication Required)
- `/` - Landing page with 7 content sections
- `/products` - Items/Lists page with search and filtering
- `/products/[id]` - Individual item details
- `/login` - User authentication page
- `/register` - User registration page
- `/about` - About us page
- `/contact` - Contact page

### Protected Routes (Authentication Required)
- `/add-product` - Add new item form
- `/manage-products` - Product management dashboard
- `/update-product/[id]` - Edit existing product

## � Authentication Flow

### Primary: Mock Authentication
1. **Login Credentials**:
   - Email: `admin@example.com`
   - Password: `password123`

2. **Flow**:
   - User enters credentials on login page
   - System validates against hardcoded credentials
   - On success: Creates secure HTTP-only cookie
   - User redirected to Items/Lists page
   - Cookie persists for 7 days

3. **Route Protection**:
   - Middleware checks for mock auth cookie
   - Unauthenticated users redirected to login
   - Protected routes accessible only with valid cookie

### Optional: NextAuth.js
- **Credentials Login**: Same as mock auth but uses NextAuth session
- **Google OAuth**: Social login integration
- **Session Management**: JWT-based sessions
- **Fallback Protection**: Works when mock auth is not present

## 🎯 Implemented Features

### ✅ Core Features
1. **Landing Page**
   - Exactly 7 content sections (Hero, Categories, New Products, Deals, Features, Testimonials, Newsletter)
   - Navbar with Login and Items/Lists links
   - Footer with site information
   - Fully responsive design

2. **Authentication System**
   - **Primary**: Mock login with hardcoded credentials
   - **Cookie-based**: Secure HTTP-only cookies for session persistence
   - **Route Protection**: Middleware-based protection for private routes
   - **Optional**: NextAuth.js with Google OAuth support

3. **Items/Lists Page**
   - Publicly accessible product browsing
   - Fetches data from Express.js API
   - Search functionality by item name
   - Category-based filtering
   - Responsive card layout
   - Loading and error states

4. **Item Details Page**
   - Dynamic routing with App Router
   - Full item information display
   - Publicly accessible
   - Proper error handling for invalid IDs

5. **Protected Add Item Page**
   - Authentication required (redirects to login if not authenticated)
   - Comprehensive form with validation:
     - Item Name
     - Description
     - Price
     - Image URL
     - Category selection
   - Submits to Express.js API
   - Toast notifications for success/error
   - Redirects to Items/Lists after successful creation

### ✅ Additional Features
- **Dual Authentication Toggle**: Switch between Mock and NextAuth on login page
- **Toast Notifications**: User feedback for all actions
- **Form Validation**: Real-time validation with error messages
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error management throughout
- **Responsive Design**: Mobile-first approach
- **Route Protection**: Middleware-based security
- **Session Persistence**: Cookies maintain login state

## 🔧 API Integration

The application integrates with an Express.js backend API:

- **Base URL**: `https://next-js-task-server-seven.vercel.app`
- **Endpoints**:
  - `GET /products` - Fetch all products
  - `POST /products` - Create new product
  - `GET /products/:id` - Fetch single product

## 🎨 UI/UX Features

- **Dark Theme**: Modern dark theme with gray color scheme
- **DaisyUI Components**: Pre-built UI components
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Loading Spinners**: Visual feedback during operations
- **Form Validation**: Real-time error display
- **Toast Notifications**: Non-intrusive user feedback
- **Hover Effects**: Interactive element feedback

## 🚦 Getting Started Guide

1. **Visit Landing Page**: Start at `/` to see all 7 content sections
2. **Browse Items**: Click "Items / Lists" to see all available products
3. **Search & Filter**: Use search bar and category dropdown
4. **View Details**: Click any item card to see full details
5. **Login**: Click "Login" button and use mock credentials:
   - Email: `admin@example.com`
   - Password: `password123`
6. **Add Items**: Once logged in, use "Add Item" to create new products
7. **Logout**: Use profile dropdown to logout

## 🔐 Test Credentials

### Mock Authentication (Primary)
- **Email**: `admin@example.com`
- **Password**: `password123`

### NextAuth Credentials (Optional)
- Requires Firebase setup for credential validation
- Google OAuth available with proper environment variables

## 📱 Responsive Design

- **Mobile**: < 640px - Stacked layout, hamburger menu
- **Tablet**: 640px - 1024px - 2-column grid, condensed navigation
- **Desktop**: > 1024px - 3-column grid, full navigation

## 🛡️ Security Features

- **HTTP-Only Cookies**: Secure session storage
- **Route Protection**: Middleware-based access control
- **Input Validation**: Form validation and sanitization
- **Error Handling**: Secure error messages without system exposure
- **CSRF Protection**: Built-in Next.js protections

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth configuration
│   │   └── mock-auth/     # Mock authentication endpoints
│   ├── add-product/       # Protected add item page
│   ├── products/          # Public items pages
│   └── login/             # Authentication page
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   └── [various].jsx    # UI components
├── contexts/             # React contexts
│   └── MockAuthContext.js # Mock auth state management
└── lib/                  # Utility functions
    └── auth.js           # Authentication utilities
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support or questions:
- Open an issue in the repository
- Check the documentation above
- Review the code comments for implementation details

---

**Built with ❤️ using Next.js 15/16, Express.js, and modern web technologies**