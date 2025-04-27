"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import {useAppDispatch} from "@/redux/hooks";
import {addCartItem, removeCartItem, removeItemFromCart} from "@/redux/features/cart/cartSlice";
import {ProductWithRelations} from "@/types/product";
import {Extra, Size} from "@prisma/client";

const ChooseQuantity = ({quantity, item, selectedExtras, selectedSize,}:
                            {quantity: number;
                                selectedExtras: Extra[]; selectedSize: Size;
                                item: ProductWithRelations; }) => {
    const dispatch = useAppDispatch()
    const payload =
    {
        basePrice: item.basePrice,
        id: item.id,
        image: item.image,
        name: item.name,
        extras: selectedExtras,
        size: selectedSize,
    }

    return (
        <div className="flex items-center flex-col gap-2 mt-4 w-full">
            <div className="flex items-center justify-center gap-2">
                <Button
                    variant='outline'
                    onClick={() => dispatch(removeCartItem({ id: item.id }))}
                >-</Button>
                <div>
                    <span className="text-black">{quantity} in cart</span>
                </div>
                <Button
                    variant='outline'
                    onClick={() => dispatch(addCartItem(payload))}
                >+</Button>
            </div>
            <Button
                size='sm'
                onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
            >Remove</Button>
        </div>
    );
};

export default ChooseQuantity;