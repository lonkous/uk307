import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <div class="bg-violet-500 p-2 flex gap-2 ml justify-end">
        <a href="/" class={url == "/" && "active "}>
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
      </div>
    </header>
  );
}
