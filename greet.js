export default function greetMe(){
    var greetingsCounter = 0;
    var namesGreeted = {};
    var isValidName = '';
    var greeting = '';
    var namesList = [];


    function setValidateName(name){
        var valid = /^[A-Za-z]+$/
         let validName = valid.test(name)
       if(validName){
           isValidName = name
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
    function getNamesGreetings(){
        return namesGreeted
    }
    function errorDisplay(){
        if(!validateName() && !languageSelector()){
            return "No name or language selected"
        }
    }
    function nameErrorDisplay(){
        if(!validateName()){
            return "Please enter name"
        }
    }
    function buttonErrorDisplay(){
        if(!languageSelector()){
            return "Please select language"
        }
    }
    function getCounter(){
        return greetingsCounter;
    }
    function resetCount(){
        greetingsCounter = 0;
    }
    return {
        greetedUsers,
        setLanguageSelector,
        getLanguageSelector,
        getNamesList,
        setValidateName,
        getValidateName,
        errorDisplay,
        nameErrorDisplay,
        buttonErrorDisplay,
        getCounter,
        getNamesGreetings,
        resetCount
    }
}