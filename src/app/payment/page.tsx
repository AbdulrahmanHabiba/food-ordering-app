"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import StripeWrapper from "@/app/payment/StripeWrapper";
import PaymentForm from "./_components/PaymentForm";
import {useAppDispatch} from "@/redux/hooks";
import {removeAllItemsFromCart} from "@/redux/features/cart/cartSlice";
import AnimatedComponent from "@/app/_components/AnimatedComponent";

const PaymentPage = () => {
    const searchParams = useSearchParams();

    const clientSecret = searchParams.get("clientSecret");
    const username = searchParams.get("username") || "";
    const phone = searchParams.get("phone") || "";
    const address = searchParams.get("address") || "";

    const userDetails = { username, phone, address };
    const dispatch = useAppDispatch();

    const handleSuccess = () => {
        dispatch(removeAllItemsFromCart())
        localStorage.removeItem("cartItems");
        window.location.href = "/thank-you";
    };

    if (!clientSecret) {
        return (
            <div className="text-center py-10 text-red-500 font-semibold">
                Invalid or incomplete payment request.
            </div>
        );
    }

    return (
        <StripeWrapper clientSecret={clientSecret}>
            <AnimatedComponent>
            <PaymentForm userDetails={userDetails} onSuccess={handleSuccess} />
            </AnimatedComponent>
        </StripeWrapper>
    );
};

export default PaymentPage;
