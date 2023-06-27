import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { HOME_PAGE, LOGIN_PAGE, MENU_LIST_PAGE, RESERVATION_PAGE } from '../../Constants'

/**
 * A Navigation Bar with extra styling
 * @param appBayStyle takes a CSSProperties Type for styling the Navigation Bar 
 * otherwise takes undefined if no extra styling is required
 * @returns a Navigation Bar with given styling as a component
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function NavigationBar(
    { appBarStyle = undefined }: { appBarStyle: React.CSSProperties | undefined },
) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={appBarStyle} position='static'>
                <Toolbar sx={{mr: '24px', ml: '24px'}}>
                    <Link sx={{ mr: '100px' }} href={HOME_PAGE} color='inherit' underline='none'>
                        <Typography fontWeight={700}>REST-Foods</Typography>
                    </Link>
                    <Link sx={{ mr: '100px' }} href={MENU_LIST_PAGE} color='inherit' underline='none'>
                        <Typography fontWeight={400}>Menu</Typography>
                    </Link>
                    <Link sx={{ mr: '100px', flexGrow: 1 }} href={RESERVATION_PAGE} color='inherit' underline='none'>
                        <Typography fontWeight={400}>Reservation</Typography>
                    </Link>
                    <Button component={RouterLink} color='inherit' to={LOGIN_PAGE}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
