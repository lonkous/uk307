import { useLocation } from "preact-iso";
import Modal from "../pages/SignIn";
import { useState } from "preact/hooks";

export function Header({ setProduct, product, setCategory, category }) {
  const { url } = useLocation();

  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProductClick = () => {
    setProduct(!product);
    setCategory(!category);
  };

  const handleCategoryClick = () => {
    setCategory(!category);
    setProduct(!product);
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

        {!isLoggedIn && (
          <a onClick={() => setIsSignOpen(!isSignOpen)}>Sign In</a>
        )}

        {isSignOpen && <Modal isOpen={isSignOpen} setIsOpen={setIsSignOpen} />}
      </div>
    </header>
  );
}
