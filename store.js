import {create} from "zustand"

export const useStore = create(
    (set)=> ({
        cart : {
            items : []
        },
        addItem: (data)=>
        set((state)=>({
            cart : {
                items: [...state.cart.items, data]
            }
        })),

        removeItem: (index)=>
        set((state)=>({
            cart: {
                items: state.cart.items.filter ((_, i)=> i !=index)
            }
        })),
        resetCart: ()=>
        set(()=>({
            cart: {
                items: []
            }
        }))
    })
)
