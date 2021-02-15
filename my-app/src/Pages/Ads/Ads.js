import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {fetchAds} from "../../Api/ApiJobAds";
import styles from './Ads.css';
import {Link} from "react-router-dom";



class Ads extends Component {



    constructor(props) {
        super(props);

        this.state = {
            ads: []
        }
    }


    componentDidMount() {
        fetchAds().then((res) => {
            this.setState({ads: res.data})
        })
    };

    render() {

        return (

            <Card >
                { this.state.ads.map(
                    ads =>
                        <CardContent>
                            <tr key = {ads.id}>
                                <Typography color="textSecondary" gutterBottom>
                                    {ads.name}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                </Typography>
                            </tr>
                            <Typography className={styles.city} variant="body2" component="p">
                                Miestas:  {ads.location}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {ads.wage}
                            </Typography>
                            <Link to={`/ad/${ads.id}`}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                        </CardContent>,



                )
                }
            </Card>
        );
    }
}

export default Ads