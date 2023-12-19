"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
const LoginButton = ({
  openLoginBar,
  setImgLink,
}: {
  openLoginBar: any;
  setImgLink: any;
}) => {
  const { user } = useUser();
  let imageOfLogin: any = user?.picture?.toString();
  setImgLink(imageOfLogin);
  return (
    <>
      {!user && (
        <div
          className={
            openLoginBar
              ? "absolute top-20 right-12 w-64   bg-white z-10  flex justify-between"
              : "hidden"
          }
        >
          <Link
            href={"/api/auth/login"}
            className="w-1/2 text-center bg-secondary text-white py-1 hover:bg-white hover:text-black transition-all ease-linear"
          >
            <div className="w-full px-2 transition-all ease-linear ">
              <p className="text-lg">login</p>{" "}
            </div>
          </Link>
          <Link
            href={"/api/auth/login"}
            className="w-1/2 text-center bg-priamry text-white py-1 hover:bg-white hover:text-black transition-all ease-linear"
          >
            <div className="w-full px-2 transition-all ease-linear ">
              <p className="text-lg">create</p>{" "}
            </div>
          </Link>
        </div>
      )}
      {user && (
        <div
          className={
            openLoginBar
              ? "absolute top-20 right-12 w-64   bg-white z-10 "
              : "hidden"
          }
        >
          <img
            src={imageOfLogin}
            alt=""
            width={80}
            height={80}
            className="rounded-full mt-9 mx-auto"
          />

          <div className="text-xl  w-full px-2 hover:bg-gray-300 transition-all ease-linear mt-8">
            <p className="text-lg">{user.name}</p>{" "}
          </div>
          <Link href={"/api/auth/logout"}>
            <div className="w-full px-2 hover:bg-gray-300 transition-all ease-linear ">
              <p className="text-lg">logout</p>{" "}
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default LoginButton;
