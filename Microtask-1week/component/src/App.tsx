import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Foter";

function App() {
    return (
        <div className="App">
            <Header title={"NEW BODY"}/>
            <Body titleForBody={"NEW BODY"}/>
            <Footer titleForFooter={"NEW FOOTER" }/>
        </div>
    );
}

export default App;
