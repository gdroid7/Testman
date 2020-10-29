import { expect } from 'chai';
import Helper from '../helpers/Helpers'
import config from '../../../config/smartPay/config.dev.json';

describe('Initial service up check', async () => {

    it('should call healthCheck api and return status code 200', async () => {
        let healthCheckConfig = config.apiCollections.healthCheck;
        let resp: any = Helper.callAPI(healthCheckConfig);
        expect(resp).to.be.not.equals(null);
    });

    //login
    it('should call healthCheck api and return status code 200', async () => {
        let healthCheckConfig = config.apiCollections.healthCheck;
        let resp: any = Helper.callAPI(healthCheckConfig);
        expect(resp).to.be.not.equals(null);
    });

});