import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Steven González',
    title: 'Software Engineer',

    email: 'steven@drys.tech',
    phone: '+506 8634-7798',
    address: 'Guácima, Alajuela, Costa Rica',

    socials: {
        LinkedIn: {
            url: 'https://www.linkedin.com/in/stevgonzalezb/',
            text: 'stevgonzalezb',
            icon: <LinkedInIcon />
        },
        GitHub: {
            url: 'https://github.com/stevgonzalezb',
            text: 'stevgonzalezb',
            icon: <GitHubIcon />
        }
    },
    about: 'I am passionate about learning and understanding new business models in order to find the best way technology can help to improve the company processes and always giving my value added in every project or task that I am responsible of.',
    experiences: [
        {
            title:'Integration Developer & Consultant',
            date:'Smartsoft S.A | Jun 2018 - Present',
            description: `• Develop API Rest, SOAP Services with Node JS.
            • Support legacy internal applications.
            • Back end Development.
            • Participate taking customer requirements.
            • Develop complex reports with SQL Server, Reporting Services, SSIS, etc.
            • Use technologies such: SQL Server, .NET C#, Javascript, Java, Apache Camel, Visual Basic, GitLab, Node JS, PHP, Redis, Elastic Search, Active MQ, NoSQL DB, SOAP, Rest API, web sockets.`
        },
        {
            title:'Software Engineer',
            date:'Self Employed | Dec 2019  - Present',
            description: `• Integrations with Google Calendar, Google Drive, cPanel, Web Sites.
            • IT Business & Marketing Consulting.
            • Web Scrapping using Python(Pandas, Numpy, BeautifulSoup).
            • Some technologies used: Firebase, Google Cloud, Google APIs, Payloads, Webhooks, Node JS, JSON, SSH, Python.`
        },
        {
            title:'Software Support',
            date:'Palantir S.A | May 2016  - May 2018',
            description: `• Main support for different customers from CA and Caribbean.
            • Lead on situations that work was so much, to achieve the company goal.
            • Used technologies such: SQL Server, T-SQL, MS Access, MS Excel, ETL, Crystal Reports.`
        }
    ],
    educations: [
        {
            title:'Software Engineering',
            date:'Barchelor, Universidad Técnica Nacional | 2016  - 2021',
            description: '• Beginners student tutoring'
        },
        {
            title:'Technical High School & Networking IT ',
            date:'CTP Jesús Ocaña Rojas | 2012  - 2014',
            description: `• CCNA 1,2 & 3 modules finished.`
        }
    ],
    certifications: [
        {
            title:'Lean Six Sigma Yellow Belt (ICYB)',
            date:'VMEdu Inc. | March 2020  - March 2023',
            description: ''
        },
        {
            title:'Scrum Fundamentals Certified (SFC)',
            date:'VMEdu Inc. | March 2020  - March 2023',
            description: ``
        },
        {
            title:'Advanced SQL for Data Scientists',
            date:'LinkedIn Learning | Feb 2020',
            description: ``
        },
        {
            title:'Business English Level Test',
            date:'Idioma Internacional | May 2020',
            description: `B2+ English Level`
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
            title: 'Back End',
            description: ['Node JS', '.NET / C#', 'Python', 'Java', 'Cloud Functions', 'Firebase']
        },
        {
            title: 'Front & Design',
            description: ['React JS', 'HTML', 'CSS', 'Wordpress', 'Elementor']
        },
        {
            title: 'Data Structures',
            description: ['SQL Server', 'MySQL', 'NoSQL DB', 'Redis', 'Active MQ', 'Rabbit MQ', 'Elastic Search']
        },
        {
            title: 'Source Control',
            description: ['Git', 'GitHub', 'GitLab', 'SourceSafe']
        }
    ],
    portfolio: [
        {
            tag: 'React',
            image: "https://direct.rhapsody.com/imageserver/images/alb.120624897/500x500.jpg",
            title: 'Resume 1',
            caption: 'Short descriptoin',
            description: 'thi is my prpject description.',
            links: [
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                }
            ]
        },
        {
            tag: 'React',
            image: "https://direct.rhapsody.com/imageserver/images/alb.120624897/500x500.jpg",
            title: 'Resume 2',
            caption: 'Short descriptoin',
            description: 'thi is my prpject description.',
            links: [
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                }
            ]
        },
        {
            tag: 'Backend',
            image: 'https://direct.rhapsody.com/imageserver/images/alb.120624897/500x500.jpg',
            title: 'python 1',
            caption: 'Short descriptoin',
            description: 'thi is my prpject description.',
            links: [
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                },
                {
                    link: 'https://google.com',
                    icon: <FacebookIcon />
                }
            ]
        }
    ]
}