import {create} from "zustand"

export const useStore = create(
    (set)=> ({
        cart : {
            items : [],
            totalPrice: 0
        },
        addItem: (data)=> set((state)=>({
            cart : {
                items: [...state.cart.items, data],
                totalPrice: state.cart.totalPrice + data.price
            }
        })),
        removeItem: (index)=> set((state)=>({
            cart: {
                items: state.cart.items.filter ((_, i)=> i !=index),
                totalPrice: state.cart.totalPrice - state.cart.items[index].price
            }
        })),
        resetCart: ()=> set(()=>({
            cart: {
                items: [],
                totalPrice: 0
            }
        }))
    })
)
