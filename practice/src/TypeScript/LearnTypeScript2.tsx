import React from "react";

//A variable to pass types into the props of Button function.
//React.CssProperties provides us with inbuilt properties so we don't need to be specifying types for individual styles.
type ButtonProps = {
  style: React.CSSProperties;
};

//style is destructured along with its type as ButtonProps which has been mentioned above.
export default function Button({ style }: ButtonProps) {
  return <button style={style}>Click me</button>;
}
