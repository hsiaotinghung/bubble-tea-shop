import Card from "./Card";
import OrderMenuItem from "./OrderMenuItem";
import classes from "./OrderMenu.module.css";

const DUMMY_MENU = [
  {
    id: "m1",
    name: "Green tea",
    description: "Mauris lacinia mauris vitae quam aliquet",
    price: 3.5,
  },
  {
    id: "m2",
    name: "Black tea",
    description: "Condimentum lorem",
    price: 3.5,
  },
  {
    id: "m3",
    name: "Oolong tea",
    description: "Nulla quis varius risus",
    price: 3.5,
  },
  {
    id: "m4",
    name: "Brown sugar latte",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    price: 5,
  },
];

const OrderMenu = () => {
  const menuList = DUMMY_MENU.map((item) => (
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
