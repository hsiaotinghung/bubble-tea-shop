import classes from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
        aliquet interdum mollis.
      </p>
      <p>
        Duis nisl dui, posuere a aliquam et, commodo eget enim. Praesent
        malesuada sem eu ipsum scelerisque consectetur quis vel odio. Aenean a
        aliquet arcu, vitae ultrices urna.
      </p>
    </section>
  );
};

export default OrderSummary;
