import React, {useState} from 'react';
import style from './Projects.module.scss'
import styleApp from './../../App.module.scss'
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {AppWrap, MotionWrap} from "../../wrapper";
import {motion} from 'framer-motion';
import images from "../../constants/images";

const Projects = () => {

    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
    const project = [
        {
            title: 'TodoList',
            description: '',
            imgUrl: images.about01,
            codeLink: '',
            tags: 'React',
        },
        {
            title: 'Social-network',
            description: '',
            imgUrl: images.about02,
            codeLink: '',
            tags: 'React',
        },
        {
            title: 'Chees',
            description: '',
            imgUrl: images.about03,
            codeLink: '',
            tags: 'All',
        },
    ]
    const [filterProject, setFilterProject] = useState([])


    const HandleProjectsFilter = (item) => {

        setActiveFilter(item);
        setAnimateCard([{y: 100, opacity: 0}]);

        setTimeout(() => {
            setAnimateCard([{y: 0, opacity: 1}]);

            if (item === 'All') {
                setFilterProject(project);
            } else {
                setFilterProject(project.filter((project) => project.tags.includes(item)));
            }
        }, 500);
    }

    return (
        <>
            <h2 className={styleApp.head_text}>My Creative <span>Portfolio</span> section</h2>

            <div className={style.app__project_filter}>
                {['Game', 'React', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            HandleProjectsFilter(item)
                        }}
                        className={`${style.app__project_filterItem} ${styleApp.app__flex} ${styleApp.p_text} ${activeFilter === item ? style.item_active : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className={style.app__project_portfolio}
            >
                {project.map((project, index) => (
                    <div key={index} className={`${style.app__project_item} ${styleApp.app__flex}`}>
                        <div className={`${style.app__project_img} ${styleApp.app__flex}`}>
                            <img src={project.imgUrl} alt={project.name}/>

                            <motion.div
                                whileHover={{opacity: [0, 1]}}
                                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                className={`${style.app__project_hover} ${styleApp.app__flex}`}
                            >
                                <a href={project.projectLink} target="_blank" rel="noreferrer">

                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.90]}}
                                        transition={{duration: 0.25}}
                                        className={styleApp.app__flex}
                                    >
                                        <AiFillEye/>
                                    </motion.div>
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.90]}}
                                        transition={{duration: 0.25}}
                                        className={styleApp.app__flex}
                                    >
                                        <AiFillGithub/>
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className={`${style.app__project_content} ${styleApp.app__flex}`}>
                            <h4 className={styleApp.bold_text}>{project.title}</h4>
                            <p className={styleApp.p_text} style={{marginTop: 10}}>{project.description}</p>

                            <div className={`${style.app__project_tag} ${styleApp.app__flex}`}>
                                <p className={styleApp.p_text}>{project.tags}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(MotionWrap(Projects, style.app__projects), 'projects', styleApp.app__primarybg)