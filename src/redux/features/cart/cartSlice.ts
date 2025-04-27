    import {createSlice, PayloadAction} from "@reduxjs/toolkit";
    import {RootState} from "@/redux/store";
    import {Extra, Size} from "@prisma/client";

    export type cartItem = {
        name : string ;
        id : string ;
        image : string ;
        basePrice : number ;
        quantity ? : number ;
        size? : Size ;
        extras? : Extra[]
    }
    type cartState = {
        items : cartItem[] ,
    }

    // const cartItemsFromStorage = localStorage.getItem("cartItems")
    //
    // const initialState : cartState = {
    //     items :cartItemsFromStorage ?  JSON.parse(cartItemsFromStorage) : []
    // } ;
    // const initialState: cartState = {
    //     items: [],
    // };
    const initialState: cartState = {
        items: [],
    };

    export const cartSlice = createSlice({
        name : 'cart' ,
        initialState  ,
        reducers : {
            setCartItems: (state, action: PayloadAction<cartItem[]>) => {
                state.items = action.payload;
            },
            // setCartItems: (state, action: PayloadAction<cartItem[]>) => {
            //     console.log("hello from setCartItems")
            //     console.log("payload " + JSON.stringify(action.payload))
            //     state.items =  action.payload
            // },
            addCartItem : (state , action : PayloadAction <cartItem>)=>{
                const existingItem = state.items.find((item)=> item.id === action.payload.id) ;
                if (existingItem) {
                    existingItem.quantity = (existingItem.quantity || 0) + 1 ;
                    existingItem.size = action.payload.size ;
                    existingItem.extras = action.payload.extras
                }
                else {
                    state.items.push({...action.payload , quantity : 1})
                }
            } ,
            removeCartItem : (state , action: PayloadAction<{id : string }>)=>{
                const existingItem = state.items.find((item)=> item.id === action.payload.id) ;
                if (existingItem){
                    if (existingItem.quantity && existingItem.quantity > 1 ){
                        existingItem.quantity -= 1 ;
                    }
                    else {
                        const filteredItems = state.items.filter((item)=> item.id !== action.payload.id) ;
                        state.items = filteredItems
                    }
                }

            } ,
            removeItemFromCart : (state , action: PayloadAction<{id : string }>)=>{
                const filteredItems = state.items.filter((item)=> item.id !== action.payload.id) ;
                state.items = filteredItems
            },
            removeAllItemsFromCart : (state)=>{
                state.items = [] ;
            }
        } ,
    }) ;
    export const {addCartItem , removeCartItem , removeItemFromCart , removeAllItemsFromCart , setCartItems} = cartSlice.actions ;
    export const selectCartItems = (state : RootState) => state.cart.items
    export default cartSlice.reducer