import axios from 'axios';
import config from '../../../config/smartPay/config.dev.json';

let baseURL: string = config.baseURL;
export default class Helpers {

    baseURL: string = config.baseURL;

    static async callAPI(config: any) {

        if (config.method.toLowerCase() == 'get') {

            return await axios.get(baseURL + config.endpoint, config.body);

        } else if (config.method.toLowerCase() == 'post') {

            return await axios.post(config.endpoint, config.body);

        }

    }
}