import axios from 'axios';
import config from '../../../config/brs/config.stage.json';
export default class Helpers {

    private static baseURL: string = config.baseUrl;

    static async callAPI(config: any) {

        if (config.method.toLowerCase() == 'get') {
            return await axios.get(this.baseURL + config.endpoint, config.body)
                .then(r => {
                    return r.data;
                }).catch(e => {
                    return e.response.data;
                });

        } else if (config.method.toLowerCase() == 'post') {
            return await axios.post(this.baseURL + config.endpoint, config.body, { headers: config.headers })
                .then(r => {
                    return r.data;
                }).catch(e => {
                    return e.response.data;
                });
        }

    }
}