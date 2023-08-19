import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
  return (
    <div className="absolute top-0 left-0 right-0 bg-gray-500">
      <button className="p-2 m-2 duration-200 ease-in-out rounded-lg pointer-events-auto delay:75 hover:bg-gray-400 clicked:animate-ping ">
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
