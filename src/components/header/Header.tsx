import styles from "./styles.module.css";
import cart from "../../assets/cart.png";
import like from "../../assets/like.png";
import ellipse from "../../assets/ellipse.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router";

export const Header = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.count, 0),
  );

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.header} onClick={() => navigate("/")}>
        QPICK
      </h1>
      <div className={styles.cart}>
        <Link
          to="/cart"
          className={styles.wrapper}
          aria-label="Открыть корзину"
        >
          <img src={cart} />
          {cartCount > 0 ? (
            <span className={styles.counter}>
              <img src={ellipse} />
              <span>{cartCount > 9 ? "9+" : cartCount}</span>
            </span>
          ) : null}
        </Link>
        <div className={styles.wrapper}>
          <img src={like} />
        </div>
      </div>
    </div>
  );
};
export default Header;
