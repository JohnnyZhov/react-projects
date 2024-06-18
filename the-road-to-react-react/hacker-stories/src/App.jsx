import * as React from "react";

const title = "Ivan";

const welcome = {
  greeting: "Hey",
  title: "Rocky",
};

let fruits = ["apple", "banana", "orange", "grape"];

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
