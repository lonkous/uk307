import "tailwindcss/tailwind.css";
import { useState } from "preact/hooks";
import { Product } from "../Product";
import { Header } from "../../components/Header";
import { Category } from "../Category";

export function Home() {
  let [product, setProduct] = useState(true);
  return (
    <>
      <Header setProduct={setProduct} product={product} />
      {/**originally had routing which can be seen in first commits but would
      break after refreshing only on campus.csbe.ch **/}
      {product ? <Product /> : <Category />}
    </>
  );
}
