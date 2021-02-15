import {Form, Formik, Field, ErrorMessage} from "formik"
import { useHistory } from "react-router-dom";
import {addAd} from "../../Api/ApiJobAds";
import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useTranslation} from "react-i18next";


export default () => {
    const history = useHistory();
    const {t} = useTranslation("adform");

    const handleOnSubmit = (adData, { setSubmitting }) => {
        setSubmitting(true);
        addAd(adData)
            .then(() => {
                history.push("/");
            })
            .finally( () => {
                setSubmitting(false)
            })
    }

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                wage: '',
                location: ''
            }}
            onSubmit={handleOnSubmit}>
            {(props) => (

                <Form>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div >
                            <Typography component="h1" variant="h5">
                                {t('add')}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field classname="Field-input"
                                           name="name"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="name"
                                           placeholder="Name"
                                           autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Description"
                                           id="description"
                                           name="description"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Wage"
                                           id="wage"
                                           label="wage"
                                           name="wage"
                                           autoComplete="wage"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field classname="field-input"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           placeholder="Location"
                                           name="location"
                                           id="location"
                                    />
                                </Grid>
                            </Grid>
                            <Button onSubmit={handleOnSubmit}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                {t('submit')}
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
