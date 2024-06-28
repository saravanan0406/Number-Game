import './App.css';
import { useState } from 'react';

const random = Math.floor(Math.random()*10 + 1)

function App() {

  const [input,setinput] = useState()
  let res;
  let rres;

  if(input){
  if(input > random){
    res='Heigher'
  }
  else if(input < random){
    res='Lower'
  }
  else if(input==random){
    res='Correct !!!'
  
  }
  else{
     rres='Enter a valid Field'
  }
}

  return (
    <div className="App">
      <h2>Number Game</h2>
      <div className="container">
        <h4>Try to guess the number between 1 to 10</h4>
        <input type='text' onChange={(e)=>setinput(e.target.value)}/>
        {res?<h4>You Guesses is : {res}</h4>:<h4>{rres}</h4>}
      </div>
    </div>
  );
}

export default App;
