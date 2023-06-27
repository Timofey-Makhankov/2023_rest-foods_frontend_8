import React from 'react'
import '../../style/FooterNavigation.css'
import { Link, Typography } from '@mui/material'
import { ABOUT_PAGE, CONTACT_PAGE, MENU_LIST_PAGE } from '../../Constants'

const textStyle = {
    fontSize: '20px'
}

export default function FooterNavigation() {
    return (
        <footer >
            <div className='flex-grid-div'>
                <Link color='inherit' underline='none' href={ABOUT_PAGE}>
                    <Typography style={textStyle}>About</Typography>
                </Link>
                <Link color='inherit' underline='none' href={MENU_LIST_PAGE}>
                    <Typography style={textStyle}>Menu</Typography>
                </Link>
                <Link color='inherit' underline='none' href={CONTACT_PAGE}>
                    <Typography style={textStyle}>Contact</Typography>
                </Link>
                <Typography style={textStyle}>Copyright 2023</Typography>
            </div>
        </footer>
    )
}
