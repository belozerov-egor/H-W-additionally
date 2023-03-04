import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onClickHandler=()=> {
    setA(++a)
    console.log((a))
  }
    const onClickDeleted=()=> {
      setA(a=0)
    }
    //let a = 1;

    let [a,setA] = useState(1)
    return (
        <div className="App">
            <h1>{a}</h1>
          <button onClick={onClickHandler}>number</button>
          <button onClick={onClickDeleted}>0</button>
        </div>
    );
}

export default App;
