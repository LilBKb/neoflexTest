import styles from "./styles.module.css";
import cart from "../../assets/cart.png";
import like from "../../assets/like.png";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>QPICK</h1>
      <div className={styles.cart}>
        <img src={cart} />
        <img src={like} />
      </div>
    </div>
  );
};
export default Header;
