import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Button";


function App2() {
    const Button1Foo = (subscriber:string, age:number) => {
console.log(subscriber, age)
    }
    const Button2Foo = () => {
alert("EGOR")
    }
    const Button3Foo = () => {
console.log("button3")
    }

    return (

        <div className="App">
            {/*<button onClick={(event) => {alert("Hello")}}>
                MyYoutubeChanelOne
            </button>*/}


            <Button name={"MyYoutubeChanel-1"} callBack={()=>Button1Foo("VASYA", 21)}/>
            <Button name={"MyYoutubeChanel-2"} callBack={Button2Foo}/>
            <Button name={"MyYoutubeChanel-3"} callBack={Button3Foo}/>

        </div>
    )
}

export default App2;
