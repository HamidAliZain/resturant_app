"use client";
import Image from "next/image";
import pizza from "../../public/pizza.png";
import { useContext, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { CartContext } from "./context";
const PopUp = ({
  popUp,
  setPopUp,
  name,
  price,
  type,
}: {
  popUp: any;
  setPopUp: any;
  name: any;
  price: any;
  type: any;
}) => {
  const [countItem, setCountItem] = useState(1);
  const [coldItems, setColdItems] = useState("");
  const [size, setSize] = useState("");
  price = Number(price);
  const { cart, setCart } = useContext(CartContext);
  const cartItems = {
    name: name,
    price: price,
    quantity: countItem,
    size: size,
    coldItems: coldItems,
    subTotal: price * countItem,
  };
  return (
    <div
      className={
        popUp
          ? "fixed top-0 left-0 backdrop-blur-sm flex items-center w-full h-screen "
          : "hidden"
      }
    >
      {/* small screen pop up opnening here */}
      <div className="w-2/3 py-2 mx-auto flex flex-col bg-white h-auto md:hidden">
        {/* 1st Item */}
        <div className="flex flex-col">
          <div className="pb-1">
            <p className=" mt-4 w-full text-xl font-bold tracking-wide px-2">
              {name}
            </p>
          </div>
          <div className="flex justify-between items-center mt-3 ">
            <p className="text-sm px-2">price </p>
            <p className="text-xs font-bold text-gray-400 px-2">{price}</p>
          </div>
        </div>
        {/* 2nd Item */}
        <div className="border-t-secondary bg-white border-t-2 py-0">
          <p className="bg-gray-400 w-full text-sm py-1 px-2 ">Please Select</p>
          <div className="flex justify-between items-center mt-3 px-2">
            <label className="text-sm" htmlFor="drink">
              Size
            </label>
            <div className="bg-priamry w-16 h-3 text-xs font-bold p-2 rounded-lg flex items-center justify-center text-white">
              choose
            </div>
          </div>
          <div className="mt-2 px-2 gap-3 pl-5 my-0">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="Size"
                value="small"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setSize(e.target.value);
                  }
                }}
              />
              <label htmlFor="coca-cola">small</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value={"medium"}
                name="Size"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setSize(e.target.value);
                  }
                }}
              />
              <label htmlFor="dew">medium</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="Size"
                value="large"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setSize(e.target.value);
                  }
                }}
              />
              <label htmlFor="pakola">Large</label>
            </div>
          </div>
          <div
            className={
              type == "soda"
                ? "hidden"
                : "flex justify-between items-center mt-3 px-2"
            }
          >
            <label className="text-sm" htmlFor="drink">
              Drink
            </label>
            <div className="bg-priamry w-16 h-3 text-xs font-bold p-2 rounded-lg flex items-center justify-center text-white">
              choose
            </div>{" "}
          </div>{" "}
          <div
            className={
              type == "soda" ? "hidden" : "mt-2 pl-5 justify-center gap-3 my-0"
            }
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="drink"
                value="coca-cola"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setColdItems(e.target.value);
                  }
                }}
              />
              <label htmlFor="coca-cola">coca-cola</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value={"dew"}
                name="drink"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setColdItems(e.target.value);
                  }
                }}
              />
              <label htmlFor="dew">dew</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="drink"
                value="pakola"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setColdItems(e.target.value);
                  }
                }}
              />
              <label htmlFor="pakola">pakola</label>
            </div>
          </div>
          <div className="border-t-secondary border-t-2 flex justify-between items-center mt-3 px-2 pt-2">
            <p className="text-sm ">Quantity </p>
            <div className="flex justify-end gap-2 w-1/4 items-center">
              <div
                className="bg-secondary text-white p-3 h-2 cursor-pointer
                 flex jusdtify-center items-center"
                onClick={() => {
                  if (countItem <= 1) {
                    setCountItem(1);
                  } else {
                    setCountItem(countItem - 1);
                  }
                }}
              >
                -
              </div>
              <div className="">{countItem}</div>
              <div
                className="bg-secondary text-white p-3 h-2 flex jusdtify-center 
                items-center cursor-pointer"
                onClick={() => {
                  setCountItem(countItem + 1);
                }}
              >
                +
              </div>
            </div>
          </div>{" "}
          <div className="border-t-priamry border-t-2 flex justify-between items-center mt-4 py-2">
            <p className="text-sm px-2">Total price </p>
            <p className="text-xs font-bold text-gray-400 px-2">
              {countItem <= 0 ? price : price * countItem}
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-2  ">
            <div
              onClick={() => setPopUp(false)}
              className="bg-lightgray py-1 px-2 rounded-md border-lightgray border-2 active:bg-white  active:border-2 transition-all ease-linear"
            >
              cancel
            </div>
            <div
              onClick={() => {
                if (size.length == 0) {
                } else if (coldItems.length == 0) {
                } else {
                  setCart([...cart, cartItems]);
                }
              }}
              className="bg-secondary py-1 px-2 rounded-md text-white border-2 border-secondary active:bg-white active:text-secondary active:border-2 transition-all ease-linear"
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>
      {/* small screen pop up closing here */}
      {/* For large screen pop up closing here */}
      <div className="w-2/3 py-0 mx-auto bg-white h-auto hidden flex-row  rounded-xl md:flex">
        {/* 1st Item */}
        <div className="flex flex-col w-1/2">
          <div className="pb-1">
            <p className=" mt-4 w-full text-xl font-bold tracking-wide px-2">
              {name}
            </p>
          </div>
          <div className="flex justify-between items-center mt-3 ">
            <p className="text-sm px-2">price </p>
            <p className="text-xs font-bold text-gray-400 px-2">{price}</p>
          </div>
          <div className="w-full h-full  flex items-center justify-center  ">
            <Image src={pizza} alt="pizza" className="w-56 h-56 " />{" "}
          </div>{" "}
        </div>
        {/* 2nd Item */}
        <div className="py-3 bg-gray-200 w-1/2 flex flex-col justify-between">
          <div className="w-full py-1 px-2 rounded-lg flex justify-end">
            <ImCross
              onClick={() => setPopUp(false)}
              className="cursor-pointer text-gray-600"
            />
          </div>
          <p className="bg-gray-300 flex rounded-full px-4 py-2 mt-2 text-secondary font-bold mx-2 ">
            Size
          </p>
          <div className={"mt-2 px-2 gap-3 pl-5  my-5"}>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="Size"
                value="small"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setSize(e.target.value);
                  }
                }}
              />
              <label htmlFor="coca-cola">small</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value={"medium"}
                name="Size"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setSize(e.target.value);
                  }
                }}
              />
              <label htmlFor="dew">medium</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="Size"
                value="large"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setSize(e.target.value);
                  }
                }}
              />
              <label htmlFor="pakola">Large</label>
            </div>
          </div>
          <p
            className={
              type == "soda"
                ? "hidden"
                : "bg-gray-300 rounded-full flex px-4 py-2 mt-2 text-secondary font-bold mx-2"
            }
          >
            Drink
          </p>
          <div
            className={
              type == "soda" ? "hidden" : "mt-2 pl-5 justify-center gap-3 my-5"
            }
          >
            <div className={"flex items-center gap-2"}>
              <input
                type="radio"
                name="drink"
                value="coca-cola"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setColdItems(e.target.value);
                  }
                }}
              />
              <label htmlFor="coca-cola">coca-cola</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value={"dew"}
                name="drink"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setColdItems(e.target.value);
                  }
                }}
              />
              <label htmlFor="dew">dew</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="drink"
                value="pakola"
                className="accent-secondary"
                onClick={(e: any) => {
                  if (e.target.checked) {
                    setColdItems(e.target.value);
                  }
                }}
              />
              <label htmlFor="pakola">pakola</label>
            </div>
          </div>
          <div className="border-t-secondary border-t-2 flex justify-between items-center mt-3 px-2 pt-2  flex-row-reverse">
            <div
              onClick={() => {
                if (size.length == 0) {
                } else if (coldItems.length == 0) {
                } else {
                  setCart([...cart, cartItems]);
                }
              }}
              className="bg-secondary text-white font-bold hidden w-auto text-center p-2 gap-2 rounded-full justify-center cursor-pointer md:flex"
            >
              <p className="text-xs">Add to Cart </p>
              <p className="text-xs">
                RS {countItem <= 0 ? price : price * countItem}{" "}
              </p>
            </div>
            <div className="flex gap-2 w-1/4 items-center justify-start">
              <div
                className="bg-secondary text-white cursor-pointer
         flex jusdtify-center items-center p-2.5 h-2.5"
                onClick={() => {
                  if (countItem <= 1) {
                    setCountItem(1);
                  } else {
                    setCountItem(countItem - 1);
                  }
                }}
              >
                -
              </div>
              <div className="">{countItem}</div>
              <div
                className="bg-secondary text-white flex jusdtify-center 
        items-center cursor-pointer p-2.5  h-2.5"
                onClick={() => {
                  setCountItem(countItem + 1);
                }}
              >
                +
              </div>
            </div>
          </div>{" "}
          <div className="border-t-priamry border-t-2 flex justify-between items-center mt-4 py-2 md:hidden">
            <p className="text-sm px-2">Total price </p>
            <p className="text-xs font-bold text-gray-400 px-2">
              {countItem <= 0 ? price : price * countItem}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
