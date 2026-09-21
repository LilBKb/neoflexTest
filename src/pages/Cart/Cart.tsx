import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import ItemCard from "../../components/itemCard/ItemCard";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import type { RootState } from "../../store/store";

export const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.content}>
        <div className={styles.items}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <ItemCard
                key={`${item.name}-${index}`}
                price={item.price}
                name={item.name}
                image={item.image}
                count={item.count}
              />
            ))
          ) : (
            <p className={styles.empty}>В корзине пока нет товаров</p>
          )}
        </div>
        <OrderSummary total={total} />
      </div>
    </div>
  );
};

export default Cart;
