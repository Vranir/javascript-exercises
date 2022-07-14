const repeatString = function(s,n) { //repeat s n times
    let sOut=""
    if (n>=0){
        for (let i=0;i<n;i++){
            sOut+=s;
        }
        return sOut;
    }
    else return "ERROR"
    
};

// Do not edit below this line
module.exports = repeatString;
