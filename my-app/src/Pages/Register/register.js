import {Form, Formik, Field, ErrorMessage} from "formik";
import {useHistory} from "react-router-dom";
import * as Yup from "yup"
import {register} from "../../Api/UserApi";
import React from "react";
import "./register.css"
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


// const validationSchema = Yup.object().shape({
//     username: Yup.string()
//         .max(15, 'Username privalo buti trumpesnis nei 15')
//         .required(),
//     name: Yup.string()
//         .max(15, 'Vardas privalo buti trumpesnis nei 15')
//         .required,
//     surname: Yup.string()
//         .max(15, 'Vardas privalo buti trumpesnis nei 15')
//         .required,
//     password: Yup.string()
//         .min(4, 'Slaptazodis negali buti trumpesnis nei 4')
//         .required(),
// })

export default () => {
    const history = useHistory();

    const handleOnSubmit = (formValues, {setSubmitting}) => {
        setSubmitting(true);
        register(formValues)
            .then(() => {
                history.push("/");
            })
            .finally(() => setSubmitting(false))
    }
    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                username: '',
                password: '',
                roles: ''

            }}
            onSubmit={handleOnSubmit}
            // validationSchema={validationSchema}
            >
            {(props ) => (
                <Form>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div >
                            <Typography component="h1" variant="h5">
                                {('sign')}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field classname="Field-input"
                                           name="name"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="name"
                                           placeholder="First Name"
                                           label="First Name"
                                           autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Last Name"
                                           id="surname"
                                           label="Last Name"
                                           name="surname"
                                           autoComplete="surname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Username"
                                           id="username"
                                           label="Username"
                                           name="username"
                                           autoComplete="username"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Password"
                                           name="password"
                                           label="Password"
                                           type="password"
                                           id="password"
                                           autoComplete="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Role"
                                           name="roles"
                                           label="roles"
                                           id="roles"
                                           autoComplete="roles"
                                    />
                                </Grid>
                            </Grid>
                            <Button onSubmit={handleOnSubmit}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                {('signUp')}
                            </Button>

                        </div>
                    </Container>
                    );
                    }
                </Form>

            )}
        </Formik>
    )
}


