"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import checkOut from "../../../public/svg/checkOut.svg";
import { useState } from "react";
import { CartContext } from "@/components/context";
const cartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [countItem, setCountItem] = useState(1);
  const [subTotal, setSubTota] = useState(0);
  const [rideFee, setRideFee] = useState(30);
  useEffect(() => {
    const total = cart.reduce((pre: any, curr: any) => {
      return pre + curr.subTotal;
    }, 0);
    setSubTota(total);
  }, []);
  return (
    <>
      {/* large screen */}
      <div className="hidden mx-auto max-w-5xl mt-20 px-2 flex-col sm:flex">
        <p className="text-2xl font-bold">items</p>
        {cart.length <= 0 ? (
          <div className="w-full text-xl flex items-center justify-center font-bold text-secondary h-24 ">
            <h3> Cart is epmty 😚 </h3>
          </div>
        ) : (
          <table className="w-full " id="customers">
            <thead>
              <tr className="text-left border-2 border-gray-300 py-3">
                <th className="px-2">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((e: any, index: number) => {
                return (
                  <tr className="border-gray-300 border-2" key={index}>
                    <td className="py-4 px-2 flex flex-col font-bold  text-sm">
                      {e.name}
                      <span className="text-xs font-light">
                        drink:{e.coldItems}
                      </span>
                    </td>
                    <td className="py-4">{e.price}</td>
                    <td className="py-4">{e.quantity} </td>
                    <td className="py-4">{e.subTotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <div className="w-1/3 my-2 mt-20 md:w-1/4">
          <div className="flex justify-between">
            <p>Total</p>
            <p>Rs {subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p>inc/tax</p>
            <p>Rs {rideFee}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>Rs {rideFee + subTotal}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="w-44 bg-secondary py-2 px-2 rounded-md text-white">
              Check Out
            </button>
          </div>
        </div>
      </div>
      {/* large screen */}
      {/* small screen */}
      <div className="flex flex-col sm:hidden">
        <div className="absolute top-0 w-full bg-white h-20 flex justify-between items-center px-5 shadow-md shadow-lightgray">
          <Image
            src={checkOut}
            alt="checkout"
            className="w-4 text-xl"
            onClick={() => console.log()}
          />
          <p className="text-xl font-bold ml-7">Check Out</p>
          <p
            className="text-xl font-bold"
            onClick={() => {
              setCart([]);
              setRideFee(0);
            }}
          >
            clear
          </p>
        </div>
        <div className="flex justify-between items-center border-b-2 border-b-gray-400 h-20 px-2">
          <p className="text-secondary text-sm font-bold">
            please select your delivery address
          </p>
          <button className="bg-secondary text-white py-2 px-3 rounded-md">
            select
          </button>
        </div>
        <div className="mt-12 px-2">
          <p className="text-xl font-bold">items</p>{" "}
          {cart.length <= 0 ? (
            <div className="flex items-center justify-center font-bold text-secondary h-16">
              Cart is empty 🙄
            </div>
          ) : (
            cart.map((e: any, index: number) => {
              return (
                <div
                  className="flex justify-between mt-4 bg-gray-300 py-2 px-2"
                  key={index}
                >
                  <div className="w-1/2 flex flex-col">
                    <p className=" flex flex-col font-bold  text-sm`">
                      {e.name}
                      <span className="text-xs font-light">
                        {" "}
                        drink:{e.coldItems}
                      </span>
                    </p>
                    <div className="">{e.quantity}</div>
                  </div>
                  <div className="w-1/2 flex justify-end items-end ">
                    <p className="text-base">from Rs {subTotal}</p>
                  </div>
                </div>
              );
            })
          )}
          <div className="max-w-md mx-auto my-2 mt-20  ">
            <div className="flex justify-between">
              <p>Total</p>
              <p>Rs {subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>inc/tax</p>
              <p>Rs {cart.length <= 0 ? 0 : rideFee}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>Rs {rideFee + subTotal}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="w-44 bg-secondary py-2 px-2 rounded-md text-white">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cartPage;
