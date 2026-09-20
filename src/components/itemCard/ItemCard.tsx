import styles from "./styles.module.css";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import remove from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/items";
import type { AppDispatch } from "../../store/store";

interface Props {
  price: number;
  name: string;
  image: string;
}

export const ItemCard = ({ price, name, image }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={image} className={styles.image} />
        <span className={styles.countWrapper}>
          <img src={minus} className={styles.actions} />
          <span className={styles.counter}>1</span>
          <img src={plus} className={styles.actions} />
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
        <p style={{ fontWeight: 600 }}>{price} ₽</p>
      </div>
    </div>
  );
};

export default ItemCard;
