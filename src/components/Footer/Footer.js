import { Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left' >
                <Typography className='footer-name' >
                    {resumeData.name}
                </Typography>
            </div>
            <div className='footer-right' >
                <Typography className='footer-copyright'>
                    Designed and Developed by <a href='/' target='_blank' >Steven González.</a>
                    <br/>
                    Clone idea from <a href='/' target='_blank' >Tavonline</a>.
                </Typography>
            </div>
        </div>
    )
}

export default Footer
