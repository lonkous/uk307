"use client";
import React, { useState } from "react";
import Login from "./login";

export default function Menu() {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="absolute top-0 left-0 right-0 m-2 rounded-lg shadow-sm bg-slate-400 shadow-slate-500">
      <div className="flex pl-4 text-center align-middle rounded-lg">
        <p className="p-2 m-1 text-justify align-text-bottom duration-200 ease-in-out rounded-lg pointer-events-auto delay:75 hover:ring-slate-100 hover:ring-2 hover:shadow-md hover:shadow-slate-500">
          Products
        </p>
        <p className="p-2 m-1 text-justify align-text-bottom duration-200 ease-in-out rounded-lg pointer-events-auto delay:75 hover:ring-slate-100 hover:ring-2 hover:shadow-md hover:shadow-slate-500">
          Categories
        </p>
        {clicked && (
          <p
            className="p-2 m-1 ml-auto text-justify align-text-bottom duration-200 ease-in-out rounded-lg pointer-events-auto delay:75 hover:ring-slate-100 hover:ring-2 hover:shadow-md hover:shadow-slate-500"
            onClick={() => setClicked(!clicked)}
          >
            Login
          </p>
        )}
        {!clicked && <Login clicked={clicked} />}
      </div>
    </div>
  );
}