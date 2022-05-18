import React from 'react';
import style from './Skills.module.scss'
import styleApp from './../../App.module.scss'
import {AppWrap, MotionWrap} from '../../wrapper';
import {motion} from 'framer-motion';
import images from '../../constants/images';
import ReactTooltip from 'react-tooltip';

const Skills = () => {

    const skills = [
        {name: 'JavaScript', icon: images.javascript,},
        {name: 'JavaScript', icon: images.typescript,},
        {name: 'JavaScript', icon: images.css,},
        {name: 'JavaScript', icon: images.html,},
    ]
    const experiences = [
        {
            year: '2020',
            works: [
                {
                    name: 'Frontend Developer',
                    company: 'Google',
                    desc: 'I worked as a frontend developer'
                },
                {
                    name: 'Frontend Developer',
                    company: 'Google',
                    desc: 'I worked as a frontend developer'
                }
            ]
        },
        {
            year: '2021',
            works: [
                {
                    name: 'Frontend Developer',
                    company: 'yandex',
                    desc: 'I worked as a frontend developer'
                },
                {
                    name: 'Frontend Developer',
                    company: 'Google',
                    desc: 'I worked as a frontend developer'
                }
            ]
        },
]

    return (
        <>
            <h2 className={styleApp.head_text}>Skills & Experiences</h2>

            <div className={style.app__skills_container}>
                <motion.div className={style.app__skills_list}>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className={`${style.app__skills_item} ${styleApp.app__flex}`}
                            key={skill.name}
                        >
                            <div
                                className={styleApp.app__flex}
                                style={{backgroundColor: skill.bgColor}}
                            >
                                <img src={skill.icon} alt={skill.name}/>
                            </div>
                            <p className={styleApp.p_text}>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className={style.app__skills_exp}>
                    {experiences?.map((experience) => (
                        <motion.div
                            className={style.app__skills_expItem}
                            key={experience.year}
                        >
                            <div className={style.app__skills_expYear}>
                                <p className={styleApp.bold_text}>{experience.year}</p>
                            </div>
                            <motion.div className={style.app__skills_expWorks}>
                                {experience?.works?.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className={style.app__skills_expWork}
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className={styleApp.bold_text}>{work.name}</h4>
                                            <p className={styleApp.p_text}>{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className={style.skills_tooltip}
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Skills, style.app__skills), 'skills', styleApp.app__whitebg)