import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Card from "./Card";
import OrderMenuItem from "./OrderMenuItem";
import classes from "./OrderMenu.module.css";

const OrderMenu = () => {
  const [menu, setMenu] = useState(() => []);
  useEffect(() => {
    async function getDoc() {
      const querySnapshot = await getDocs(collection(db, "menu"));
      const menuItems = [];
      querySnapshot.forEach((doc) => {
        menuItems.push(doc.data());
      });
      setMenu(menuItems);
    }
    getDoc();
  }, []);

  const menuList = menu.map((item) => (
    <OrderMenuItem key={item.id} item={item} />
  ));

  return (
    <section className={classes.menu}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default OrderMenu;
