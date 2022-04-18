import React from 'react';

import style from './Project.module.scss'

export const Project = ({title,description}) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}>look</button>
            </div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};