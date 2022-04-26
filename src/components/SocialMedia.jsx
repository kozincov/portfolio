import React from 'react';
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import styleApp from './../App.module.scss'


export const SocialMedia = () => (
    <div className={styleApp.app__social}>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaFacebookF/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>
);
