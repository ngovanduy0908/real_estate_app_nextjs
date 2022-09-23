import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c4dd9408famsheb1be946287f5dbp1f110djsn4141e819b70d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}