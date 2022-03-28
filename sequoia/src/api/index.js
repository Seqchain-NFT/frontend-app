import axios from "axios";

export const serverUrl = 'https://dev.seqchain.com/api/creature/'

export const axiosInstance = axios.create({
    baseURL: serverUrl,
});

export const handle = (promise) => {
    return promise
        .then(data => ([data.data, undefined]))
        .catch(error => Promise.resolve([undefined, error.data?.message || error.message || error]));
}
