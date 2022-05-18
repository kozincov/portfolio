import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import styleApp from './../../App.module.scss'
import style from './Contact.module.scss'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        // client.create(contact)
        //     .then(() => {
        //         setLoading(false);
        //         setIsFormSubmitted(true);
        //     })
        //     .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className={styleApp.head_text}>Take a coffee & chat with me</h2>

            <div className={style.app__contact_cards}>
                <div className={style.app__contact_card}>
                    <img src={images.email} alt="email" />
                    <a href="mailto:kozincov1998@gmail.com" className={styleApp.p_text}>kozincov1998@gmail.com</a>
                </div>
                <div className={style.app__contact_card}>
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+375 33 669 29 36" className={styleApp.p_text}>+375 (33) 669-29-36</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className={`${style.app__contact_form} ${styleApp.app__flex}`}>
                    <div className={styleApp.app__flex}>
                        <input className={styleApp.p_text} type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                    </div>
                    <div className={styleApp.app__flex}>
                        <input className={styleApp.p_text} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
            <textarea
                className={styleApp.p_text}
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
            />
                    </div>
                    <button type="button" className={styleApp.p_text} onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                    <h3 className={styleApp.head_text}>
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Contact, style.app__contact),
    'contact',
    styleApp.app__primarybg,
);