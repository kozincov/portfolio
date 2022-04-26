import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {AppWrap} from "../../wrapper";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor.'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(Skills, 'skills')