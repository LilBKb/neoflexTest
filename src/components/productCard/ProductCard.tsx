import styles from "./styles.module.css";
import ratingStar from "../../assets/rating.png";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { addItem } from "../../store/slices/items";

interface Props {
  image: string;
  price: number;
  rating: number;
  name: string;
  oldPrice?: number;
}

export const ProductCard = ({
  image,
  price,
  rating,
  name,
  oldPrice,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <img src={image} className={styles.productImage} />
      <div className={styles.buy}>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <span className={styles.ratingWrapper}>
            <img src={ratingStar} className={styles.icon} />
            <span className={styles.rating}>{rating}</span>
          </span>
        </div>
        <div className={styles.action}>
          <div className={styles.priceWrapper}>
            <p>{price} ₽</p>
            {oldPrice ? <p className={styles.old}>{oldPrice} ₽</p> : null}
          </div>
          <button
            className={styles.buyButton}
            onClick={() => dispatch(addItem({ name, price, rating, image }))}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
