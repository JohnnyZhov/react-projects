import * as React from "react";

const title = "Ivan";

const welcome = {
  greeting: "Hey",
  title: "Rocky",
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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

      {/*List*/}
      <ul>
        {list.map(function (item) {
          return (
            <div key={item.objectID}>
            <li>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
