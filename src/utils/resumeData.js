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
    },
    about: 'I am passionate about learning and understanding new business models in order to find the best way technology can help to improve the company processes and always giving my value added in every project or task that I am responsible of.',
    experiences: [
        {
            title:'Integration Developer',
            date:'2018  - Present',
            description: '• Develop APIs micro services.\n• Support internal applications.\n• Participate taking customer requirements.\n• Back end Development. \n• Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.'
        },
        {
            title:'Integration Developer 2',
            date:'2016  - Present',
            description: '• Develop APIs micro services.\n• Support internal applications.\n• Participate taking customer requirements.\n• Back end Development. \n• Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.'
        },
        {
            title:'Integration Developer 3',
            date:'2015  - Present',
            description: '• Develop APIs micro services.\n• Support internal applications.\n• Participate taking customer requirements.\n• Back end Development. \n• Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.'
        }
    ],
    educations: [
        {
            title:'UTN',
            date:'2018  - Present',
            description: '• Develop APIs micro services.\n• Support internal applications.\n• Participate taking customer requirements.\n• Back end Development. \n• Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.'
        },
        {
            title:'Integration Developer 2',
            date:'2016  - Present',
            description: '• Develop APIs micro services.\n• Support internal applications.\n• Participate taking customer requirements.\n• Back end Development. \n• Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.'
        },
        {
            title:'Integration Developer 3',
            date:'2015  - Present',
            description: '• Develop APIs micro services.\n• Support internal applications.\n• Participate taking customer requirements.\n• Back end Development. \n• Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.'
        }
    ],
    services: [
        {
            title: 'Web Dev',
            description:'I have been working with several......',
            icon: <FacebookIcon />
        },
        {
            title: 'Web Dev',
            description:'I have been working with several......',
            icon: <FacebookIcon />
        },
        {
            title: 'Web Dev',
            description:'I have been working with several......',
            icon: <FacebookIcon />
        }
    ],
    skills: [
        {
            title: 'Back end',
            description: ['Node JS', 'Python', 'Java']
        },
        {
            title: 'Databases',
            description: ['SQL Server', 'MySQL', 'Mongo DB']
        },
        {
            title: 'Source Control',
            description: ['Git', 'GitHub', 'GitLab', 'SourceSafe']
        }
    ]
}