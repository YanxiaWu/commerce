
import { Route, Routes } from 'react-router-dom'
import { React, useState } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ListCards from './components/ListCards/ListCards'
import { BsZoomIn } from "react-icons/bs";


function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <main className="App">
            <Navbar />
            <div className="container search">
                <input className='searchTerm'
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    placeholder="What are you looking for?"
                />
                <BsZoomIn className='searBtn' />
            </div>

            <div className='container'>
                <div className='row'>
                    <ListCards input={inputText} />
                </div>
            </div>


        </main>
    )
}
export default App;
