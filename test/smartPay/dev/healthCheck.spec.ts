import { expect } from 'chai';
import Helper from '../helpers/Helpers'
import config from '../../../config/smartPay/config.dev.json';
import configTypes from '../../../src/types';

describe('Initial service up check', async () => {

    it('should call healthCheck api and return status code 200', async () => {
        let healthCheckConfig: any = config.apiCollections.healthCheck;
        let resp: any = await Helper.callAPI(healthCheckConfig);
        console.table({ "response": resp });
        expect(resp).to.be.not.equals(null);
    });

});