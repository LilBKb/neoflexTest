import type { Product } from "../../products/interface";
import ProductCard from "../productCard/ProductCard";
import styles from "./styles.module.css";

interface Props {
  category: Product;
}

export const ProductBlock = ({ category }: Props) => {
  return (
    <div className={styles.container}>
      <h1>{category.title}</h1>
      <div className={styles.productContainer}>
        {category.products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            price={item.price}
            rating={item.rating}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductBlock;
