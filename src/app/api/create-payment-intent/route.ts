import {stripe} from "@/lib/stripe";
import {NextResponse} from "next/server";

export const POST = async (req: Request) => {
    const body = await req.json();
    const paymentIntent = await stripe.paymentIntents.create({
        amount: body.amount,
        currency: "USD",
        automatic_payment_methods: { enabled: true },
        metadata : {
            username : body.username,
            phone: body.phone,
            address: body.address
        }
    }) ;
    return NextResponse.json({
        clientSecret : paymentIntent.client_secret
    });
}