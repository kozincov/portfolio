import React, {useState} from 'react';
import style from './Nav.module.scss'
import styleApp from './../../App.module.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'


export const Nav = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className={style.app__nav}>
            <ul className={style.app__nav_links}>
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                    <li className={`${styleApp.app__flex} ${styleApp.p_text}`} key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className={style.app__nav_menu}>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <motion.div whileInView={{x: [300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};