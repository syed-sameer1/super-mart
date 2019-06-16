
let total = 0;

let appleqty = 0;
let orangeqty = 0;
let bananaqty = 0;
let cucumberqty = 0;
let mugqty = 0;
let roseqty = 0;


function addapple() {
    appleqty++;
    console.log(appleqty)
    document.querySelector('#apple').value = appleqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
    console.log(total);
    // if (document.querySelector(#wallet) < total){
    //     alert("sorry");
    // }else{
    //     alert("saldj");
    // };

}
function minusapple() {
    appleqty--;
    console.log(appleqty)
    document.querySelector('#apple').value = appleqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}

function addorange() {
    orangeqty++;
    console.log(orangeqty)
    document.querySelector('#orange').value = orangeqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
    console.log(total);

}
function minusorange() {
    orangeqty--;
    console.log(orangeqty)
    document.querySelector('#orange').value = orangeqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addbanana() {
    bananaqty++;
    console.log(bananaqty)
    document.querySelector('#banana').value = bananaqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
    console.log(total);

}
function minusbanana() {
    bananaqty--;
    console.log(bananaqty)
    document.querySelector('#banana').value = bananaqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addcucumber() {
    cucumberqty++;
    console.log(cucumberqty)
    document.querySelector('#cucumber').value = cucumberqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
    console.log(total);

}
function minuscucumber() {
    cucumberqty--;
    console.log(cucumberqty)
    document.querySelector('#cucumber').value = cucumberqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addmug() {
    mugqty++;
    console.log(mugqty)
    document.querySelector('#mug').value = mugqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
    console.log(total);

}
function minusmug() {
    mugqty--;
    console.log(mugqty)
    document.querySelector('#mug').value = mugqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addrose() {
    roseqty++;
    console.log(roseqty)
    document.querySelector('#rose').value = roseqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
    console.log(total);

}
function minusrose() {
    roseqty--;
    console.log(roseqty)
    document.querySelector('#rose').value = roseqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}