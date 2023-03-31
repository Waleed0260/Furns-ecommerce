import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import { useStore } from '../store';



const OrderModal = ({opened, setOpened, PaymentMethod}) => {
    const CartData = useStore((state) => state.cart);

    const theme = useMantineTheme();


    const total = () =>
    CartData.items.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
    //   onClose={()=> setOpened(null)}
    >
        <form action="" className='flex flex-col gap-4 items-center'>
            <input className='w-[100%] p-[0.8rem] rounded-[.4rem] border-2' type="text" name="name" required placeholder='name' />
            <input className='w-[100%] p-[0.8rem] rounded-[.4rem] border-2' type="text" name="Phone" required placeholder='Phone number' />
            <textarea className='w-[100%] p-[0.8rem] rounded-[.4rem] border-2' name="address" cols={8} rows={3} placeholder="address"></textarea>
            <b>You will pay <span className='text-[#f97316]'>${total()}</span> on delivery</b>
            <button type="submit" className='bg-[#f97316] text-white rounded-[10px] w-[120px] h-[40px]'>Place holder</button>
        </form>
    </Modal>
  )
}

export default OrderModal
