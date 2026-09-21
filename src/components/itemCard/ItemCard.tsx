import styles from "./styles.module.css";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import remove from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../store/slices/items";
import type { AppDispatch } from "../../store/store";

interface Props {
  price: number;
  name: string;
  image: string;
  count: number;
}

export const ItemCard = ({ price, name, image, count }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={image} className={styles.image} />
        <span className={styles.countWrapper}>
          <img
            src={minus}
            className={styles.actions}
            onClick={() => dispatch(minusItem(name))}
            alt={`Убрать ${name}`}
          />

          <span className={styles.counter}>{count}</span>
          <img
            src={plus}
            className={styles.actions}
            onClick={() => dispatch(addItem({ name, price,image }))}
            alt={`Добавить ${name}`}
          />
        </span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price} ₽</p>
      </div>
      <div className={styles.total}>
        <img
          src={remove}
          className={styles.remove}
          onClick={() => dispatch(removeItem(name))}
          alt={`Удалить ${name}`}
          aria-label={`Удалить ${name}`}
        />
        <p style={{ fontWeight: 600 }}>{price * count} ₽</p>
      </div>
    </div>
  );
};

export default ItemCard;
