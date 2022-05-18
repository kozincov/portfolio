import React from 'react';
import style from './App.module.scss'
import {About, Contact, Header, Projects, Skills} from "./container";
import {Nav} from "./components";

export const App = () => {
    return (
        <div className={style.app}>
            <Nav/>
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
};