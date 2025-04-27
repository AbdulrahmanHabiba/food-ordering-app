"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as stripe from "stripe";
import { getTotal } from "@/lib/cart";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import AnimatedComponent from "@/app/_components/AnimatedComponent";

const CheckoutForm = () => {
    const router = useRouter();
    const cart = useAppSelector(selectCartItems);
    const [loading, setLoading] = useState(false);

    const initialValues = {
        username: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string().required("Name is required"),
        phone: Yup.string().required("Phone is required"),
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
        postalCode: Yup.string().required("Postal code is required"),
    });

    const handleSubmit = async (values: typeof initialValues) => {
        const { username, phone, address } = values;

        setLoading(true);

        try {
            const res = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: Math.floor(getTotal(cart) * 100) ,
                    username,
                    phone,
                    address,
                }),
            });

            const { clientSecret } = await res.json();

            toast.success("Form submitted successfully!");

            router.push(`/payment?clientSecret=${clientSecret}&username=${username}&phone=${phone}&address=${address}`);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong, please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        cart && cart.length > 0 && (
            <AnimatedComponent>
            <div
                className="grid gap-6 bg-gray-100 rounded-md p-4"
            >
                <h2 className="text-2xl text-black font-semibold">Checkout</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="grid gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="username" className="text-accent">Name</Label>
                                    <Field as={Input} id="username" name="username" placeholder="Enter your name" />
                                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="phone" className="text-accent">Phone</Label>
                                    <Field as={Input} id="phone" name="phone" placeholder="Enter your phone" />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                </div>
                            </div>

                            <div className="grid gap-1">
                                <Label htmlFor="address" className="text-accent">Street Address</Label>
                                <Field as={Textarea} id="address" name="address" placeholder="Enter your address" className="resize-none" />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="grid gap-1">
                                    <Label htmlFor="postalCode" className="text-accent">Postal Code</Label>
                                    <Field as={Input} id="postalCode" name="postalCode" placeholder="Enter postal code" />
                                    <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="grid gap-1">
                                    <Label htmlFor="city" className="text-accent">City</Label>
                                    <Field as={Input} id="city" name="city" placeholder="Enter your city" />
                                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="grid gap-1">
                                    <Label htmlFor="country" className="text-accent">Country</Label>
                                    <Field as={Input} id="country" name="country" placeholder="Enter your country" />
                                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                                </div>
                            </div>

                            <Button type="submit" disabled={loading || !stripe || isSubmitting}>
                                {loading ? "Processing..." : `Pay ${formatCurrency(getTotal(cart))}`}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
            </AnimatedComponent>
        )
    );
};

export default CheckoutForm;
