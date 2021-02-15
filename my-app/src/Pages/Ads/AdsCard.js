import {Button} from "@material-ui/core";
import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {deleteAd, fetchSingleAd} from "../../Api/ApiJobAds";


function AdsCard({ ad }) {


    const user = useSelector(state => state.user.userData)
    const history = useHistory();
    const { t } = useTranslation('ads');
    const [setIsLoading] = useState(true)


    const handleDeleteClick = (id) => {
        deleteAd(id)
            .then(() => {
                handleGoBack()
            })

    }




    const handleGoBack = () => {
        history.push("/")
    }



    return (
        <>

            <Button onClick={handleGoBack}>{t('back')}</Button>
            <Card  variant="outlined">
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                        {ad.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t('city')} {ad.location}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t('wage')} {ad.wage}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {t('description')}{ad.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        !!user ? (
                            <Button size="small">{t('cv1')}</Button>
                        ) : (
                            <Typography variant="body2" component="p">
                                {t('cv')}
                            </Typography>
                        )
                    }
                </CardActions>
            </Card>
        </>
    )
}
AdsCard.propTypes = {
    ad: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    })
}
export default AdsCard