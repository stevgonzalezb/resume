import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TelegramIcon from '@material-ui/icons/Telegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../utils/resumeData.js';
import CustomButton from '../Button/Button'

import './Header.css'

const Header = (props) => {
    const pathName = props?.location?.pathname

    return (
        <Navbar expand="lg" sticky='top' className='header'>
            <Nav.Link as={NavLink} to='/' className='header-nav-link' >
                <Navbar.Brand className='header-home'>
                    <HomeRoundedIcon />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header-left' >
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header-link-active' : 'header-link'}>Resume</Nav.Link>
                    {/*<Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header-link-active' : 'header-link'}>Portfolio</Nav.Link>*/}
                </Nav>

                <div className='header-right'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].url} target='_blank' rel="noreferrer">{resumeData.socials[key].icon}</a>
                    ))}
                <CustomButton text='Hire Me' icon={<TelegramIcon />} link={`mailto:steven@drys.tech?subject=I%20want%20to%20hire%20you&body=I'm%20interested%20in%20learning%20to%20play%20the:%0A%0AThe%20days%20of%20the%20week%20that%20work%20best%20for%20me%20are:%0A%0AThe%20best%20times%20for%20lessons%20are:%20`} />
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
