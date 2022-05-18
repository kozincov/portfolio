import React from 'react';
import {motion} from 'framer-motion';
import styleApp from './../App.module.scss'

export const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
            whileInView={{y: [100, 50, 0], opacity: [0, 0, 1]}}
            transition={{duration: 0.5}}
            className={`${classNames} ${styleApp.app__flex}`}
        >
            <Component/>
        </motion.div>
    );
};