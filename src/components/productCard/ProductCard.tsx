import styles from "./styles.module.css";
import ratingStar from "../../assets/rating.png";

interface Props {
  image: string;
  price: number;
  rating: number;
  name: string;
}

export const ProductCard = ({ image, price, rating, name }: Props) => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.productImage} />
      <div className={styles.buy}>
        <div className={styles.info}>
          <p>{name}</p>
          <span>
            <img src={ratingStar} className={styles.icon} />
            <span>{rating}</span>
          </span>
        </div>
        <div className={styles.action}>
          <p>{price.toLocaleString("ru-RU")} р.</p>
          <button className={styles.buyButton}>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
