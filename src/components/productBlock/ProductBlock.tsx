import type { Product } from "../../products/interface";
import ProductCard from "../productCard/ProductCard";
import styles from "./styles.module.css";

interface Props {
  category: Product;
}

export const ProductBlock = ({ category }: Props) => {
  return (
    <>
      <h1 className={styles.title}>{category.title}</h1>
      <div className={styles.container}>
        <div className={styles.productContainer}>
          {category.products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              price={item.price}
              rating={item.rating}
              name={item.name}
              oldPrice={item.oldPrice}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductBlock;
