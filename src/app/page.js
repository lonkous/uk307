import Image from "next/image";
import Menu from "./components/menu";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-slate-50">
      <Menu />
    </main>
  );
}
