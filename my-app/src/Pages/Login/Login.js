import React from "react";
import {Form, Formik, Field, ErrorMessage} from "formik";
import {useHistory , useLocation} from "react-router-dom";
import {login} from "../../Api/UserApi";
import {useDispatch} from "react-redux";
import {setJwt, setUserData} from "../../store/slices/userSlice"
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Login.css"


export default () => {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()


    const postLogin = (loginData, { setSubmitting }) => {
        setSubmitting(true)

        login(loginData)
            .then(({data, headers: { authorization }}) => {
                dispatch(setUserData(data))
                dispatch(setJwt(authorization))

                const { from } = location.state || {
                    from: {
                        pathname: '/'
                    }
                }

                history.push(from)
            })
            .finally(() => setSubmitting(false))
    }

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            onSubmit={postLogin}
        >
            {(props) => (
                <>
                    <Form className="form-login">
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div >
                                <Typography  className="title" component="h1" variant="h5">
                                    {('signIn')}
                                </Typography>
                                <Field className="Field-input"
                                       variant="outlined"
                                       placeholder="Username"
                                       margin="normal"
                                       required
                                       fullWidth
                                       id="username"
                                       label="Username"
                                       name="username"/>
                                <Field className="Field-input"
                                       variant="outlined"
                                       margin="normal"
                                       placeholder="Password"
                                       required
                                       fullWidth
                                       name="password"
                                       label="Password"

                                       type="password"
                                       id="password"
                                />

                                <Button
                                    className="sign-in"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                    {('sign')}
                                </Button>

                            </div>
                        </Container>
                        );
                        }
                    </Form>
                </>
            )}
        </Formik>
    )
}

