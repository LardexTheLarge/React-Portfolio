import React from "react";

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const message = "Hello world! I am a React Component";
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}

  //{} - JSX Expressions - we can insert values of variables but we can also write JS expressions
  return (
    <div className="container">
      <h2>{message}</h2>
    </div>
  );
}

export default Hello;
