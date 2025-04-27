
import React from 'react';
import Link from "@/components/link";
import {Routes} from "@/constants/enums";
import {ShoppingCartIcon} from "lucide-react";
import {useAppSelector} from "@/redux/hooks";
import {selectCartItems} from "@/redux/features/cart/cartSlice";
import {getCartQuantity} from "@/lib/cart";

const CartButton = () => {
    const cart = useAppSelector(selectCartItems);
    const cartQuantity = getCartQuantity(cart)
    return (
        <Link href={`/${Routes.CART}`} className='block relative group'>
      <span className='absolute -top-4 start-4 w-5 h-5 text-sm bg-primary rounded-full text-white text-center'>
         {cartQuantity}
       </span>
            <ShoppingCartIcon />
        </Link>
    );
};

export default CartButton;