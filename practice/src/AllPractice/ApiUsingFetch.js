// Question is to hit an api from json placeholder that gets posts information in console with extracting just 10 of the userIds from the array of objects USING FETCH

import React from "react";

const ApiUsingAsyncAwait = () => {
  let ApiCall = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();

      // Extracting the first 10 userId values
      const userIds = data.slice(0, 10).map((post) => post.userId);
      console.log(userIds);
    } catch (error) {
      console.log("Unable to get JSON data.", error);
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
