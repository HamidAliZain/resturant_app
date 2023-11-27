import Image from "next/image";
import pizza from "../../../public/pizza.png";
import AddToCart from "../../../public/svg/cart.svg";
import { FaHeart } from "react-icons/fa";

const FilterdItem = ({ itemName }: { itemName: any }) => {
  const items = [
    {
      name: "Pizza Fries",
      price: 420,
      type: "fries",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      name: "Pizza Fajita",
      price: 520,
      type: "pizza",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      name: "Pizza PineApple",
      price: 520,
      type: "pizza",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      name: "Pizza Fajita",
      price: 520,
      type: "pizza",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      name: "Pizza PineApple",
      price: 20,
      type: "pizza",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      name: "soda",
      price: 20,
      type: "soda",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      name: "zinger",
      price: 20,
      type: "burger",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];
  const filterItems = items.filter((e) => {
    if (itemName.context == 0) {
      return e.type == "burger";
    } else {
      return e.type == itemName.textContent;
    }
  });
  console.log(itemName.context == 0);
  if (filterItems.length !== 0) {
    return (
      <div className="grid grid-cols-1 gap-8 py-4 px-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {filterItems.map((e, index) => {
          return (
            <div
              key={index}
              className="w-full flex bg-gray-200 rounded-md p-3 justify-between "
            >
              <Image
                src={pizza}
                alt="pizza"
                className="w-32 h-32 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:h-28 lg:w-28  "
              />

              <div className="w-3/4 pl-4 flex flex-col justify-center space-y-2">
                <p className="text-lg font-bold ">{e.name}</p>
                <div className=" max-w-xs">
                  <p className="text-xs ">{e.desc}</p>
                </div>
                <div className="text-base font-bold bg-priamry py-1 w-40 text-center md:w-40 lg:w-36 ">
                  <p>from Rs {e.price}</p>
                </div>
                <div className="flex gap-2 justify-between items-center font-bold text-white py-1 text-center pr-2">
                  <div className="w-32">
                    <p className="flex justify-center px-3 gap-2 py-1 bg-secondary cursor-pointer">
                      Add <Image src={AddToCart} alt="cart" className="w-5" />
                    </p>
                  </div>
                  <FaHeart className="text-secondary cursor-pointer " />{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full  h-56">
        <p className="font-bold text-xl text-secondary">
          Sorry The item Is not available{" "}
        </p>
      </div>
    );
  }
};
export default FilterdItem;
