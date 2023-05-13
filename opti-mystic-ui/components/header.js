import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Logo from "../public/assets/logo.png";

export default function Header() {
  const [opPrice, setOpPrice] = useState("");
  useEffect(() => {
    const getOpPrice = async () => {
      const response = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=11840`, {
        headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_APIKEY, 
      }
      });
      console.log(response.data.quote.USD.price)
      setOpPrice(response.data.quote.USD.price);
    };
    getOpPrice();
  });
  return (
    <section className={styles.header}>
      <section className={styles.topHeader}>
        OP Price:{" "}
        <span className={styles.blueText}>${Number(opPrice).toFixed(2)}</span>
      </section>
      <section className={styles.navbar}>
        <Image src={Logo} alt="Etherscan Logo" className={styles.logo} />
        <section className={styles.menu}>
          <p>Rollup Discovery</p>
          <p> | </p>
          <p>
            Rollup indexing
          </p>
          <p> | </p>
          <p>
            L1 matching
          </p>
        </section>
      </section>
    </section>
  );
}