const findTheOldest = function(ppl) {
    oldest={
        name: "0",
        yearOfBirth: 1942,
        yearOfDeath: 1942,
    };
    ppl.forEach(dude => {
        if (dude.hasOwnProperty('yearOfDeath')){
            if(dude.yearOfDeath-dude.yearOfBirth>oldest.yearOfDeath-oldest.yearOfBirth){
                oldest.name=dude.name;
                oldest.yearOfBirth=dude.yearOfBirth;
                oldest.yearOfDeath=dude.yearOfDeath;
            }
        }
        else{
            let curr=new Date().getFullYear();
            //console.log(curr)
            //console.log(curr-dude.yearOfBirth)
            if(curr-dude.yearOfBirth>oldest.yearOfDeath-oldest.yearOfBirth){
                oldest.name=dude.name;
                oldest.yearOfBirth=dude.yearOfBirth;
                oldest.yearOfDeath=curr;                
            }
        }
        
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;


