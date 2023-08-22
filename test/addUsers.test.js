import assert from 'assert';
import greetMe from '../greet.js';
import pgPromise from 'pg-promise';
import querries from '../service/database.js';

const pgp = pgPromise();

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgres://greet_user:V1x74KGd7kbwqe6wYXZLq3OMElcFSoQ2@dpg-cj6ftrme546c73aek3q0-a.oregon-postgres.render.com/greet?ssl=true'


const db = pgp(connectionString);

let greet = greetMe()
let data = querries(db);

describe('The addUser query test', function(){

    beforeEach(async function(){
        // clean the tables before each test run
        await data.deleteAll()
    });

    it('It should add object {user_name : "lisa" } in the database table', async function(){
        
        // the Factory Function is called CategoryService
        greet.setValidateName('Lisa')
        let name = greet.getValidateName()
        await data.addUsers(name)
        let result = await data.getUsers()
    
        assert.deepEqual({user_name: 'lisa'}, result[0]);

    });

    it('It should return user_name "precious" in the database', async function(){
        
        // the Factory Function is called CategoryService
        greet.setValidateName('Lilly')
        let name = greet.getValidateName()
        await data.addUsers(name)
        let result = await data.getUsers()
    
        assert.equal('lilly', result[0].user_name);

    });
    it('It should return user_name "precious" in the database', async function(){
        
        // the Factory Function is called CategoryService
        greet.setValidateName('Jen')
        greet.setValidateName('Paul')
        let name = greet.getValidateName()
        await data.addUsers(name)
        let result = await data.getUsers()
    
        assert.equal('paul', result);

    });
})