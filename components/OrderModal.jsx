import React, {useState} from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import { useStore } from '../store';
import { createOrder } from '../lib/orderhandler';
import toast, { Toaster } from "react-hot-toast";


const OrderModal = ({opened, setOpened, PaymentMethod}) => {

  const[FormData, setFormData] = useState({})

  const handleInput = (e)=>{
    setFormData({...FormData, [e.target.name]: e.target.value})
  }

    const CartData = useStore((state) => state.cart);

    const resetCart = useStore((state) => state.resetCart);


    const theme = useMantineTheme();


    const total = () =>
    CartData.items.reduce((a, b) => a + b.quantity * b.price, 0);


    const handleSubmit =async (e)=>{
      e.preventDefault()
      const totalValue = total();
      const id = await createOrder({...FormData, total: totalValue, PaymentMethod})
      toast.success(
        ("Successfully Ordered!.\n\, Your product is placed successfully"),
        {
          duration: 2000,
        }
      );
      resetCart();
    }



  return (
    <>
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={()=> setOpened(null)}
    >
        <form action="" className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
            <input onChange={handleInput} className='w-[100%] p-[0.8rem] rounded-[.4rem] border-2' type="text" name="name" required placeholder='name' />
            <input onChange={handleInput} className='w-[100%] p-[0.8rem] rounded-[.4rem] border-2' type="text" name="phone" required placeholder='Phone number' />
            <textarea onChange={handleInput} className='w-[100%] p-[0.8rem] rounded-[.4rem] border-2' name="address" cols={8} rows={3} placeholder="address"></textarea>
            <b>You will pay <span className='text-[#f97316]'>${total()}</span> on delivery</b>
            <button type="submit" className='bg-[#f97316] text-white rounded-[10px] w-[120px] h-[40px]'>Place order</button>
        </form>
    </Modal>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>

  )
}

export default OrderModal
