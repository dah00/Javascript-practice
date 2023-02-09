/*
    By default array.flat() flattens one layer
    But we can add argument to know how many layer you want flatten

*/
const array = [1, [[2, 3], [4, 5]]];
array.flat(2);


/*
    output: ['bob', 'sally', 'cindy']
*/
const entries = ['bob', 'sally',,,,,'cindy']
entries.flat()



const userEmail = '      eddythread@gmail.com'
const userEmail2 = 'eddimerphy@gmail.com      '
console.log(userEmail.trimStart);
console.log(userEmail2.trimEnd);



/*
    transform an array into an object: fromEntries() method
    transform an object into an array: Object.entries()
    
*/
userProfiles = [['commanderTome', 23], ['derekZlander', 40], ['hansel', 18]];
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);



const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')))
/*
    ['Hello young grasshopper!', 'you are', 'learning fast!']
*/