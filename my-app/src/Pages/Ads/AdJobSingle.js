import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchSingleAd} from "../../Api/ApiJobAds";
import AdsCard from "./AdsCard";

export default () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [jobAd, setJobAd] = useState();


    useEffect(() => {

        Promise.all([fetchSingleAd(id)])
            .then((results) => {
                const response1 = results[0];
                setJobAd(response1.data);
                console.log(response1)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])


    return (
        <>
            {loading && console.log('kraunasi :/')}
            {!loading && <AdsCard ad={jobAd} /> }
        </>
    )
}