import { expect } from 'chai';
import Helper from '../../helpers/Helpers'
import config from '../../../../config/brs/config.dev.json';

describe('Initial service up check', async () => {
    
    let token: string;//store jwt token
    let isServiceUP: boolean = false;//check if service is up : use this to skip irrelevant tests
    let didLogIn: boolean = false;//check if user got logged in : use this to skip irrelevant tests

    
    it('should call login api and return status code 200', async function () {
        //removed config variable as we were not modifying it
        //only take config in a variable if you intend to modify it

        let resp: any = await Helper.callAPI(config.apiCollections.validlogin);
        token = resp.data.token;
        let resp_data= JSON.stringify(resp.data);
        console.table({ "log in response": resp });
        console.log({"Authorization token ": token});
        console.log({"JSON Response of Login ": resp_data});

        expect(resp).to.be.not.equals(null);
        expect(resp.statusCode).to.be.equals(200);
        expect(resp.data.token).to.be.not.equals(null);

        if (resp.statusCode == 200) {
            token = resp.data.token;
            didLogIn = true;
        }
    });
    it('should call login api with invalid params and return status code 300', async function () {
          
         let resp: any = await Helper.callAPI(config.apiCollections.invalidlogin);
         token = resp.data.token;
         let resp_data= JSON.stringify(resp.data);
         console.table({ "log in response": resp });
         console.log({"Authorization token ": token});
         console.log({"JSON Response of Login ": resp_data});
 
         expect(resp).to.be.not.equals(null);
         expect(resp.statusCode).to.be.equals(401);
         expect(resp.data.token).to.be.not.equals(null);
         expect(resp.message).to.be.equals('Invalid Credentials')
 
         if (resp.statusCode == 401) {
             token = resp.data.token;
             didLogIn = false;
         }
     });
});