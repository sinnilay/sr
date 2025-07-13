const button = document.getElementById("button")

const text = document.getElementById("test")

let pointer = 0;

function increment(){
    pointer+=1;
    text.innerText=pointer
}

function reset(){
    pointer=0;
    text.innerText=pointer
}



// console.dir(text);

// console.dir(button);



