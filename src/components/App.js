
import React,{useState} from "react";
import './../styles/App.css';
import Axios from "axios";
import 'regenerator-runtime/runtime'
const App = () => {
  let [data,Setdata]=useState([])
  async function fetchdata(){
    let res= await fetch('https://dummyjson.com/users')
    let temp = await res.json()
     console.log(temp)
     Setdata(temp.users)
  }
  return (
    <div>
        <h1>Blue Whales</h1>
        <button onClick={fetchdata}>Get user List</button>
       <table>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email Avatar</td>
          <td></td>
        </tr>
        {
          data.map(element=>{
            return(
              <tr>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.email}</td>
                <td><img src={element.image}></img></td>
              </tr>
            )
          })
        }
       </table>
    </div>
  )
}

export default App
