import styles from "./styles.module.css";
import ratingStar from "../../assets/rating.png";

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
          <button className={styles.buyButton}>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
