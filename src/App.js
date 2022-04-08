import React from 'react';
import style from './App.module.css'
import {About, Footer, Header, Projects, Skills} from "./container";
import {Contact} from "./container/Contact/Contact";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>

        </div>
    );
};