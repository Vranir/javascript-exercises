const palindromes = function (string) {
    let modString="";
    for (let i=0;i<string.length;i++){
        if (string[i].toUpperCase()!=string[i].toLowerCase()){
            modString+=string[i].toLowerCase();
        }
    }

    let newS="";
    
    for (let i=modString.length-1;i>=0;i--){
        
            newS+=modString[i];          
        
    }
    return modString==newS;
};

// Do not edit below this line
module.exports = palindromes;
