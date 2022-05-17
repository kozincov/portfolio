import React from 'react';
import styleApp from './../App.module.scss'

export const NavigationDots = ({active}) => {
    return (
        <div className={styleApp.app__navigation}>
            {['home', 'about', 'projects', 'skills', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className={styleApp.app__navigation_dot}
                    style={active === item ? {backgroundColor: '#313BAC'} : {}}
                />
            ))}
        </div>
    );
};

