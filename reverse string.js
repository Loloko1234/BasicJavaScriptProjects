var reverseString = function(s) {
    
    let size = s.length;
    for (let i = 0; i < Math.floor(size/2); i++ ){
    [s[i], s[size-1-i]] =  [s[size-1-i], s[i]]
    }    
    return;
};