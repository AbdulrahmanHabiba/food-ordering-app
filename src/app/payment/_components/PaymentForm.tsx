"use client";

import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { getTotal } from "@/lib/cart";

type Props = {
    userDetails: {
        username: string;
        phone: string;
        address: string;
    };
    onSuccess: () => void;
};

const PaymentForm = ({ userDetails, onSuccess }: Props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const cart = useAppSelector(selectCartItems);
    const totalAmount = getTotal(cart);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                payment_method_data: {
                    billing_details: {
                        name: userDetails.username,
                        phone: userDetails.phone,
                        address: {
                            line1: userDetails.address,
                        },
                    },
                },
                return_url: `${window.location.origin}/thank-you`,
            },
            redirect: "if_required",
        });

        if (error) {
            toast.error("❌ Payment failed. Please try again.");
        } else if (paymentIntent?.status === "succeeded") {
            toast.success("✅ Payment successful!");
            onSuccess();
        }

        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl  mx-auto p-8 bg-white rounded-xl shadow-md space-y-6 border"
        >
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
                <p className="text-sm text-gray-500">Enter your payment details</p>
            </div>

            <PaymentElement />

            <Button
                type="submit"
                disabled={!stripe || !elements || loading}
                className="w-full  "
            >
                {loading ? "Processing..." : `Pay Now $${totalAmount}`}
            </Button>
        </form>
    );
};

export default PaymentForm;
