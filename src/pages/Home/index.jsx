import "tailwindcss/tailwind.css";
import { useState } from "preact/hooks";
import { Product } from "../Product";
import { Header } from "../../components/Header";
import { Category } from "../Category";

export function Home() {
  let [product, setProduct] = useState(true);
  let [category, setCategory] = useState(false);
  return (
    <>
      <Header
        setProduct={setProduct}
        product={product}
        setCategory={setCategory}
        category={category}
      />
      {product && <Product />}
      {category && <Category />}
    </>
  );
}
