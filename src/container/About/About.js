import React from 'react';
import style from './About.module.css'

export const About = () => {
    return (
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.aboutText}>
                    <span>Hi There</span>
                    <h1>I am Dmitry Kozintsov</h1>
                    <p>Front-end Developer.</p>
                </div>
                <div className={style.aboutPhoto}>

                </div>
            </div>
        </div>
    );
};