import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
    name: 'Steven González',
    title: 'Software Developer',

    email: 'steven@drys.tech',
    phone: '+506 8634-7798',
    address: 'Guácima, Alajuela, Costa Rica',

    socials: {
        facebook: {
            url: 'https://facebook.com/',
            text: 'My FB',
            icon: <FacebookIcon />
        },
        linkedIn: {
            url: 'https://www.linkedin.com/',
            text: 'My LI',
            icon: <LinkedInIcon />
        },
        github: {
            url: 'https://github.com/',
            text: 'My GH',
            icon: <GitHubIcon />
        }
    }
}