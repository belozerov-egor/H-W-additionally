import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./component/FullInput";
import {Input} from "./component/Input";
import {Button} from "./component/Button";


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('')


    const addMessage = (title: string) => {
        console.log(title)
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = ()=> {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*     <div>
          <input />           1 вариант
          <button>+</button>
        </div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            {/*2 вариант наверху*/}

            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
