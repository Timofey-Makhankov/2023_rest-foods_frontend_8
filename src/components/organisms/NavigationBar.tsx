import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { LOGIN_PAGE } from '../../Constants'

export default function NavigationBar(
    { appBarStyle = undefined }: { appBarStyle: React.CSSProperties | undefined },
) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={appBarStyle} position='static'>
                <Toolbar sx={{mr: '24px', ml: '24px'}}>
                    <Link sx={{ mr: '100px' }} href='/' color='inherit' underline='none'>
                        <Typography fontWeight={700}>REST-Foods</Typography>
                    </Link>
                    <Link sx={{ mr: '100px' }} href='/menu-list' color='inherit' underline='none'>
                        <Typography fontWeight={400}>Menu</Typography>
                    </Link>
                    <Link sx={{ mr: '100px', flexGrow: 1 }} href='#' color='inherit' underline='none'>
                        <Typography fontWeight={400}>Reservation</Typography>
                    </Link>
                    <Button component={RouterLink} color='inherit' to="/login">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
