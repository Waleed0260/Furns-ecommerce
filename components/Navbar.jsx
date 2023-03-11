import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="bg-black h-14 w-screen">
      <ul className="flex flex-row justify-center items-center gap-5 text-white p-4">
        <li className="list-none">Home</li>
        <li  className="list-none">About</li>
        <li  className="list-none">Home Furniture</li>
        <li  className="list-none">Office Furniture</li>
        <li  className="list-none">Hospital Furniture</li>
        <li  className="list-none">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
