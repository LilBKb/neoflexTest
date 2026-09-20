import styles from "./styles.module.css";

interface Props {
  total: number;
}

export const OrderSummary = ({ total }: Props) => {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryRow}>
        <span>ИТОГО</span>
        <strong>₽ {total.toLocaleString("ru-RU")}</strong>
      </div>
      <button className={styles.orderButton}>Перейти к оформлению</button>
    </div>
  );
};

export default OrderSummary;
