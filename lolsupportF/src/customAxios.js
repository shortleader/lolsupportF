import axios from 'axios';

export default function customAxios(url, callback) {
    axios(
        {
            url: '' + url,
            method: 'get',
            withCredentials: true,
        }
    ).then(function (response) {
        callback(response.data);
    });
}