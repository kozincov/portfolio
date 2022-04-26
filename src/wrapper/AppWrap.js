import React from 'react';
import {NavigationDots, SocialMedia} from '../components'
import styleApp from './../App.module.scss'

export const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`${styleApp.app__container} ${classNames}`}>
            <SocialMedia />
            <div className={`${styleApp.app__wrapper} ${styleApp.app__flex}`}>
                <Component />

                <div className={styleApp.copyright}>
                    <p className={styleApp.p_text}>@2022 Dmitry</p>
                    <p className={styleApp.p_text}>All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};


