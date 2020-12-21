import { expect } from 'chai';
import Helper from '../../helpers/Helpers'
import config from '../../../../config/brs/config.dev.json';

let jwtToken:string;

describe('Testing on Biller Dashboard', async () => {

    let token: string;//store jwt token
    let didLogIn: boolean = false;//check if user got logged in : use this to skip irrelevant tests

    it('should call login api and return status code 200', async function () {

        let resp: any = await Helper.callAPI(config.apiCollections.login);
        
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
        let stub = {
            "success": true,
            "statusCode": 200,
            "message": "Partner user account details.",
            "data": {
                "HasBRS": true,
                "HasMonitoring": true,
                "HasTransactions": true,
                "createdAt": "2019-10-10 03:47:33",
                "email": "don@ayopop.com",
                "id": 43,
                "name": "Don",
                "partnerID": 27,
                "partnerName": "Ayopop test2",
                "permissions": [
                    "biller-dashboard.inquiries.list",
                    "biller-dashboard.accounts.list",
                    "biller-dashboard.transactions.download",
                    "biller-dashboard.transactions.list",
                    "biller-dashboard.users.create",
                    "biller-dashboard.users.list",
                    "biller-dashboard.users.update"
                ],
                "status": 1
            }
        };
        let apiOptions = config.apiCollections.getdetails;
        apiOptions.headers.Authorization+= jwtToken;

        let userLogResponse: any = await Helper.callAPI(config.apiCollections.getdetails);
        console.log("User Details response");
        console.log(userLogResponse);
        });


        it('should call Delete api and return status code 200', async function () {
        //Delete API call

        let apiOptions = config.apiCollections.deleteidpel;
        apiOptions.headers.Authorization+= jwtToken;

        let deleteApiResponse: any = await Helper.callAPI(config.apiCollections.deleteidpel);
        console.log("Delete Account response");
        console.log(deleteApiResponse);
        });
        
        it('should call User Accounts api and return status code 200', async function () {
            //Get User Accounts API call
         //   "statusCode": 200,
         //   "message": "Account information fetched successfully."
    
            let apiOptions = config.apiCollections.userslist;
            apiOptions.headers.Authorization+= jwtToken;
    
            let userApiResponse: any = await Helper.callAPI(config.apiCollections.userslist);
            console.log("User Accounts response");
            console.log(userApiResponse);
        });

        it('should call User update api and return status code 200', async function () {
            //User Update API call
           // "success": true,
           // "statusCode": 200,
           // "message": "Biller User created successfully."
    
            let apiOptions = config.apiCollections.userupdate;
            apiOptions.headers.Authorization+= jwtToken;
    
            let userupdateApiResponse: any = await Helper.callAPI(config.apiCollections.userupdate);
            console.log("User Update response");
            console.log(userupdateApiResponse);
        });

    });