import {cartItem} from "@/redux/features/cart/cartSlice";

export const deliveryFee = 5;
export const getCartQuantity = (cart: cartItem[]) => {
    return cart.reduce((acc, item) => acc + item.quantity!, 0)
}
export const getItemQuantity = (id: string, cart: cartItem[]) => {
    return (cart.find((item) => item.id === id)?.quantity || 0);
}
export const getSubTotal = (cart: cartItem[]) => {
    return cart.reduce((acc, item) => {
        const extraPrice = item.extras?.reduce((acc, extra) => acc + (extra.price || 0) , 0 )|| 0
        const sizePrice = item.size?.price || 0
        return acc + (item.basePrice + extraPrice + sizePrice) * (item.quantity!)
    }, 0)
}

export const getTotal = (cart: cartItem[]) => {
    return   Number((getSubTotal(cart) + deliveryFee).toFixed(2)) }
