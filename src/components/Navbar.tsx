"use client";
import Image from "next/image";

import Cart from "../../public/cart.svg";
import logo from "../../public/logo.png";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { CartContext } from "@/components/context";
import { useContext } from "react";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <nav className="w-full flex justify-between px-6 pt-2  ">
        <Link href="/" className="">
          <Image src={logo} alt="logo" className=" cursor-pointer  w-24 ml-4" />
        </Link>
        <div className="w-1/2 flex justify-end items-center gap-x-6   ">
          <Link href="/cart" className="relative">
            {" "}
            <div
              className={
                cart.length <= 0
                  ? "hidden"
                  : "w-6 h-6 bg-secondary text-white  absolute -top-6 flex justify-center items-center rounded-full"
              }
            >
              {cart.length}
            </div>
            <Image src={Cart} alt="cart" className="w-6 " />
          </Link>{" "}
          <CgProfile className="text-3xl " />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
