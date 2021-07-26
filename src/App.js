import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const user = [
    { name : 'Bunny', mail:'seisei@gmail.com'},
    { name : 'Nahid', mail:'nahid@gmail.com'},
    { name : 'Hassan', mail:'hassan@gmail.com'},
    { name : 'Bulbul', mail:'bulbul@gmail.com'},
    { name : 'Bunny', mail:'bunny@gmail.com'},
    { name : 'Robin', mail:'robin@gmail.com'},
    { name : 'Miya', mail:'miya@gmail.com'},
    { name : 'Md', mail:'md@gmail.com'},
    { name : 'Example', mail:'example@gmail.com'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <User></User>
        <Counter> </Counter>
        {user.map( person => <Person person={person} ></Person> )}
      </header>
    </div>
  )
}
function Person({person}){
  return (
    <div className='personStyle'>
      <h1>Name : {person.name} </h1>
      <h4>Mail : {person.mail} </h4>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div className="counterBtn">
      <h1>Count: {count} </h1>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)} >Increase</button>
    </div>
  )
}
function User(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data) )
  },[] )
  return(
    <div style={{textAlign:'center', color:'white'}}>
      <h3>Dynamic User : {users.length} </h3>
      {console.log(users)}
      {
        users.map(user => 
          <div className="counterBtn">
            <h2>Name : {user.name}</h2>
            <p>Mail: {user.email} </p>
          </div>
          )
      }
    </div>
  )
}
export default App;
