import React from 'react'

import  './Button.css'

const Button = ({text, icon}) => {
    return (
        <Button className='custom-buttton' endIcon={icon ? (<div className='button-icon-container' >{icon}</div>) : null} >
            <span className='button-text' >
                {text}
            </span>
        </Button>
    )
}

export default Button
