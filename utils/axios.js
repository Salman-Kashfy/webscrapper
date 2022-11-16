const axios = require('axios')
const axiosService = axios;
const amazon = axios.create({
    baseURL: 'https://www.amazon.com',
    timeout: 30 * 1000
});

module.exports = {
    axiosService,
    amazon
}
