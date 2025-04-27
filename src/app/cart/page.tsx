import React from 'react';
import CartItems from "@/app/cart/_components/cartItems";
import CheckoutForm from "@/app/cart/_components/checkoutForm";

const cartPage = () => {
    return (
        <main>
            <section className="section-gap">
                <div className="container">
                    <h1 className="text-primary text-center font-bold text-4xl italic mb-10">
                        cart
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <CartItems/>
                        <CheckoutForm/>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default cartPage;