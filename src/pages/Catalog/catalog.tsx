import ProductBlock from "../../components/productBlock/ProductBlock";
import { products } from "../../products/data.ts";
import styles from "./styles.module.css";
export const Catalog = () => {
  return (
    <div className={styles.container}>
      {products.map((category, index) => (
        <ProductBlock category={category} key={index} />
      ))}
    </div>
  );
};

export default Catalog;
