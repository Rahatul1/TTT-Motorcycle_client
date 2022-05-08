import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItem = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getItem = async () => {
      const email = user?.email;
      const url = `https://guarded-fjord-51404.herokuapp.com/myItem?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setMyItem(data);
    };
    getItem();
  }, [user]);

  return (
    <div>
      <h2 className="text-center pt-2">My Item: {myItem.length}</h2>
      <div className="row m-5">
        {myItem.map((item) => (
          <div
            key={item._id}
            className="g-2 pb-5 col-sm-12 col-md-6 col-lg-4 text-center"
          >
            <div className="card-group">
              <div className="card">
                <img
                  src={item.img}
                  className="card-img-top w-50 mx-auto justify-center"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center pb-3">{item.name}</h5>
                  <h5 className="card-title">Price: {item.price}</h5>
                  <p className="card-text">
                    <b>discription</b> : {item.discription}
                  </p>
                  <p className="card-text">
                    <b>quantity</b> : {item.quantity}
                  </p>
                  <p className="card-text">
                    <b>Sold</b> : {item.sold}
                  </p>
                  <p className="card-text">
                    <b>Supplier</b> : {item.supplier}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
