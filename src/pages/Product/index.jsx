import { h } from "preact";
import { useState, useEffect } from "react";
import { Row } from "./row";
import { Category } from "../Category";
import Modal from "../SignIn";

export function Product() {
  const [data, setData] = useState(null);
  const [searchdata, setSearchdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreate, setIsCreate] = useState(false);

  const [sku, setSku] = useState("");
  const [active, setActive] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [search, setSearch] = useState("");
  const [refetch, setrefetch] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Products" +
            "?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
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

    getProducts();
  }, []);

  async function CreateItem(item) {
    try {
      const url =
        "https://campus.csbe.ch/sollberger-manuel/uek307/Product/" +
        sku +
        "?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini";
      console.log(url);

      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          active: active,
          id_category: idCategory,
          name: name,
          product_image: photo,
          description: description,
          price: price,
          stock: stock,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Data updated successfully:", responseData);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }
  useEffect(() => {
    async function FindItem() {
      try {
        const response = await fetch(
          "https://campus.csbe.ch/sollberger-manuel/uek307/Product/" +
            60003111 +
            "?itsy-bitsy-teenie-weenie-yellow-polkadot-bikini",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setSearchdata(responseData);
        console.log(searchdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    FindItem();
  });
  const handleUpdate = () => {
    alert("Item Created!");
    setrefetch(!refetch);
    CreateItem(sku);
    setSku("");
    setActive("");
    setIdCategory("");
    setName("");
    setPhoto("");
    setDescription("");
    setPrice("");
    setStock("");
    setIsCreate(!isCreate);
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button class="bg-violet-500 text-neutral-100 underline underline-offset-2 capitalize decoration-2  p-2 rounded-r-lg w-1/5 font-bold">
              search
            </button>
          </div>
          {/* 
          DOES SHOW BUT IT FETCHES THE RIGHT DATA
          
          <table class="bg-violet-500 rounded-lg ">
            {searchdata.map((item) => (
              <Row {...item} />
            ))}
          </table> */}
          <table class="bg-violet-500 rounded-lg ">
            <tr class="bg-gray-300 shadow-2xl ">
              <th class="p-2 w-fit text-neutral-900 hover:underline">Edit</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline  rounded-lg ">
                Product Id
              </th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">SKU</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Active</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">
                Category
              </th>

              <th class="p-2 w-fit text-neutral-900 hover:underline">Name</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Photo</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">
                Description
              </th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Price</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Stock</th>
              <th class="p-2 w-fit text-neutral-900 hover:underline">Delete</th>
            </tr>

            {isCreate && (
              <tr class="bg-gray-500">
                <td></td>
                <td></td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Name"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Active"
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Category ID"
                    value={idCategory}
                    onChange={(e) => setIdCategory(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Photo"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit  hover:underline">
                  <input
                    class="p-2 rounded-lg bg-white w-full text-neutral-900"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  ></input>
                </td>
                <td class="p-2 w-fit text-neutral-900 hover:underline text-center">
                  <button
                    class="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-800"
                    onClick={() => handleUpdate(sku)}
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
