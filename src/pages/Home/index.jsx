import "tailwindcss/tailwind.css";
import { useState } from "preact/hooks";

export function Home() {
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
  function clicked() {
    SignIn(username, password);
  }

  function handleUserChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div class="flex items-center justify-center h-screen">
      <div class="flex flex-col border-2 rounded-md p-2 sshadow-xl gap-2">
        <h1 class="text-2xl p-2">Sign In</h1>
        <input
          type="text"
          placeholder="root"
          value={username}
          onInput={handleUserChange}
          class="rounded-md p-1 m-1"
        ></input>

        <input
          type="text"
          placeholder="sUP3R53CR3T#"
          value={password}
          onInput={handlePasswordChange}
          class="rounded-md p-1 m-1"
        >
          sUP3R53CR3T#
        </input>
        <button onClick={clicked} class="rounded-md p-1 m-1 bg-violet-700 ">
          Sign In
        </button>
      </div>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
