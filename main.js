let color = 'black';
let number = 0;
let previous = []
let numbers = localStorage.length;
currIndex = localStorage.length

function populate(){
    previous = [];
    numbers = localStorage.length;
    for (let i = 0; i < numbers; i++) {
        previous.push(JSON.parse(localStorage.getItem(i.toString())));
    }
    for (let i = 0; i < numbers; i++) {
        let obj = previous[i];
        var div = document.createElement('div');
        div.innerHTML = obj[0];
        div.style.color = obj[1];
        document.body.appendChild(div);
    }
}

function colorRed(){
    color = 'red';
    colorText(color);
}

function colorGreen(){
    color = 'green';
    colorText(color);
}

function colorBlue(){
    color = 'blue';
    colorText(color);
}

function colorText(color){
    document.getElementById("text").style.color = color;
}

function plus(){
    number++;
    document.getElementById("text").textContent = number;
}

function plus2(){
    number = number + 10;
    document.getElementById("text").textContent = number;
}

function minus(){
    number--;
    document.getElementById("text").textContent = number;
}

function minus2(){
    number = number - 10;
    document.getElementById("text").textContent = number;
}

function reset(){
    document.getElementById("text").style.color = 'black';
    document.getElementById("text").textContent = '0';
    number = 0;
}

function save(){
    let textcontent = document.getElementById("text").textContent;
    let textcolor = document.getElementById("text").style.color;
    let arr = [textcontent, textcolor];
    let obj = JSON.stringify(arr);
    localStorage.setItem(currIndex.toString(), obj);
    currIndex++;
    reset()
    previous = [];
    numbers = localStorage.length;
    for (let i = 0; i < numbers; i++) {
        previous.push(JSON.parse(localStorage.getItem(i.toString())));
    }
    let obj2 = previous[currIndex-1];
    var div = document.createElement('div');
    div.innerHTML = obj2[0];
    div.style.color = obj2[1];
    document.body.appendChild(div);
}