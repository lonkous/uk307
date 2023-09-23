import "tailwindcss/tailwind.css";
import { useState } from "preact/hooks";

export function Row(item) {
  let [isEditable, setEditable] = useState(false);
  const handleDelete = (item) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      alert("Item deleted!");
      DeleteItem(item);
    }
  };
  async function DeleteItem(category_id) {
    {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Category/" +
            category_id +
            "?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
  async function UpdateItem(category_id) {
    try {
      const response = await fetch(
        "https://campus.csbe.ch/sollberger-manuel/uek307/Category/" +
          category_id +
          "?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
        {
          method: "PUT",
          body: JSON.stringify({
            category_id: category_id,
            active: document.getElementById("active"),
            name: document.getElementById("name"),
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Data updated successfully:", responseData);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }
  const handleEdit = () => {
    setEditable(!isEditable);
  };

  const handleUpdate = (category_id) => {
    setEditable(!isEditable);
    UpdateItem(category_id);
  };
  return (
    <>
      <tr
        key={item.category_id + item.name}
        class=" hover:bg-violet-300 hover:border-1 hover:delay-175 hover:ease-linear hover:duration-300 hover:shadow-2xl hover:drop-shadow-2xl  "
      >
        <td>
          <button
            class="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-800"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
        </td>
        <td class="p-2 w-fit text-neutral-900 hover:underline align-center">
          {item.active == 1 && (
            <svg
              class="align-middle  h-4 rounded-lg text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
                d="M5.5 12.5l3 3 6-6"
              />
            </svg>
          )}
        </td>
        <td class="p-2 w-fit text-neutral-900 hover:underline">
          {item.category_id}
        </td>
        <td class="p-2 w-fit text-neutral-900 hover:underline">{item.name}</td>
        <td class="p-2 w-fit text-neutral-900 hover:underline text-center">
          <button
            class="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-green-800"
            onClick={() => handleDelete(item.category_id)}
          >
            Delete
          </button>
        </td>
      </tr>
      {isEditable && (
        <tr
          key={item.product_id}
          class=" bg-white hover:border-1 hover:delay-175 hover:ease-linear hover:duration-300 hover:shadow-2xl hover:drop-shadow-2xl  "
        >
          <td>
            <button
              class="px-4 py-2 bg-teal-500 text-white rounded-2xl hover:bg-teal-800"
              onClick={() => handleUpdate(item.category_id)}
            >
              Update
            </button>
          </td>
          <td class="p-2 w-fit  hover:underline">
            <input
              class="p-2 rounded-lg bg-white w-full text-neutral-900"
              placeholder="Active"
              id="active"
            ></input>
          </td>
          <td class="p-2 w-fit  hover:underline">
            <input
              class="p-2 rounded-lg bg-white w-full text-neutral-900"
              placeholder="Category ID"
              id="category_id"
            ></input>
          </td>
          <td class="p-2 w-fit  hover:underline">
            <input
              class="p-2 rounded-lg bg-white w-full text-neutral-900"
              placeholder="Name"
              id="name"
            ></input>
          </td>
          <td class="p-2 w-fit  hover:underline"></td>
        </tr>
      )}
    </>
  );
}
