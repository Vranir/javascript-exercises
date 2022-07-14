const removeFromArray = function(arr,elem) {     
    for(let j=1;j<arguments.length;j++){
        if (arr.includes(arguments[j])==true){            
            let i=arr.indexOf(arguments[j]);
            let l=arr.slice(0,i);
            let r=arr.slice(i+1,arr.length);
            arr=l.concat(r); 
        }                 
    }      
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
