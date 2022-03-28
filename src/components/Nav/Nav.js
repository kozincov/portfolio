import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
                <div className={style.nav}>
                    <a href="">header</a>
                    <a href="">about</a>
                    <a href="">skills</a>
                    <a href="">contact</a>
                </div>
    );
};