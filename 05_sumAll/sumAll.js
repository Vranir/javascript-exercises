const sumAll = function(x,y) {
    if(typeof x=="number"&&typeof y=="number"&&x>0&&y>0){
        let sum=0;
        if (x>y){
            let t=x;
            x=y;
            y=t;
        }       
        while(x<=y){
            sum+=x;
            x++;
        }
        return sum;
    }
    else return "ERROR";
    
};

// Do not edit below this line
module.exports = sumAll;
