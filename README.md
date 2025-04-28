# Food Ordering App 🍕🚀

A complete full-stack **Food Ordering App** built with **Next.js 14**.  
The app allows users to customize and order pizzas with different types, sizes, and toppings.  
It offers a smooth user experience with a dynamic cart system, secure payments, and real-time interactions.

## Features

- 🍕 **Pizza Customization** — Select type, size, and additional toppings.
- 🛒 **Cart Management** — Add, remove, and update item quantities using Redux Toolkit.
- 🔥 **State Persistence** — Cart data is saved in **LocalStorage** to survive page refreshes.
- ⚡ **State Management with Redux Toolkit** — Efficient state updates and caching to reduce unnecessary requests.
- 💳 **Stripe Payments** — Secure and easy checkout process.
- 🖌️ **Tailwind CSS** — Fully responsive and modern UI.
- 🎨 **Framer Motion** — Smooth animations for better UX.
- 🚀 **React-Laud** — Enhancing user interactions.
- 🔥 **Hot Toast** — Beautiful notifications for actions and errors.
- 📝 **Formik + Yup** — For handling and validating forms easily.
- 🛢️ **Prisma ORM** — Managing database operations.
- 🗄️ **PostgreSQL on Railway** — Cloud database hosting for scalability.

## Tech Stack

| Frontend        | Backend            | Database                | Others             |
| :-------------: | :----------------: | :---------------------: | :----------------: |
| Next.js 14      | Next.js API Routes  | PostgreSQL (Railway)     | Stripe Payments    |
| Tailwind CSS    | Prisma ORM          | Prisma Client            | Hot Toast          |
| Redux Toolkit   |                     |                          | React-Laud         |
| Framer Motion   |                     |                          | Formik + Yup       |

## Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/food-ordering-app.git

# Navigate to the project directory
cd food-ordering-app

# Install dependencies
npm install

# Create a .env file and add your environment variables
# (Database URL, Stripe Keys, etc.)

# Run the app
npm run dev
