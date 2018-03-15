import axios from 'axios';
const API_KEY = "aF2YpfnHVvOQTY294rS1TluRli4JUlUzdkcPv3Sf";
export const FETCH_DATA = "FETCH_DATA";

export function fetchDataNasa(action){
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const request = axios.get(url);
    return{
        type: FETCH_DATA,
        payload: request
    }
}