import axios from 'axios';

export const ApiUrl = 'https://20.51.216.44/'

const BaseService = axios.create ({
    baseURL: ApiUrl,
})

export default BaseService;
