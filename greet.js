var greetingsCounter = 0;

export default function greetMe(){
    var namesGreeted = {};
    var isValidName = '';
    var greeting = '';

    function setValidateName(name){
        var valid = /^[A-Za-z]+$/
         let validName = valid.test(name)
       if(validName){
           isValidName = name
       }
        
    }
    function getValidateName(){
        return isValidName
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
        return greetingsCounter;
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
    function counter(){
        return greetingsCounter;
    }
    function resetCount(){
        greetingsCounter = 0;
    }
    return {
        greetedUsers,
        setLanguageSelector,
        getLanguageSelector,
        setValidateName,
        getValidateName,
        errorDisplay,
        nameErrorDisplay,
        buttonErrorDisplay,
        counter,
        resetCount
    }
}