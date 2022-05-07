import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);

  console.log(user);

  //submit
  const onSubmit = (data) => {
    const url = `https://guarded-fjord-51404.herokuapp.com/produts`;
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
        toast("Add Succesfully");
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center py-4">Added Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          placeholder="Photo URL"
          className="mb-2"
          type="photo"
          {...register("img")}
        />
        <input
          required
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          readOnly
          value={user.email}
          placeholder="Enter Email"
          className="mb-2"
          {...register("email")}
        />
        <textarea
          required
          placeholder="Discription"
          className="mb-2"
          {...register("discription")}
        />
        <input
          required
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
