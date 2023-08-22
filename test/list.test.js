import assert from 'assert';
import greetMe from '../greet.js';

describe("The getNamesList function test ", function(){

    it("It should return a names list ['Vusi','Sarah','Hope']", function(){

        let greet = greetMe()
        greet.setValidateName('Vusi')
        greet.setValidateName('Sarah')
        greet.setValidateName('Hope')
        

        assert.deepEqual(['vusi','sarah','hope'], greet.getNamesList())
    })
    
    it("It should return a names list ['Joey','Thoko','Sihle']", function(){

        let greet = greetMe()
        greet.setValidateName('Joey')
        greet.setValidateName('Thoko')
        greet.setValidateName('Sihle')

        assert.deepEqual(['joey','thoko','sihle'], greet.getNamesList())
    })

    it("It should return a names list ['John','Xola']", function(){

        let greet = greetMe()
        greet.setValidateName('John')
        greet.setValidateName('Xola')

        assert.deepEqual(['john','xola'], greet.getNamesList())
    })

})