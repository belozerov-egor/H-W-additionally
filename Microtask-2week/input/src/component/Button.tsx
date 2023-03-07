import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=> void
}



export const Button = (props:ButtonPropsType) => {

    const onButtonHandler = ()=> {
        props.callBack()
    }
    return (
        <>
            <button onClick={onButtonHandler}>{props.name}</button>
        </>
    );
};
//Универсальная кнопка!