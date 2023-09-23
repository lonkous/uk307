import { h } from "preact";
import { useState } from "react";

export default function Modal() {
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
      if (response.ok) {
        console.log("success");
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function clicked() {
    console.log("testing");
    SignIn(username, password);
  }

  function handleUserChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form class="flex flex-col border-2 p-4 rounded-lg">
      <p class="p-2">Sign In</p>
      <input
        type="text"
        placeholder="root"
        value={username}
        onInput={handleUserChange}
        class="rounded-md p-1 m-1"
      ></input>

      <input
        type="text"
        value={password}
        placeholder="sUP3R53CR3T#"
        onInput={handlePasswordChange}
        class="rounded-md p-1 m-1"
      >
        sUP3R53CR3T#
      </input>
      <button
        onClick={clicked}
        type="submit"
        class="rounded-md p-1 m-1 bg-violet-700 "
      >
        Sign In
      </button>
    </form>
  );
}
