const reverseString = function(s) { //reverse s
    let sOut="";
    for (i=s.length-1;i>=0;i--){
        sOut+=s.charAt(i);
    }
    return sOut;
    
};

// Do not edit below this line
module.exports = reverseString;
