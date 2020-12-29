import { expect } from 'chai';
import Helper from '../../helpers/Helpers'
import config from '../../../../config/brs/config.dev.json';

let jwtToken:string;

describe('Testing on Biller Dashboard', async () => {

    let jwtToken: string;//store jwt token
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

        it('should call User Details api and return status code 200', async function () {
        //User Details API call
        let apiOptions = config.apiCollections.getdetails;
        apiOptions.headers.Authorization+= jwtToken;

        let userLogResponse: any = await Helper.callAPI(config.apiCollections.getdetails);
        console.log("User Details response");
        console.log(userLogResponse);
        expect(userLogResponse.message).to.be.equals("Partner user account details.");
        expect(userLogResponse).to.be.not.equals(null);
        expect(userLogResponse.statusCode).to.be.equals(200);
        expect(userLogResponse.data.token).to.be.not.equals(null);

        });


        it('should call Delete api and return status code 200', async function () {
        //Delete API call

        let apiOptions = config.apiCollections.deleteidpel;
        apiOptions.headers.Authorization+= jwtToken;
        
        let deleteApiResponse: any = await Helper.callAPI(config.apiCollections.deleteidpel);
        console.log("Delete Account response");
        console.log(deleteApiResponse);
       // expect(deleteApiResponse.data.message).to.be.equals("Kamu tidak bisa menghapus IDPEL ini sekarang untuk alasan keamanan data.\n\t\tSilahkan hubungi Tim Ayoconnect untuk tindak lanjut");
        expect(deleteApiResponse).to.be.not.equals(null);
        expect(deleteApiResponse.statusCode).to.be.equals(403);
        expect(deleteApiResponse.data.token).to.be.not.equals(null);
        });
        
        it('should call User Accounts api and return status code 200', async function () {
            //Get User Accounts API call
            let apiOptions = config.apiCollections.userslist;
            apiOptions.headers.Authorization+= jwtToken;
    
            let userApiResponse: any = await Helper.callAPI(config.apiCollections.userslist);
            console.log("User Accounts response");
            console.log(userApiResponse);
            expect(userApiResponse.message).to.be.equals("Account information fetched successfully.");
            expect(userApiResponse).to.be.not.equals(null);
            expect(userApiResponse.statusCode).to.be.equals(200);
            expect(userApiResponse.data.token).to.be.not.equals(null);
        });

        it('should call User update api and return status code 200', async function () {
            //User Update API call
            let apiOptions = config.apiCollections.userupdate;
            apiOptions.headers.Authorization+= jwtToken;
    
            let userupdateApiResponse: any = await Helper.callAPI(config.apiCollections.userupdate);
            console.log("User Update response");
            console.log(userupdateApiResponse);
            expect(userupdateApiResponse.message).to.be.equals("Biller User created successfully.");
            expect(userupdateApiResponse).to.be.not.equals(null);
            expect(userupdateApiResponse.statusCode).to.be.equals(200);
            expect(userupdateApiResponse.data.token).to.be.not.equals(null);
        });

    });