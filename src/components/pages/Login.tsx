import { Alert, AlertTitle, Button, Grid, TextField, Typography } from '@mui/material'
import NavigationBar from '../organisms/NavigationBar'
import AuthorisationService from '../../service/AuthorisationService'
import { DASHBOARD_PAGE, JWT_KEY } from '../../Constants'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'

/**
 * This Component is the Login Page, where the user can login
 * @returns the Login page Component
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function Login() {
    const navigate = useNavigate()
    const isEmpty = (str: string | undefined) => (str === undefined ? false : true)

    const [alert, setAlert] = useState<boolean>(false)
    const [alertContent, setAlertContent] = useState<string>("")

    const login = (username: string, password: string) => {
        console.log("inside login function")
        AuthorisationService().logInUser(username, password)
            .then((value: string) => {
                localStorage.setItem(JWT_KEY, value)
                setAlert(false)
                navigate(DASHBOARD_PAGE)
            })
            .catch((error) => {
                console.log(error)
                setAlertContent(error.response.data)
                setAlert(true)
            })
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            const errors: { email?: string, password?: string } = {}
            if (!values.email) {
                errors.email = "Required"
            } /*else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }*/
            if (!values.password) {
                errors.password = "Required"
            } else if (values.password.length < 4) {
                errors.password = "Password must be at least 4 characters"
            } else if (values.password.length > 50) {
                errors.password = "Password can't be over 50 characters"
            }
            return errors
        },
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("submitting")
                login(values.email, values.password)
                setSubmitting(false)
            }, 400);
        }
    })

    return (
        <>
            <NavigationBar appBarStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: "black", boxShadow: "none" }} />
            <form id='form' onSubmit={formik.handleSubmit}>
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3} sx={{ mt: 10 }}>
                    <Grid item xs={12}>
                        <Typography variant='h2' fontWeight={700} component='h1' align='center' style={{ marginTop: '2em' }}>Login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='email'
                            name='email'
                            label='Email'
                            type='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={isEmpty(formik.errors.email)}
                            helperText={isEmpty(formik.errors.email) ? formik.errors.email : ""}
                            required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='password'
                            name='password'
                            label='Password'
                            type='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={isEmpty(formik.errors.password)}
                            helperText={isEmpty(formik.errors.password) ? formik.errors.password : ""}
                            required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type='submit' onClick={formik.submitForm}>Login</Button>
                    </Grid>
                </Grid>
            </form>
            {
                alert && <Alert severity='error'>
                    <AlertTitle>Error - Unable to Log in</AlertTitle>
                    {alertContent}
                </Alert>
            }
        </>
        /*
        <>
            <NavigationBar appBarStyle={{ backgroundColor: 'rgb(37, 37, 37)' }} />
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validate={(values) => {
                    const errors: { email?: string, password?: string } = {}
                    if (!values.email) {
                        errors.email = "Required"
                    } /*else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }
                    if (!values.password) {
                        errors.password = "Required"
                    } else if (values.password.length < 4) {
                        errors.password = "Password must be at least 4 characters"
                    } else if (values.password.length > 50) {
                        errors.password = "Password can't be over 50 characters"
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log("submitting")
                        login(values.email, values.password)
                        setSubmitting(false)
                    }, 400);
                }}
            >
                {({ values, submitForm, isSubmitting, errors, handleChange }) => (
                    <form id='form' onSubmit={submitForm}>
                        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3} sx={{ mt: 10 }}>
                            <Grid item xs={12}>
                                <Typography variant='h2' fontWeight={700} component='h1' align='center' style={{ marginTop: '4em' }}>Login</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='email'
                                    name='email'
                                    label='Email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    error={isEmpty(errors.email)}
                                    helperText={isEmpty(errors.email) ? errors.email : ""}
                                    required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='password'
                                    name='password'
                                    label='Password'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    error={isEmpty(errors.password)}
                                    helperText={isEmpty(errors.password) ? errors.password : ""}
                                    required />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" type='submit' onClick={submitForm} disabled={isSubmitting}>Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                )}</Formik>
            {
                alert && <Alert severity='error'>
                    <AlertTitle>Error - Unable to Log in</AlertTitle>
                    {alertContent}
                </Alert>
            }
        </>*/
    )
}
