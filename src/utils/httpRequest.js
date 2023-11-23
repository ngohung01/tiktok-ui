import axios from 'axios';

console.log(process.env)
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, option = {}) => {
    const res = await httpRequest.get(path, option);
    return res.data;
};

const post = async (path, body = {}, options = {}) => {
    const res = await httpRequest.post(path, body, options);
    return res.data;
}

export { get,post };
