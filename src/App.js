import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
function App() {
  const user = [
    { name: "Bunny", mail: "seisei@gmail.com" },
    { name: "Nahid", mail: "nahid@gmail.com" },
    { name: "Hassan", mail: "hassan@gmail.com" },
    { name: "Bulbul", mail: "bulbul@gmail.com" },
    { name: "Bunny", mail: "bunny@gmail.com" },
    { name: "Robin", mail: "robin@gmail.com" },
    { name: "Miya", mail: "miya@gmail.com" },
    { name: "Md", mail: "md@gmail.com" },
    { name: "Example", mail: "example@gmail.com" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <User></User>
        <User1></User1>
        <Counter> </Counter>
        {user.map((person) => (
          <Person person={person}></Person>
        ))}
      </header>
    </div>
  );
}
function Person({ person }) {
  return (
    <div className="personStyle">
      <h1>Name : {person.name} </h1>
      <h4>Mail : {person.mail} </h4>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div className="counterBtn">
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h3>Dynamic User : {users.length} </h3>
      {console.log(users)}
      {users.map((user) => (
        <div className="counterBtn">
          <h2>Name : {user.name}</h2>
          <p>Mail: {user.email} </p>
        </div>
      ))}
    </div>
  );
}
function User1() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  });
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h3> Dynamic Data {user.length} </h3>
      {user.map((user) => (
        <div className="counterBtn">
          <h2>Name: {user.name} </h2>
          <p>Mail: {user.email} </p>
          <p>Phone : {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
  );
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h3> Dynamic Data {user.length} </h3>
      {user.map((user) => (
        <div className="counterBtn">
          <h1>Name: {user.name}</h1>
          <h4>Mail :{user.email}</h4>
          <h4>Phone: {user.phone}</h4>
          <h5>
            {" "}
            Address :{" "}
            {`City :${user.address.city} , Street :${user.address.street} `}{" "}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default App;
