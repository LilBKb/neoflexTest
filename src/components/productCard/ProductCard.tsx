import styles from "./styles.module.css";
import ratingStar from "../../assets/rating.png";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { addItem } from "../../store/slices/items";
import { useState } from "react";
import ModalProduct from "../modal/modalProduct/ModalProduct";

interface Props {
  image: string;
  price: number;
  rating: number;
  name: string;
  oldPrice?: number;
  description?: string;
}

export const ProductCard = ({
  image,
  price,
  rating,
  name,
  oldPrice,
  description,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setIsOpen] = useState<boolean>(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={image}
        className={styles.productImage}
        onClick={handleCardClick}
      />
      {open && (
        <ModalProduct
          price={price}
          name={name}
          image={image}
          handleCloseModal={handleCloseModal}
          oldPrice={oldPrice}
          description={description}
        />
      )}
      <div className={styles.buy}>
        <div className={styles.info}>
          <p className={styles.name} onClick={handleCardClick}>
            {name}
          </p>
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
            onClick={() => dispatch(addItem({ name, price, image }))}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
