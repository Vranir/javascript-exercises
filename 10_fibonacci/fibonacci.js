const fibonacci = function(n) {
    let n1=0;
    let n2=1;
    count=2
    n=parseInt(n);
    if (n>2){
        while (count<=n){
            nth=n1+n2;
            n1=n2;
            n2=nth;
            count++;
        }
        
    } 
    else if (n>0&&n<3){
        return 1;        
    }
    else{
        return "OOPS";
    }   
    return nth;

};

// Do not edit below this line
module.exports = fibonacci;
