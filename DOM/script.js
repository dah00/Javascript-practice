// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
//     console.log("CLICK!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var buttons = document.querySelectorAll(".delete");

var liLength = li.length;

// Remove the corresponding item when delete button is clicked


// apply the "done" css style when the list item is clicked
for(let i=0; i<liLength; i++){
    li[i].onclick = function(){
        li[i].classList.toggle("done");
    }
    liLength = li.length;
}


// removing the list item when corresponding delete button is clicked
for(let i=0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        li[i].remove();
    }
}

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value)); 
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); 

