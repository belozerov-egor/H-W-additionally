import React, {ChangeEvent, useState} from 'react';

export type FullInputProps = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputProps) => {
    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
//ПОЧИТАТЬ ПРО currentTarget
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
