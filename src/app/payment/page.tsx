"use client";

import React, {Suspense, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import StripeWrapper from "@/app/payment/StripeWrapper";
import PaymentForm from "./_components/PaymentForm";
import {useAppDispatch} from "@/redux/hooks";
import {removeAllItemsFromCart} from "@/redux/features/cart/cartSlice";
import AnimatedComponent from "@/app/_components/AnimatedComponent";

const PaymentPageContent = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        setClientSecret(searchParams.get("clientSecret") || "");
        setUsername(searchParams.get("username") || "");
        setPhone(searchParams.get("phone") || "");
        setAddress(searchParams.get("address") || "");
    }, [searchParams]);


    const userDetails = {username, phone, address};
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
                    <PaymentForm userDetails={userDetails} onSuccess={handleSuccess}/>
                </AnimatedComponent>
            </StripeWrapper>
    );
};

const PaymentPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentPageContent/>
        </Suspense>
    );
};

export default PaymentPage;