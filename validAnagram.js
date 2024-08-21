function validAnagram(str1, str2) {
    let s = str1.slice(); 
    let t = str2.slice(); 

    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            if (t.includes(s[i])) {
                t = t.replace(s[i], "");
            }
        }

        if (t.length < 1) {
            return true;
        }

    } 

    return false;

}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));

validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
