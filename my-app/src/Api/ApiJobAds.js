import HTTP from "./index"

export const fetchAds = () => HTTP.get('/ad');

export const addAd = (Ad) =>HTTP.post('/ad', Ad)

export const deleteAd = (id) => HTTP.delete(`/ad/${id}`);

export const fetchSingleAd = (id) => HTTP.get(`/ad/${id}`);
