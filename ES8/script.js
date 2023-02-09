'Turtle'.padStart(10);
'Turtle'.padEnd(10);


let obj ={
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key], index);
}) 
/*
    username0 Santa 0
    username1 Rudolf 1
    username2 Mr.Grinch 2
*/


Object.values(obj).forEach(value => {
    console.log(value);
})
/*
    Santa
    Rudolf
    Mr.Grinch
*/


Object.entries(obj).forEach(value => console.log(value))
/*
    ['username0', 'Santa']
    ['username1', 'Rudolf']
    ['username2', 'Mr.Grinch']
*/



Object.entries(obj).map(value=>{
    return value[1] + value[0].replace('username', '');
})
/*
    ['Santa0', 'Rudolf1', 'Mr.Grinch2']
*/
