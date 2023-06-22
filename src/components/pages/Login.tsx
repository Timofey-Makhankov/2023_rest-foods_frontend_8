import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import NavigationBar from '../organisms/NavigationBar'

export default function Login() {
  return (
    <>
    <NavigationBar appBarStyle={undefined}/>
    <form>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
            <Grid item xs={12}>
                <Typography align='center' style={{ marginTop: '4em' }}>Login</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                id='email'
                name='email'
                label='Email'
                type='email'
                required/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                id='password'
                name='password'
                label='Password'
                type='password'
                required/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Login</Button>
            </Grid>
        </Grid>
    </form>
    </>
  )
}
