import React from 'react'
import { Button } from "@material-ui/core"

import  './Button.css'

const CustomButton = ({text, icon, link, type}) => {
    return (
        <Button className='custom-button' type={type} target={'_blank'} href={link} endIcon={icon ? <div className='button-icon-container' >{icon}</div> : null} >
            <span className='button-text' >
                {text}
            </span>
        </Button>
    )
}

export default CustomButton;
