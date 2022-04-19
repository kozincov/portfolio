import React from 'react';
import style from './App.module.scss'
import {About, Footer, Header, Projects, Skills, Contact} from "./container";
import {Nav} from "./components";

export const App = () => {
    return (
        <div className={style.app}>
            <Nav/>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>

        </div>
    );
};