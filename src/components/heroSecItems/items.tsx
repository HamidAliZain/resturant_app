"use client";
import React, { useEffect, useState } from "react";
import ItemList from "./heroItemName";
import FilterdItem from "./filterItems";
import PopUp from "../popUp";

const Items = () => {
  let [itemName, setItemName] = useState("");
  let [allItem, setAllItem] = useState(true);
  return (
    <section>
      <ItemList setItemName={setItemName} setAllItem={setAllItem} />
      <FilterdItem itemName={itemName} allItem={allItem} />
    </section>
  );
};

export default Items;
