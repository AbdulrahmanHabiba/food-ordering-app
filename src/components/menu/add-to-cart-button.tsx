'use client';
import React, {useState} from 'react';
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import PickSize from "@/components/menu/PickSize";
import Extras from "@/components/menu/Extras";
import {ProductWithRelations} from "@/types/product";
import {$Enums, Extra, Size} from "@prisma/client";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {addCartItem, selectCartItems} from "@/redux/features/cart/cartSlice";
import {formatCurrency} from "@/lib/formatters";
import {getItemQuantity} from "@/lib/cart";
import ChooseQuantity from "@/components/menu/ChooseQuantity";
import ProductSizes = $Enums.ProductSizes;


const AddToCartButton = ({item}: { item: ProductWithRelations }) => {

    const cart = useAppSelector(selectCartItems)
    const itemQuantity = getItemQuantity(item.id, cart)
    const dispatch = useAppDispatch()
    const defaultSize = cart.find((e) => e.id === item.id)?.size ||
        item.sizes.find((size) => size.name === ProductSizes.SMALL)
    const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!)

    const defaultExtras = cart.find((e) => e.id === item.id)?.extras || [];
    const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtras)

    let totalPrice = item.basePrice;
    if (selectedSize) {
        totalPrice += selectedSize.price
    }
    if (selectedExtras.length > 0) {
        for (const extra of selectedExtras) {
            totalPrice += extra.price
        }
    }

    const handleAddToCart = () => {
        const cartItem = {
            name: item.name,
            id: item.id,
            image: item.image,
            basePrice: item.basePrice,
            size: selectedSize,
            extras: selectedExtras,
            quantity: 1
        }
        dispatch(addCartItem(cartItem))
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    type='button'
                    size='lg'
                    className='mt-4 text-white rounded-full !px-8'
                >
                    <span>Add To Cart</span>
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] max-h-[80vh] overflow-y-auto'>
                <DialogHeader className='flex items-center'>
                    <Image src={item.image} alt={item.name || "Product image"} width={200} height={200}/>
                    <DialogTitle>{item.name}</DialogTitle>
                    <DialogDescription className='text-center'>
                        {item.description}
                    </DialogDescription>
                </DialogHeader>
                <div className='space-y-10'>
                    {item.sizes.length > 0 && <div className='space-y-4 text-center'>
                        <Label htmlFor='pick-size' className="block text-center">Pick your size</Label>
                        <PickSize item={item} sizes={item.sizes} selectedSize={selectedSize}
                                  setSelectedSize={setSelectedSize}/>
                    </div>}
                    {item.extras.length > 0 && <div className='space-y-4 text-center'>
                        <Label htmlFor='add-extras' className="block text-center">Any extras?</Label>
                        <Extras extras={item.extras} selectedExtras={selectedExtras}
                                setSelectedExtras={setSelectedExtras}/>
                    </div>}

                </div>
                <DialogFooter>
                    {itemQuantity === 0 ? (
                        <Button type="submit" className="w-full h-10 curser-pointer"
                                onClick={handleAddToCart}
                        >
                            Add To Cart {formatCurrency(totalPrice)}
                        </Button>
                    ) : (
                        <ChooseQuantity quantity={itemQuantity}
                                        item={item}
                                        selectedSize={selectedSize}
                                        selectedExtras={selectedExtras}/>
                    )}

                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddToCartButton;
