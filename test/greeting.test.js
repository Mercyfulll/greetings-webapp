import assert from 'assert';
import greetMe from '../greet.js';


describe("The setValidateName function test", function (){

    

    it("It should return a name mike if input is valid", function(){

        let greet = greetMe();
        greet.setValidateName('mike');

        assert.equal('mike', greet.getValidateName())        
    })

    it("It should return a name Michael if input is valid", function(){

        let greet = greetMe();
        greet.setValidateName('Michael');
        
        assert.equal('michael', greet.getValidateName())        
    })

    it("It should null if name invalid ", function(){

        let greet = greetMe();
        greet.setValidateName('Micha el');
        
        assert.equal('', greet.getValidateName())        
    })

})