import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <header>
      <div className=" flex flex-row justify-between bg-white text-black w-screen h-80 p-20">
        <div>
          {/* <Image src={bed} width={60} height={40} /> */}
        </div>
        <div className='flex gap-2'>
            <AiOutlineSearch/>
            <AiOutlineShoppingCart/>
        {/* <span className='h-30 w-30'>{<AiOutlineSearch className="h-30 w-30"/>}</span>
        <span className='h-30 w-30'>{<IoPersonOutline  className="h-30 w-30"/>}</span>
        <span className='h-30 w-30'>{<AiOutlineShoppingCart  className="h-30 w-30"/>}</span> */}
      </div>
      </div>
    </header>
  );
};

export default NavBar;
