import { useLocation } from "preact-iso";
import Modal from "../pages/SignIn";
import { useState } from "preact/hooks";

export function Header({ setProduct, product }) {
  const { url } = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProductClick = () => {
    setProduct(true);
  };

  const handleCategoryClick = () => {
    setProduct(false);
  };

  return (
    <header class="relative top-0 left-0 right-0">
      <div class="mt-5 p-4 flex gap-2 ml justify-center ">
        <a class="font-bold" onClick={handleProductClick}>
          Products
        </a>
        <a class="font-bold" onClick={handleCategoryClick}>
          Categories
        </a>
      </div>
    </header>
  );
}
