export default function greetMe(){
    var greetingsCounter = 0;
    var namesGreeted = {};
    var isValidName = '';
    var greeting = '';
    var namesList = [];
    var param = '';
    var number = 0; 


    function setValidateName(name){
        var valid = /^[A-Za-z]+$/
         let validName = valid.test(name)
       if(validName){
           isValidName = name.toLowerCase()
           namesList.push(isValidName)
       }
        
    }
    function getValidateName(){
        return isValidName
    }
    function getNamesList(){
        return namesList
    }
    function setLanguageSelector(language){
        if(language == 'english'){
            greeting = 'Hello'
       }else if (language === 'setswana'){
            greeting = 'Dumela' 
       }else if (language == 'isizulu'){
            greeting = 'Sawubona'            
       }
    }
    function getLanguageSelector(){
        return greeting
    }
    function greetedUsers(name){
        var lowNames = name.toLowerCase()
            if (namesGreeted[lowNames] === undefined){
                greetingsCounter++;
                //add an entry for the user that was greeted in the Object Map
                namesGreeted[lowNames] = 1;
            } else {
                // update the counter for a specific username
                namesGreeted[lowNames]++;
            }
    }
    function getUserCount(name){
        for (var name in namesGreeted) {
          if (namesGreeted.hasOwnProperty(name)) {
            return namesGreeted[name]; 
          }
        } 
    }
    function getObject(nameParam){
        for(let name in namesGreeted){
            if(name === nameParam ){
                    // console.log(nameParam)
                   number = namesGreeted[name]
                   param = nameParam
            }
        }
            return number
    }
    function getNamesGreetings(){
         return namesGreeted
    }
    function getCounter(){
        return greetingsCounter;
    }
    function resetCount(){
        greetingsCounter = 0;
    }
    function reset(){
        greetingsCounter = 0;
        namesGreeted = {};
        isValidName = '';
        greeting = '';
        namesList = [];
        param = '';
        number = 0; 
    }
    return {
        greetedUsers,
        setLanguageSelector,
        getLanguageSelector,
        getNamesList,
        getObject,
        setValidateName,
        getValidateName,
        getCounter,
        getUserCount,
        getNamesGreetings,
        resetCount,
        reset
    }
}
