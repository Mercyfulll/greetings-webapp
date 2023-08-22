import assert from 'assert';
import greetMe from '../greet.js';

describe("The greetedUsers function", function(){

    it("It should return an object of names and count ", function(){

        let greet = greetMe();
        greet.greetedUsers('Sylvester');

        assert.deepEqual({sylvester : 1},greet.getNamesGreetings());
    })

    it("It should return an object of names greeted ", function(){

        let greet = greetMe();
        greet.greetedUsers('Amanda');
        greet.greetedUsers('Bernard');
        greet.greetedUsers('Elizabeth');

        assert.deepEqual({amanda : 1, bernard : 1, elizabeth: 1},greet.getNamesGreetings());
    })

    it("It should return name greeted twice in diffeent casing as 1 name ", function(){

        let greet = greetMe();
        greet.greetedUsers('Jason');
        greet.greetedUsers('Lisa');
        greet.greetedUsers('jason');

        assert.deepEqual({jason: 2, lisa : 1},greet.getNamesGreetings());
    })
})