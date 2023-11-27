"use client";
import React, { useEffect, useState } from "react";
import ItemList from "./heroItemName";
import FilterdItem from "./filterItems";

const Items = () => {
  let [itemName, setItemName] = useState("");
  
  return (
    <section>
      <ItemList setItemName={setItemName} />
      <FilterdItem itemName={itemName} />
    </section>
  );
};

export default Items;
