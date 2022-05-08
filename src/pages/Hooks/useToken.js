import { useEffect, useState } from "react";
import axios from "axios";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const loadToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://guarded-fjord-51404.herokuapp.com/login",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    loadToken();
  }, [user]);
  return [token, setToken];
};

export default useToken;
