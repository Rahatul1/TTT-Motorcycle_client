import { useEffect } from "react";
import useProducts from "./useProducts";

const useProductsDetail = (id) => {
  const [products, setProducts] = useProducts({});

  useEffect(() => {
    const url = `https://guarded-fjord-51404.herokuapp.com/produts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  return [products, setProducts];
};

export default useProductsDetail;
