import axios from "axios";
import React from "react";

const Try = () => {
  const hitApi = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <div>
      <button
        onClick={() => {
          hitApi();
        }}
      >
        Hit me
      </button>
    </div>
  );
};

export default Try;
