# Take Your Gadgets
Project Live Link: [https://next-js-task-clients.vercel.app/](https://next-js-task-clients.vercel.app/)

Server GitHub Link: [https://github.com/jubayeralfaruk/next-js-task-serve](https://github.com/jubayeralfaruk/next-js-task-serve)

## Project Description
Take Your Gadgets is a modern e-commerce web application built with **Next.js**.  
The platform allows users to browse, search, and view tech products with detailed descriptions.  
It also includes authentication using **Firebase** and social login with Google.

**Key Features:**
- Browse products by category
- Search and filter products
- View product details (images, price, full description)
- Authentication with email/password and Google
- Responsive and modern UI
- Admin/owner can manage products (optional feature)

---

## Setup & Installation

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn
- Firebase account

### Installation Steps

1. Clone the repository:

git clone https://github.com/your-username/take-your-gadgets.git
cd take-your-gadgets

3. Install dependencies:

npm install
# or
yarn install

3. Create a .env file in the root directory and add your Firebase and NextAuth credentials:

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxxxx

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

4. Run the development server:

npm run dev
# or
yarn dev

5. Open your browser and visit:

http://localhost:3000
