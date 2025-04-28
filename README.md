# Food Ordering App 🍕🚀

A complete full-stack **Food Ordering App** built with **Next.js 14** and **TypeScript**.  
The app allows users to customize and order pizzas with different types, sizes, and toppings.  
It offers a smooth user experience with a dynamic cart system, secure payments, and real-time interactions.

Built with:

- **TypeScript** environment for strong typing and better developer experience.
- **Prisma ORM** connected to **PostgreSQL** on Railway for backend data management.
- **Redux Toolkit** for efficient and cached state management.
- **Stripe** for secure payment processing.

## Features

- 🍕 **Pizza Customization** — Select type, size, and additional toppings.
- 🛒 **Cart Management** — Add, remove, and update item quantities using **Redux Toolkit**.
- 🔥 **State Persistence** — Cart data is saved in **LocalStorage** to survive page refreshes.
- ⚡ **Efficient State Management** — Using **Redux Toolkit** with caching to reduce unnecessary API requests.
- 💳 **Stripe Payments** — Secure and easy checkout process.
- 🖌️ **Tailwind CSS** — Fully responsive and modern UI design.
- 🎨 **Framer Motion** — Smooth animations for enhanced UX.
- 🚀 **Lucide-react Icons** — Beautiful icons throughout the app.
- 🔥 **React-Toastify** — Toast notifications for user actions and errors.
- 📝 **Formik + Yup** — Easy form handling and validation.
- 🗖️ **Shadcn UI** — Clean and accessible UI components.
- ⚖️ **ESLint** — Code linting for consistent code quality.

## Tech Stack

| Frontend        | Backend            | Database               | Others               |
| --------------- | ------------------ | ---------------------- | -------------------- |
| Next.js 14      | Next.js API Routes  | PostgreSQL (Railway)    | Stripe Payments      |
| **TypeScript**  | Prisma ORM          | Prisma Client           | React-Toastify       |
| Tailwind CSS    |                     |                        | Lucide-react Icons   |
| Redux Toolkit   |                     |                        | Formik + Yup         |
| Framer Motion   |                     |                        | ESLint               |
| Shadcn UI       |                     |                        |                      |

## Installation

```bash
# Clone the repo
git clone https://github.com/AbdulrahmanHabiba/food-ordering-app.git

# Navigate to the project directory
cd food-ordering-app

# Install dependencies
npm install
# or
yarn install

# Create a .env file and add your environment variables
# (DATABASE_URL, STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHER_KEY, etc.)

# Run the app
npm run dev
# or
yarn dev
```

## Live Demo

🔗 [Live Application](https://food-ordering-app-git-main-abdulrahmanhabibas-projects.vercel.app)

## License

This project is licensed under the **MIT License**.

