import React from 'react';
import style from './App.module.css'
import {About, Footer, Header, Skills} from "./container";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <About/>
            <Skills/>
            <Footer/>

        </div>
    );
};