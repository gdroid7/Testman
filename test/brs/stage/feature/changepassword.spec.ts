import { expect } from 'chai';
import Helper from '../../helpers/Helpers'
import config from '../../../../config/brs/config.stage.json';

let jwtToken:string;

describe('Testing for Password feature on Biller Dashboard', async () => {

    let token: string;//store jwt token
    let didLogIn: boolean = false;//check if user got logged in : use this to skip irrelevant tests

        it('should call login api and return status code 200', async function () {

        let resp: any = await Helper.callAPI(config.apiCollections.validlogin);
        
        expect(resp).to.be.not.equals(null);
        expect(resp.statusCode).to.be.equals(200);
        expect(resp.data.token).to.be.not.equals(null);
        
        if (resp.statusCode == 200) {
            jwtToken = resp.data.token;
            didLogIn = true;
        }
        });

        it('should call Change Password api and return status code 200', async function () {
        //Change Password API call
        let apiOptions = config.apiCollections.updatepassword;
        apiOptions.headers.Authorization+= jwtToken;

        let userLogResponse: any = await Helper.callAPI(config.apiCollections.updatepassword);
        console.table({"update password response": userLogResponse});
        expect(userLogResponse).to.be.not.equals(null);
        expect(userLogResponse.statusCode).to.be.equals(200);
        expect(userLogResponse.data.token).to.be.not.equals(null);
        expect(userLogResponse.message).to.be.equals('Password updated successfully');

        });

        it('should call Set User password api and return status code 200', async function () {
            //Set Password API call
            let apiOptions = config.apiCollections.setpassword;
            apiOptions.headers.Authorization+= jwtToken;
    
            let userLogResponse: any = await Helper.callAPI(config.apiCollections.setpassword);
            console.table({"set password response": userLogResponse});
            expect(userLogResponse).to.be.not.equals(null);
            expect(userLogResponse.statusCode).to.be.equals(200);
            expect(userLogResponse.data.token).to.be.not.equals(null);
            
            
        });

    });