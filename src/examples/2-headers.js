import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      // const resp = await axios(url, {
      //   headers: {
      //     Accept: "application/json",
      //   },
      // });
      // setJoke(resp.data.joke);
      // console.log(resp.data.joke);
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
      console.log(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
