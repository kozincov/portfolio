import React from 'react';
import style from './App.module.css'
import {About, Footer, Header, Skills} from "./container";
import {Nav} from "./components";

export const App = () => {
    return (
        <div className={style.app}>
            <Nav/>
            <Header/>
            <About/>
            <Skills/>
            <Footer/>

        </div>
    );
};