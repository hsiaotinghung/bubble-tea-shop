import Card from "../components/Card";
import Layout from "../layouts/Layout";
const AboutUs = () => {
  return (
    <Layout>
      <Card>
        <h2>🧋About Us</h2>
        <div>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus
          dictum elit ut elementum. Quisque nec dolor porttitor, condimentum
          ipsum vitae, finibus orci. Nunc ac accumsan felis. Nulla mollis ante
          non lorem pellentesque, ut congue turpis accumsan. Maecenas iaculis,
          eros quis scelerisque vehicula, erat ante facilisis lacus, sit amet
          commodo velit metus in urna. Pellentesque tincidunt interdum turpis,
          accumsan tincidunt risus accumsan nec. Aliquam interdum, tellus quis
          sodales feugiat, augue sem molestie tortor, ac suscipit risus dui sed
          erat.
        </p>
        <p>
          Nam rhoncus ante ipsum, a semper ante convallis id. Nullam tincidunt
          sodales accumsan. Praesent ultricies interdum felis, in placerat
          lectus interdum a. Vestibulum euismod sem ut commodo volutpat.
          Phasellus nunc sapien, ultrices ac interdum vitae, ultrices vel sem.
          Nullam quis eros eget sem aliquet fringilla vel et lacus. Nulla
          imperdiet sollicitudin tincidunt. Sed pharetra felis ut varius congue.
          Integer sodales quis turpis vel lacinia. Integer ac imperdiet magna,
          eu venenatis lacus. Donec tincidunt id justo tristique pharetra.
          Nullam consequat eget diam vitae bibendum. Nulla ipsum arcu, porttitor
          dapibus dignissim at, viverra eu leo. Aenean ut arcu rhoncus, faucibus
          elit sit amet, faucibus ligula. Donec eget gravida neque.
        </p>
        <h2>Find Us</h2>
        <div>
          <h3>Address</h3>
          <span>9794 Walker Port, South Caroleview, LA, 09468 </span>
        </div>
        <div>
          <h3>Store Hours</h3>
          <ul>
            <li>Monday: Closed</li>
            <li>Tuesday: 11am - 9pm</li>
            <li>Wednesday: 11am - 9pm</li>
            <li>Thursday: 11am - 9pm</li>
            <li>Friday: 11am - 9pm</li>
            <li>Saturday: 11am - 9pm</li>
            <li>Sunday: 11am - 9pm</li>
          </ul>
        </div>
      </Card>
    </Layout>
  );
};

export default AboutUs;
