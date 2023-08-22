import assert from 'assert';
import greetMe from '../greet.js';

describe("The languageSelector function test", function(){

    

    it("It should return greeting in language selected 'Sawubona'", function(){

        let greet = greetMe();
        greet.setLanguageSelector("isizulu");

        assert.equal('Sawubona',greet.getLanguageSelector())
    })

    it("It should return greeting in language selected 'Hello'", function(){

        let greet = greetMe()
         greet.setLanguageSelector("english");

         assert.equal('Hello',greet.getLanguageSelector())
        })

    it("It should return greeting in language selected 'Dumela'", function(){

            let greet = greetMe()
             greet.setLanguageSelector("setswana");
             
             assert.equal('Dumela',greet.getLanguageSelector())
            })
})

// 
    
// 