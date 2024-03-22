import React, { createContext } from "react";
import Parent from "./AllPractice/LearnUseContext/Parent";
import Child from "./AllPractice/LearnUseContext/Child";
import Top from "./AllPractice/WithoutUseContext(Props)/Top";
import ApiUsingFetch from "./AllPractice/ApiUsingFetch";
import LearnTypeScript from "../src/TypeScript/LearnTypeScript.tsx";
import Button from "./TypeScript/LearnTypeScript2.tsx";

//Context for storing
export let Context = createContext();

const App = () => {
  //initialize name and age for passing and storing in store
  let name = "John Smith";
  let age = 24;

  return (
    <div>
      {/* Providing value to context store */}
      {/* All components inside of context.provider will be able to access the value name */}
      {/* To send two values, use object */}
      <Context.Provider
        value={{
          name: name,
          age: age,
        }}
      >
        <Parent></Parent>
        <Child></Child>
      </Context.Provider>
      <Top></Top>
      <ApiUsingFetch />

      {/* For LearnTypeScript.tsx */}
      <LearnTypeScript
        backgroundColor="red"
        fontSize={30}
        rounded={true}
      ></LearnTypeScript>

      {/* For LearnTypeScript2.tsx */}
      {/* this sends styles as a prop itself */}
      <Button
        style={{
          backgroundColor: "blue",
          fontSize: 24,
          color: "white",
          padding: "1rem 2rem",
          borderRadius: 8,
          borderColor: 5,
        }}
      ></Button>
    </div>
  );
};

export default App;
