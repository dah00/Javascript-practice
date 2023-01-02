// reference type
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

/* object1 and object2 are refering to the same object so they are equals
object1 and object3 are however different despite having the same value because
    they destinct separate objects.  */
    

// context vs scope
//      context tells us where we are within the object
const object4 = {
    a: function(){
        console.log(this);
    }
}


//instantiation
class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }

    play(){
        console.log(`WEEEE I am a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");



// cloning object: creating a new object and copying the content of another object into it
// Does not after the original object we copied it from
let obj = {
 a: 'a',
 b: 'b',
 c: {
    deep: 'try and copy me'
 }};
// The next 2 statements are shallow cloning because they only clone the 
// the first layer of object
let clone = Object.assign({}, obj);
let clone2 = {...obj};

// SuperClone: clones the whole object (all layers)
let superClone = JSON.parse(JSON.stringify(obj));

obj.c = 5;
// the clone and clone2 objects are not affected by obj.c = 5 since
// they reference to different object
console.log(obj);
console.log(clone);
console.log(clone2);