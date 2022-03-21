import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {HashRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <HashRouter>
            <div className="app">
                <div className="app__wrapper">
                    <div className="content">
                        <Header/>
                        <div className="content__load">
                            <Routes>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/" element={<div>Welcome to "Takeoff Staff" contacts SPA</div>}/>
                                <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>

    );
}

export default App;
