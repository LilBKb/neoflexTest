import styles from "./styles.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface Props {
  totalPrice: number;
  count: number;
  closeModal: () => void;
  onConfirm?: () => void;
}

export const ModalPurchase = ({ totalPrice, count, closeModal }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="Закрыть модальное окно"
        >
          ×
        </button>

        <div className={styles.content}>
          <p className={styles.badge}>Оформление заказа</p>
          <h3 className={styles.title}>Подтвердите покупку</h3>

          <div className={styles.summary}>
            <div className={styles.row}>
              <span>Товаров</span>
              <strong>{count}</strong>
            </div>
            <div className={styles.row}>
              <span>Итого</span>
              <strong>{totalPrice} ₽</strong>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.cancelBtn} onClick={closeModal}>
              Отмена
            </button>
            <button className={styles.confirmBtn}>Подтвердить</button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ModalPurchase;
