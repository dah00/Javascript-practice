const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
}) 

console.log(double);

// map, filter, reduce

// the return value gets automatically added to the mapArray
// the map must have a return value
const mapArray = array.map((num) => {
    return num + 2;
}); 
/*
    [3, 4, 12, 18]
*/


//filter
const filterArray = array.filter(num => {
    return num > 5
})
console.log('filter', filterArray);
/*
    [10, 16]
*/



//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);     // accumulator is set to 0
console.log('reduce', reduceArray); 
// 29



