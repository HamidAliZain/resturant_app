"use client";

const ItemList = ({
  setItemName,
  setAllItem,
}: {
  setItemName: any;
  setAllItem: any;
}) => {
  const list: string[] = ["burger", "pizza", "soda", "tikka",];

  return (
    <section>
      <div className="cursor-pointer bg-gray-400 flex justify-around py-3 ">
        {list.map((e, index) => {
          return (
            <p
              key={index}
              onClick={(e) => {
                setAllItem(false);
                setItemName(e.target);
              }}
            >
              {e}
            </p>
          );
        })}
      </div>
      <div></div>
    </section>
  );
};

export default ItemList;
