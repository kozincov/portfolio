import React from 'react';
import style from './About.module.scss'
import styleApp from './../../App.module.scss'
import {motion} from 'framer-motion';
import {AppWrap} from "../../wrapper";
import images from "../../constants/images";

const abouts = [
    {
        title: 'Frontend Development',
        description: 'I am a frontend developer with a passion for building beautiful and functional web application',
        imgUrl: images.about01
    },
    {title: 'Front-end Development', description: 'I am a good developer', imgUrl: images.about02},
    {title: 'Front-end Development', description: 'I am a good developer', imgUrl: images.about03},
    {title: 'Front-end Development', description: 'I am a good developer', imgUrl: images.about04},
]

const About = () => {
    return (
        <>
            <h2 className={styleApp.head_text}>I know
                that <span>Good Development</span><br/>means <span>Good Business</span>
            </h2>

            <div className={style.app__profiles}>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className={style.app__profile_item}
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title}/>
                        <h2 className={styleApp.bold_text} style={{marginTop: 20}}>{about.title}</h2>
                        <p className={styleApp.p_text} style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};
export default AppWrap(About, 'about')