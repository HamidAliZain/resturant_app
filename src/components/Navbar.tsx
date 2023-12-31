"use client";
import Image from "next/image";
import Cart from "../../public/cart.svg";
import logo from "../../public/logo.png";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { CartContext } from "@/components/context";
import { useContext, useState } from "react";
import LoginButton from "./LoginButoon/Login";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [openLoginBar, setOpenLoginBar] = useState(false);
  const [imgLink, setImgLink] = useState("");
  const { user } = useUser();
   return (
    <header className="relative">
      <nav className="w-full flex justify-between px-6 pt-2  ">
        <Link href="/" className="">
          <Image src={logo} alt="logo" className=" cursor-pointer  w-24 ml-4" />
        </Link>
        <div className="w-1/2 flex justify-end items-center gap-x-6   ">
          <Link href="/cart" className="relative">
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
          </Link>
          {user ? (
            <img
              className="w-12 h-12 rounded-full"
              src={imgLink}
              alt=""
              onClick={() => setOpenLoginBar(!openLoginBar)}
            />
          ) : (
            <CgProfile
              className="text-2xl"
              onClick={() => setOpenLoginBar(!openLoginBar)}
            />
          )}
        </div>
      </nav>
      <LoginButton openLoginBar={openLoginBar} setImgLink={setImgLink} />
    </header>
  );
};

export default Navbar;
