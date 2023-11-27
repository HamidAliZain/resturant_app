import Image from "next/image";
import logo from "../../public/logo.png";
import cart from "../../public/svg/addToCart.svg";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full flex justify-between px-6 pt-2  ">
        <div className="w-1/2 ">
          <Image src={logo} alt="logo" />
        </div>
        <div className="w-1/2 flex justify-end items-center gap-x-6  ">
          <Image src={cart} alt="cart" className="w-6"/>
          <CgProfile className="text-3xl " />  
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
