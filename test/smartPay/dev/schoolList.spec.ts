import { expect } from 'chai';
import Helper from '../helpers/Helpers'
import config from '../../../config/smartPay/config.dev.json';


describe('Initial service up check', async () => {

    let token: string;//store jwt token
    let isServiceUP: boolean = false;//check if service is up : use this to skip irrelevant tests
    let didLogIn: boolean = false;//check if user got logged in : use this to skip irrelevant tests

    //TODO we can try using mocha-steps to do step by step testing

    it('should call healthCheck api and return status code 200', async function () {

        //removed config variable as we were not modifying it
        //only take config in a variable if you intend to modify it

        let resp: any = await Helper.callAPI(config.apiCollections.healthCheck);

        console.table({ "health check response": resp });

        expect(resp).to.be.not.equals(null);
        expect(resp.statusCode).to.be.equals(200);

        if (resp.statusCode === 200) {
            isServiceUP = true;
        }

    });

    it('should call login api and return status code 200', async function () {

        //Check if service is up else skip test
        if (!isServiceUP) {
            this.skip();
        }

        //removed config variable as we were not modifying it
        //only take config in a variable if you intend to modify it

        let resp: any = await Helper.callAPI(config.apiCollections.login);

        console.table({ "log in response": resp });

        expect(resp).to.be.not.equals(null);
        expect(resp.statusCode).to.be.equals(200);
        expect(resp.data.token).to.be.not.equals(null);

        if (resp.statusCode == 200) {
            token = resp.data.token;
            didLogIn = true;
        }
    });

    it('should call school list api and return status code 200', async function () {

        //Check if user got logged in else skip test
        if (!didLogIn) {
            this.skip();
        }

        //defined a variable for config because we needed to inject token inside the headers
        let schoolListConfig: any = config.apiCollections.schoolList;
        //Jwt token should be sent in headers in below format
        // Authorization : Bearer token
        schoolListConfig.headers.Authorization = `Bearer ${token}`;

        let resp: any = await Helper.callAPI(schoolListConfig);

        console.table({ "school list response": resp.data });

        expect(resp).to.be.not.equals(null);
        expect(resp.statusCode).to.be.equals(200);

    });

});