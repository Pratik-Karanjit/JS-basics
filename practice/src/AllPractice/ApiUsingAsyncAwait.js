// Question is to hit an api from json placeholder that gets posts information in console with extracting just 10 of the userIds from the array of objects

import axios from "axios";
import React from "react";

const ApiUsingAsyncAwait = () => {
  let ApiCall = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //Extract only 10
      const userIds = response.data
        .slice(0, 10)
        .map((individualPosts) => individualPosts.userId);
      console.log(userIds);
    } catch (error) {
      console.log("unable to get JSON data.", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          ApiCall();
        }}
      >
        Click to get posts
      </button>
    </div>
  );
};

export default ApiUsingAsyncAwait;
