import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux";
import { onSignup } from '../store/action/user.actions';
const theme = createTheme();

export function _Signup({ history, onSignup }) {

    const [user, setUser] = useState({})
    let navigate = useNavigate()
    async function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        const fName = userObject.given_name
        const lName = userObject.family_name
        userObject = {
            username: userObject.name,
            fullname: (fName + ' ' + lName),
            imgUrl: userObject.picture,
        }
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true;
        await onSignup(userObject)
        navigate('/board')
    }

    function handleSignOut(event) {
        setUser({})
        document.getElementById("signInDiv").hidden = false;

    }

    useEffect(() => {
        /*global google */
        google.accounts.id.initialize({
            client_id: "190609179876-3sarhc8mon0n8g4n1efc36ocnbfkp9dq.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )

        google.accounts.id.prompt()
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const fName = data.get('firstName')
        const lName = data.get('lastName')
        const user = {
            username: data.get('email'),
            fullname: (fName + ' ' + lName),
            password: data.get('password'),
        }
        await onSignup(user)
        navigate('/board')

    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <div id="signInDiv"></div>
                {Object.keys(user).length != 0 &&
                    < button onClick={(e) => handleSignOut(e)}>Sign Out</button>
                }
                {user &&
                    <div>
                        <img src={user.picture} alt="" />
                        <h3>{user.name}</h3>
                    </div>
                }
            </Container>
        </ThemeProvider >
    )
}


function mapStateToProps(storeState) {
    return {
        user: storeState.userModule.user,
    }
}
const mapDispatchToProps = {
    onSignup,
}

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup)

// 190609179876-3sarhc8mon0n8g4n1efc36ocnbfkp9dq.apps.googleusercontent.com

// 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   secret