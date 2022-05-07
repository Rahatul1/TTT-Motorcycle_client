import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItem = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getItem = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myItem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItem(data);
    };
    getItem();
  }, [user]);

  return (
    <div>
      <h2>Your Item: {myItem.length}</h2>
    </div>
  );
};

export default MyItem;
