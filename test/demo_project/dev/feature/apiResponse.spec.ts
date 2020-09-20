import { expect } from 'chai';
import axios from 'axios';

describe('API Testing Example', async () => {

    it('should fetch data from api and match with the stub', async () => {
        let stub = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };

        let { data }: any = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data.userId).to.be.equal(stub.userId);
        expect(data.userId).to.be.a('number');
        expect(data.title).to.be.equal(stub.title);
        expect(data.title.length).to.be.equal(stub.title.length);
        expect(data.completed).to.be.equal(false);
    });
});