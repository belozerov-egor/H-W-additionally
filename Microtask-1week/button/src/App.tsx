import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    /*    const myFirstSubscriber = (event:  MouseEvent<HTMLButtonElement>)=>{
            alert("Hello im Vasya!")
        }

        const myecondSubscriber= ()=>{
            alert("Hello im Ivan!")
        }*/

    const onclickHandler = (name: string) => {
        alert("My name is" + ' ' + name)
    }

 /*   const foo1 = () => {
console.log("100200")
    }

    const foo2 = (number:number) => {
alert(number)
    }*/

    return (

        <div className="App">
            {/*<button onClick={(event) => {alert("Hello")}}>
                MyYoutubeChanelOne
            </button>*/}


            <button onClick={() => onclickHandler("Vasya")}>
                MyYoutubeChanel-1
            </button>
            <button onClick={() => onclickHandler("Ivan")}>
                MyYoutubeChanel-2
            </button>

           {/* <button onClick={foo1}>1</button>
            <button onClick={()=> foo2 (100200)}>2</button>*/}
        </div>
    )
}

export default App;
