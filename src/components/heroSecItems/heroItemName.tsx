"use client";
 
const ItemList = ({ setItemName }: { setItemName: any }) => {
  const list: string[] = ["burger", "pizza", "soda", "tikka"];
 
  return (
    <section>
      <div className="cursor-pointer bg-gray-400 flex justify-around py-3 ">
        {list.map((e, index) => {
          return (
            <p
              key={index}
              onClick={(e) => setItemName(e.target)}
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
