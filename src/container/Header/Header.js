import React from 'react'
import style from './Header.module.scss'
import styleApp from './../../App.module.scss'
import {motion} from 'framer-motion'
import {images} from './../../constants'
import {AppWrap} from '../../wrapper'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div id={'home'} className={`${style.app__header} ${styleApp.app__flex}`}>
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className={style.app__header_info}
            >
                <div className={style.app__header_badge}>
                    <div className={`${style.badge_cmp} ${styleApp.app__flex}`}>
                        <span>👋</span>
                        <div style={{margin: 20}}>
                            <p className={styleApp.p_text}>Hello, I am</p>
                            <h1 className={styleApp.head_text}>Dmitry</h1>
                        </div>
                    </div>
                    <div className={`${style.tag_cmp} ${styleApp.app__flex}`}>
                        <p className={styleApp.p_text}>Front-end Developer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className={style.app__header_img}
            >
                <img className={style.profile_img} src={images.profile3} alt={'profile_bg'}/>

                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className={style.overlay_circle}
                    src={images.circle}
                    alt={'profile_circle'}

                />

            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className={style.app__header_circles}
            >
                {[images.redux, images.react, images.sass].map((circle, index) => (
                    <div className={`${styleApp.app__flex}`} key={`circle_${index}`}>
                        <img src={circle} alt={'circle'}/>
                    </div>
                ))}
            </motion.div>

        </div>
    );
};

export default AppWrap(Header, 'home')