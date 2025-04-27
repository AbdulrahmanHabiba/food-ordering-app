"use client";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import {stripePromise} from "@/lib/stripe";
export default function StripeWrapper({ children  , clientSecret}: { children: React.ReactNode ; clientSecret : string}) {
    const options = { clientSecret, appearance: { theme: "stripe" as const} };
    return <Elements stripe={stripePromise} options={options}>
        {children}
    </Elements>;
}
