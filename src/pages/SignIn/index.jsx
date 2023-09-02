import { Dialog } from "@headlessui/react";
import { useState } from "preact/hooks";
import "./../../style.css";

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
    <div class="flex items-center justify-center h-screen">
      <h1 class="text-4xl bg">Sign In</h1>
    </div>
  );
}
