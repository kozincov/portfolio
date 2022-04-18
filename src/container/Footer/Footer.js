import React from 'react';
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h3 className={style.title}>Dmitry Kozintsov</h3>
                <div className={style.contact}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div>2022 All rights reserved</div>
            </div>
        </div>
    );
};