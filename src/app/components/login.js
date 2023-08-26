import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Login() {
  let [isOpen, setIsOpen] = useState(true);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  async function SignIn(username, password) {
    try {
      const response = await fetch(
        "https://campus.csbe.ch/sollberger-manuel/uek307/Authenticate",
        {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategory() {
    const response = await fetch(
      "https://campus.csbe.ch/sollberger-manuel/uek307/Products",
      {
        method: "GET",
      }
    );
    console.log(response);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex items-center justify-center ">
        <Dialog.Panel className="w-full max-w-sm p-5 shadow-2xl rounded-xl backdrop-blur-3xl drop-shadow-2xl">
          <div className="p-2">
            <Dialog.Title className="text-neutral-700">Login</Dialog.Title>
            <input
              className="w-full p-2 mt-4 mb-2 border-2 border-solid rounded-xl text-neutral-700 border-neutral-200"
              type="username"
              placeholder="Username"
              autoComplete="on"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            ></input>
            <input
              className="w-full p-2 mb-4 border-2 border-solid rounded-xl text-neutral-700 border-neutral-200"
              placeholder="Password"
              type="password"
              required
              autoComplete="on"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <div className="flex justify-between pt-2">
              <button
                className="w-full p-2 mr-1 text-neutral-800 rounded-xl bg-slate-300"
                onClick={() => SignIn(username, password)}
              >
                Login
              </button>
              <button
                className="w-full p-2 ml-1 text-neutral-800 rounded-xl bg-neutral-200 "
                onClick={() => getCategory()}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
