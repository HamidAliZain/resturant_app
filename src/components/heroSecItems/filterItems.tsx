"use client";
import Image from "next/image";
import pizza from "../../../public/pizza.png";
import { useEffect, useState, Suspense } from "react";
import PopUp from "../popUp";
import CartButton from "./cartButton";
import Loading from "@/app/loading";
const dataFetch = async () => {
  const fetchData = await fetch("http://localhost:3000/api/items");
  const data = await fetchData.json();
  return data;
};
const FilterdItem = ({
  itemName,
  allItem,
}: {
  itemName: any;
  allItem: any;
}) => {
  let [popUp, setPopUp] = useState(false);
  const [apiData, setApiData] = useState<any[]>([]);
  let [itemObj, setItemObj] = useState({ name: "", price: "", type: "" });
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch();
      setLoading(true);
      setApiData(data.result.rows);
    };
    fetchData();
  }, []);
  let data = apiData;
  const filterItems = data.filter((e) => {
    return e.type == itemName.textContent;
  });

  let content;
  if (allItem) {
    content = data.map((e, index) => {
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
              <p className="text-sm ">{e.description}</p>
            </div>
            <div className="text-base font-bold bg-priamry py-1 w-40 text-center md:w-40 lg:w-36 ">
              <p>from Rs {e.price}</p>
            </div>
            <CartButton
              setPopUp={setPopUp}
              itemObj={itemObj}
              name={e.name}
              price={e.price}
              type={e.type}
              setItemObj={setItemObj}
            />
          </div>
        </div>
      );
    });
  } else if (true) {
    if (filterItems.length !== 0) {
      content = filterItems.map((e, index) => {
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
                <p className="text-sm ">{e.description}</p>
              </div>
              <div className="text-base font-bold bg-priamry py-1 w-40 text-center md:w-40 lg:w-36 ">
                <p>from Rs {e.price}</p>
              </div>{" "}
              <CartButton
                setPopUp={setPopUp}
                itemObj={itemObj}
                name={e.name}
                price={e.price}
                type={e.type}
                setItemObj={setItemObj}
              />
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="flex justify-center items-center w-full  h-56">
          <p className="font-bold text-xl text-secondary">
            Sorry The item Is not available{" "}
          </p>
        </div>
      );
    }
  }
  return (
    <div className="grid grid-cols-1 gap-8 py-4 px-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {loading ? content : <Loading />}
      <PopUp
        popUp={popUp}
        setPopUp={setPopUp}
        name={itemObj.name}
        price={itemObj.price}
        type={itemObj.type}
      />
    </div>
  );
};
export default FilterdItem;
