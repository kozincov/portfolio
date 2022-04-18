import React from 'react';
import style from './Projects.module.scss'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.project}>
                    <Project title={'todo'} description={'Lorem ipsum dolor sit.'}/>
                    <Project title={'calc'} description={'Lorem ipsum dolor sit.'}/>
                </div>
            </div>
        </div>
    );
};