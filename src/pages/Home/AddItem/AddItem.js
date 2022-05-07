import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/produts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center py-4">Added Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Photo URL"
          className="mb-2"
          type="photo"
          {...register("img")}
        />
        <input
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Discription"
          className="mb-2"
          {...register("discription")}
        />
        <input
          placeholder="Price"
          className="mb-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Quantity"
          className="mb-2"
          type="number"
          {...register("quantity")}
        />
        <input
          placeholder="Sold Product"
          className="mb-2"
          type="number"
          {...register("slod")}
        />
        <input
          className="w-50 mx-auto btn btn-dark mt-3"
          value="Add Item"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItem;
