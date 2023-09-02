import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/Login" class={url == "/Login" && "active"}>
          Products
        </a>
        <a href="/Other" class={url == "/Other" && "active"}>
          Categories
        </a>
        <a href="/Login" class={url == "/Login" && "active"}>
          Sign In
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}
