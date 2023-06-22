import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavigationBar({ style = undefined }: { style: React.CSSProperties | undefined }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={style} position='static'>
                <Toolbar>
                    <Link sx={{ mr: '100px' }} href='/' color='inherit' underline='none'>
                        <Typography fontWeight={700}>REST-Foods</Typography>
                    </Link>
                    <Link sx={{ mr: '100px' }} href='#' color='inherit' underline='none'>
                        <Typography fontWeight={400}>Menu</Typography>
                    </Link>
                    <Link sx={{ mr: '100px', flexGrow: 1 }} href='#' color='inherit' underline='none'>
                        <Typography fontWeight={400}>Reservation</Typography>
                    </Link>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
