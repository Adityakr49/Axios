import { useEffect } from "react";
import authFetch from "../axios/interceptors";

// const url = "https://course-api.com/react-store-products";

//Interceptors are the function that axios call for every request
const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-stoare-products");
      console.log(resp);
    } catch (error) {
      // console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;

/*interceptors refer to a feature that allows you to intercept 
requests or responses before they are handled by axios 
or after they are received. This provides a way to globally 
handle errors, modify requests or responses, add 
authentication tokens, and perform other tasks.*/
