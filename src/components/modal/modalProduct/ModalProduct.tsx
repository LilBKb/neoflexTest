import styles from "./styles.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";
interface Props {
  price: number;
  name: string;
  image: string;
  handleCloseModal: () => void;
  oldPrice?: number;
  description?: string;
}

export const ModalProduct = ({
  price,
  name,
  image,
  handleCloseModal,
  oldPrice,
  description,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleCloseModal]);

  return createPortal(
    <div className={styles.overlay} onClick={handleCloseModal}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={handleCloseModal}
          aria-label="Закрыть модальное окно"
        >
          ×
        </button>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={image} className={styles.image} alt={name} />
          </div>

          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            {description && <p className={styles.description}>{description}</p>}
            <div className={styles.priceBlock}>
              <p className={styles.price}>{price} ₽</p>
              {oldPrice && (
                <span className={styles.oldPrice}>{oldPrice} ₽</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ModalProduct;
