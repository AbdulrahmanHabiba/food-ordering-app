"use client";

import React  from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedComponent from "@/app/_components/AnimatedComponent";

const ThankYouPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <AnimatedComponent>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
                <CheckCircle className="mx-auto text-green-500" size={64} />
                <h1 className="text-3xl font-bold mt-4 text-gray-800">Payment Successful!</h1>
                <p className="text-gray-600 mt-2">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>

                <Link href="/" passHref>
                    <Button className="mt-6 w-full text-lg">Back to Home</Button>
                </Link>
            </div>
            </AnimatedComponent>

        </div>
    );
};

export default ThankYouPage;
