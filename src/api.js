import axios from "axios";
const BASE_URL = "https://api.tfl.gov.uk/";

export const getTubeStatus = async () => {
    const response = await axios.get(`${BASE_URL}Line/Mode/tube/Status`);
    return response.data;
};

export const getBikeStatus = async () => {
    const response = await axios.get(`${BASE_URL}/BikePoint`);
    return response.data;
};

export const getJourney = async (from, to) => {
    const response = await axios.get(`${BASE_URL}Journey/JourneyResults/${from}/${to}`);
    return response.data;
};