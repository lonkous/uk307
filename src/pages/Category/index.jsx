import { h } from "preact";
import { useState, useEffect } from "react";
import { Row } from "./row";
import Modal from "../SignIn";

export function Category() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreate, setIsCreate] = useState(false);

  const [active, setActive] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [name, setName] = useState("");
  const [refetch, setrefetch] = useState(false);

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Categories",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    getCategory();
  });

  async function CreateItem() {
    try {
      const response = await fetch(
        "https://campus.csbe.ch/sollberger-manuel/uek307/Category" + idCategory,
        {
          method: "POST",
          body: JSON.stringify({
            active: active,
            name: name,
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

  const handleUpdate = () => {
    alert("Item Created!");
    setrefetch(!refetch);
    CreateItem();
  };

  return (
    <div class="min-h-screen flex items-center justify-center m-5">
      {isLoading && <p>Loading...</p>}
      {/* {!isLoading && !data && <Modal />} */}
      {!isLoading && data && (
        <div class="flex flex-col gap-5">
          <div class="rounded-lg w-full flex">
            <button
              class="bg-white text-neutral-900 capitalize rounded-full decoration-2 p-2 w-10 h-10 font-bold mr-2"
              onClick={() => setIsCreate(!isCreate)}
            >
              +
            </button>
            <input
              type="text"
              class="p-2 pl-8 rounded-l-lg w-fill flex-grow ring-0 ring-white"
              placeholder="Searching..."
            />
            <button class="bg-violet-500 text-neutral-100 underline underline-offset-2 capitalize decoration-2  p-2 rounded-r-lg w-1/5 font-bold">
              search
            </button>
          </div>
          <table class="bg-violet-500 rounded-lg ">
            <tr class="bg-gray-300 shadow-2xl ">
              <th class="p-2 w-fit text-neutral-900 hover:underline">Edit</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Active</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">
                Category ID
              </th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Name</th>

              <th class="p-2 w-fit text-neutral-900 hover:underline">Delete</th>
            </tr>

            {isCreate && (
              <tr class="bg-gray-500">
                <td></td>

                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Active"
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline"></td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </td>

                <td class="p-2 w-fit text-neutral-900 hover:underline text-center">
                  <button
                    class="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-800"
                    onClick={() => handleUpdate()}
                  >
                    Create
                  </button>
                </td>
              </tr>
            )}

            {data.map((item) => (
              <Row {...item} />
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
