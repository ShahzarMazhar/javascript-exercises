function pigLatin(string) {

    let strArray = string.split(" ");

    let result = [];

    strArray.forEach(e => {
        let lettersBeforeVowel = e.split(/[aeiou]/i,1).join("");
        let singleLetter = lettersBeforeVowel[lettersBeforeVowel.length - 1]
        
        let regex = /[q]$/i;

        if( regex.test(singleLetter)){
            lettersBeforeVowel = e.split(/[aeio]/i,1).join("");
        }       
        
        if (lettersBeforeVowel != ""){
            
            result.push(e.replace(lettersBeforeVowel, "") + lettersBeforeVowel + "ay");
    
        }else{
            result.push(e + "ay")}
    });
    return result.join(' ');
};
  
// Do not edit below this line
module.exports = pigLatin;
