import { useState } from "react";
import Layout from "../components/layout/Layout";
import Button from "../components/button/Button";
import classes from "./Home.module.css";

const Home = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <Layout>
      <h1>Hello, I am Home page</h1>
      <br />
      <br />
      <h3 style={{ marginBottom: "0.5rem" }}>COUNT : {count}</h3>
      <button className={classes.incAndDecBtn} onClick={increment}>
        Increment
      </button>
      <button className={classes.incAndDecBtn} onClick={decrement}>
        Decrement
      </button>

      <br />
      <p className={classes.homePara}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam
        inventore molestias distinctio impedit facere. Incidunt dolorem est
        pariatur, sit corrupti error. Aspernatur soluta nostrum cupiditate
        praesentium animi at illo maxime eum consequatur velit iure ducimus
        delectus ipsum, quis modi debitis dolorum dolore, similique quaerat
        atque obcaecati, quia sequi beatae tenetur? Porro ab ducimus praesentium
        tempore? Suscipit facere saepe consequatur dignissimos at animi velit,
        eligendi eveniet adipisci cumque fugiat voluptatem officiis? Debitis
        maiores, exercitationem inventore suscipit iure corrupti enim. Atque
        veritatis consequuntur aliquid modi dicta impedit at ex culpa? Ducimus
        sunt veniam ut officia natus ipsa magnam unde dignissimos optio illo
        quia maiores ex nulla quae sit animi quaerat architecto, nostrum quas.
        A, enim ea? Possimus totam dolor eligendi ex quo quia nesciunt
        doloremque eaque, quam consequuntur fugiat excepturi veritatis, aliquam
        officia cum illo neque dolorem, optio incidunt molestias saepe? Saepe
        omnis placeat adipisci commodi repellat quidem molestias suscipit itaque
        alias voluptate magnam dolorem porro, quis tempora! Vitae mollitia
        provident numquam minus accusantium, fugiat iure? Quam animi ex veniam
        nobis magnam adipisci harum itaque labore cum nisi officia dicta
        repellat exercitationem nesciunt dolor minima iure perferendis,
        molestiae magni modi sapiente id soluta. Cum pariatur quidem vel odit
        neque quia vitae!
      </p>
      <div className={classes.homeReadBtn}>
        <Button type="text" text="Read More..." variant="error" size="medium" />
      </div>
      <p className={classes.homePara}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam
        inventore molestias distinctio impedit facere. Incidunt dolorem est
        pariatur, sit corrupti error. Aspernatur soluta nostrum cupiditate
        praesentium animi at illo maxime eum consequatur velit iure ducimus
        delectus ipsum, quis modi debitis dolorum dolore, similique quaerat
        atque obcaecati, quia sequi beatae tenetur? Porro ab ducimus praesentium
        tempore? Suscipit facere saepe consequatur dignissimos at animi velit,
        eligendi eveniet adipisci cumque fugiat voluptatem officiis? Debitis
        maiores, exercitationem inventore suscipit iure corrupti enim. Atque
        veritatis consequuntur aliquid modi dicta impedit at ex culpa? Ducimus
        sunt veniam ut officia natus ipsa magnam unde dignissimos optio illo
        quia maiores ex nulla quae sit animi quaerat architecto, nostrum quas.
        A, enim ea? Possimus totam dolor eligendi ex quo quia nesciunt
        doloremque eaque, quam consequuntur fugiat excepturi veritatis, aliquam
        officia cum illo neque dolorem, optio incidunt molestias saepe? Saepe
        omnis placeat adipisci commodi repellat quidem molestias suscipit itaque
        alias voluptate magnam dolorem porro, quis tempora! Vitae mollitia
        provident numquam minus accusantium, fugiat iure? Quam animi ex veniam
        nobis magnam adipisci harum itaque labore cum nisi officia dicta
        repellat exercitationem nesciunt dolor minima iure perferendis,
        molestiae magni modi sapiente id soluta. Cum pariatur quidem vel odit
        neque quia vitae!
      </p>
      <div className={classes.homeReadBtn}>
        <Button type="text" text="Read More..." variant="error" size="medium" />
      </div>
    </Layout>
  );
};

export default Home;
