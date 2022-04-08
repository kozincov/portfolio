import React from 'react';
import style from './Contact.module.css'

export const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.contactContainer}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
};