import Image from "next/image";
import AddToCart from "../../../public/svg/cart.svg";

const CartButton = ({
  setPopUp,
  itemObj,
  name,
  price,
  type,
  setItemObj,
}: {
  setPopUp: any;
  itemObj: any;
  name: any;
  price: any;
  type: any;
  setItemObj: any;
}) => {
  return (
    <div className="flex gap-2 justify-between items-center font-bold text-white py-1 text-center pr-2">
      <div
        className="w-32"
        onClick={(e: any) => {
          setPopUp(true);
          itemObj.name = name;
          itemObj.price = price;
          itemObj.type = type;
        }}
      >
        <p className="flex justify-center px-3 gap-2 py-1 bg-secondary cursor-pointer">
          Add <Image src={AddToCart} alt="cart" className="w-5" />
        </p>
      </div>
    </div>
  );
};

export default CartButton;
