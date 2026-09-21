import styles from "./styles.module.css";
import { useState } from "react";
import ModalPurchase from "../modal/modalPurchase/ModalPurchase";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
interface Props {
  total: number;
}

export const OrderSummary = ({ total }: Props) => {
  const [open, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const count = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.summary}>
      <div className={styles.summaryRow}>
        <span>ИТОГО</span>
        <strong>₽ {total.toLocaleString("ru-RU")}</strong>
      </div>
      <button className={styles.orderButton} onClick={handleOpen}>
        Перейти к оформлению
      </button>
      {open && (
        <ModalPurchase
          closeModal={handleClose}
          count={count}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default OrderSummary;
