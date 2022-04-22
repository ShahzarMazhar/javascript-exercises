const findTheOldest = function(people) {

    let result = "";
    let age = 0;

    people.forEach(e => {
        let currentYear = new Date().getFullYear();
        let yrOfDeath = e.yearOfDeath || currentYear;

        let currentCandidateAge = yrOfDeath - e.yearOfBirth;
        if(age < currentCandidateAge){
            result = e;
            age = currentCandidateAge
        }
    });
    
    return result;
};


// Do not edit below this line
module.exports = findTheOldest;
