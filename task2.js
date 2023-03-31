function firstNotRepeatingCharacter(s) {
    let strArr = s.replace(" ", "").split("");
    for (let str of strArr) 
        if(strArr.indexOf(str) == strArr.lastIndexOf(str))
            return str;
        
    return "_";
};
console.log(firstNotRepeatingCharacter("abacabad"));