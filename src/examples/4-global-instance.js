import axios from "axios";
import { useEffect } from "react";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

//very request will have this as default
const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl);
      console.log(resp1);
      console.log(resp1.data);
      const resp2 = await axios(randomUserUrl);
      console.log(resp2);
      console.log(resp2.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
