import { useLocation } from "preact-iso";
import Modal from "../pages/SignIn";
import { useState } from "preact/hooks";

export function Header() {
  const { url } = useLocation();

  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
      <div class="bg-violet-500 p-2 flex gap-2 ml justify-end">
        <a href="/kupeczki-elias/" class={url == "/" && "active "}>
          Home
        </a>
        <a href="/kupeczki-elias/Login">Products</a>
        <a href="/kupeczki-elias/Other">Categories</a>
        {!isLoggedIn && (
          <a href="/Other" onClick={() => setIsSignOpen(true)}>
            Sign In
          </a>
        )}

        {isSignOpen && <Modal isOpen={isSignOpen} setIsOpen={setIsSignOpen} />}
      </div>
    </header>
  );
}
