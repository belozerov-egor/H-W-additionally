import React from 'react';
import {FilterType} from "./App";

export type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentType= {
    money: Array<MoneyType>
    filter: (nameButton:FilterType)=>void
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.filter('all')}>all</button>
                <button onClick={() => props.filter('ruble')}>rubles</button>
                <button onClick={() => props.filter("dollar")}>dollars</button>
            </div>
        </>
    );
};