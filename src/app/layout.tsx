import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    preload: true,
});


export const metadata: Metadata = {
    title: "Food Ordering App",
    description: "Explore a wide variety of pizzas and meals. Order your favorite food online with ease and have it delivered to your door.",
};
export default async function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body
            className={`${roboto.className} min-h-screen flex flex-col justify-between`}
        >
        <ReduxProvider>
            <Header/>
            {children}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
            <Footer/>
        </ReduxProvider>
        </body>
        </html>
    );
}
