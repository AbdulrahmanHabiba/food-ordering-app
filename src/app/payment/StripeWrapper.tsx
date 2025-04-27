"use client";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import {loadStripe} from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY as string);
export default function StripeWrapper({ children  , clientSecret}: { children: React.ReactNode ; clientSecret : string}) {
    const options = { clientSecret, appearance: { theme: "stripe" as const} };
    return <Elements stripe={stripePromise} options={options}>
        {children}
    </Elements>;
}
