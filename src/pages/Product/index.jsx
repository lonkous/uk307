import { h } from "preact";
import { useState, useEffect } from "react";

export function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Products?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
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
  }, []);

  async function DeleteItem(item) {
    {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Product/{" +
            item +
            "}?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
          {
            method: "DELETE",
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
  }
  async function UpdateItem(item) {
    {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Product/{" +
            item +
            "}?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
          {
            method: "UPDATE",
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
  }
  const handleDelete = (item) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      alert("Item deleted!");
      DeleteItem(item);
    }
  };

  const handleUpdate = (item) => {
    alert("Item Created!");
    UpdateItem(item);
  };

  return (
    <div class="min-h-screen flex items-center justify-center m-5">
      {isLoading && <p>Loading...</p>}
      {!isLoading && !data && <p>Error: Unable to fetch data</p>}
      {!isLoading && data && (
        <div class="flex flex-col gap-5">
          <div class="rounded-lg w-full flex">
            <button class="bg-white text-neutral-900 capitalize rounded-full decoration-2 p-2 w-10 h-10 font-bold mr-2">
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
              <th class="p-2 w-fit text-neutral-900 hover:underline  rounded-lg ">
                Product Id
              </th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">
                Product Name
              </th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Active</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Name</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Photo</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">
                Description
              </th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Price</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Stock</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Delete</th>
            </tr>

            <tr class="bg-gray-500">
              <td class="p-2 w-fit  hover:underline"></td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Name"
                ></input>
              </td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Active"
                ></input>
              </td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Name"
                  id="sku"
                ></input>
              </td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Photo"
                ></input>
              </td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Description"
                ></input>
              </td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Price"
                ></input>
              </td>
              <td class="p-2 w-fit  hover:underline">
                <input
                  class="p-2 rounded-lg bg-white w-full"
                  placeholder="Stock"
                ></input>
              </td>
              <td class="p-2 w-fit text-neutral-900 hover:underline text-center">
                <button
                  class="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-800"
                  onClick={() => handleUpdate(document.getElementById("sku"))}
                >
                  Create
                </button>
              </td>
            </tr>

            {data.map((item, index) => (
              <tr
                key={index}
                class=" hover:bg-violet-300 hover:border-1 hover:delay-175 hover:ease-linear hover:duration-300 hover:shadow-2xl hover:drop-shadow-2xl  "
              >
                <td class="p-2 w-fit text-neutral-900 hover:underline ">
                  {item.product_id}
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline">
                  {item.sku}
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
                  {item.name}
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline">
                  <img src={item.product_image} class="max-w-xs" />
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline">
                  {item.description}
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline">
                  {item.price}
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline">
                  {item.stock}
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline text-center">
                  <button
                    class="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-800"
                    onClick={() => handleDelete(item.sku)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
