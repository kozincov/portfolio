import React from 'react';
import style from './Skill.module.css'

export const Skill = ({title,description,...props}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};