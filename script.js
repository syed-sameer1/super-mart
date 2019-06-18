














let total = 0;

let appleqty = 0;
let orangeqty = 0;
let bananaqty = 0;
let cucumberqty = 0;
let mugqty = 0;
let roseqty = 0;


function keep() {
    document.querySelector(".black2").style = "display: none";
    document.querySelector("#body").style = "overflow: show";

    document.querySelector(".mess2").style = "display : none";
}
function ok2() {
    document.querySelector(".black").style = "display: none";
    document.querySelector("#body").style = "overflow: show";

    document.querySelector(".mess").style = "display : none";
}

function ok() {
    document.querySelector(".black3").style = "display: none";
    document.querySelector("#body").style = "overflow: show";

    document.querySelector(".mess3").style = "display : none";
}

function buy() {
    document.querySelector(".black2").style = "display: flex";
    document.querySelector("#body").style = "overflow: hidden";
    document.querySelector(".mess2").style = "display : flex";

}

function addapple() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= document.getElementById('totalbill').innerHTML) {
        document.querySelector(".black").style = "display : flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display  : flex";
        // alert("soty");


    } else {
        appleqty++;
        console.log(appleqty)
        document.querySelector('#apple').value = appleqty;
        total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
        document.getElementById('totalbill').innerHTML = total;
        console.log(total);
    }
    console.log(wallet < document.getElementById('totalbill').innerHTML)


}
function minusapple() {
    appleqty--;
    console.log(appleqty)
    document.querySelector('#apple').value = appleqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}

function addorange() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= document.getElementById('totalbill').innerHTML) {
        document.querySelector(".black").style = "display : flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display  : flex";
        // alert("soty");


    } else {
        orangeqty++;
        console.log(orangeqty)
        document.querySelector('#orange').value = orangeqty;
        total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
        document.getElementById('totalbill').innerHTML = total;
        console.log(total);
    }

}
function minusorange() {
    orangeqty--;
    console.log(orangeqty)
    document.querySelector('#orange').value = orangeqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addbanana() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= document.getElementById('totalbill').innerHTML) {
        document.querySelector(".black").style = "display : flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display  : flex";
        // alert("soty");


    } else {
        bananaqty++;
        console.log(bananaqty)
        document.querySelector('#banana').value = bananaqty;
        total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
        document.getElementById('totalbill').innerHTML = total;
        console.log(total);
    }

}
function minusbanana() {
    bananaqty--;
    console.log(bananaqty)
    document.querySelector('#banana').value = bananaqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addcucumber() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= document.getElementById('totalbill').innerHTML) {
        document.querySelector(".black3").style = "display: flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess3").style = "display : flex";
        // alert("soty");


    } else {
        cucumberqty++;
        console.log(cucumberqty)
        document.querySelector('#cucumber').value = cucumberqty;
        total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
        document.getElementById('totalbill').innerHTML = total;
        console.log(total);
    }

}
function minuscucumber() {
    cucumberqty--;
    console.log(cucumberqty)
    document.querySelector('#cucumber').value = cucumberqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addmug() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= document.getElementById('totalbill').innerHTML) {
        document.querySelector(".black3").style = "display: flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess3").style = "display : flex";
        // alert("soty");


    } else {
        mugqty++;
        console.log(mugqty)
        document.querySelector('#mug').value = mugqty;
        total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
        document.getElementById('totalbill').innerHTML = total;
        console.log(total);
    }

}
function minusmug() {
    mugqty--;
    console.log(mugqty)
    document.querySelector('#mug').value = mugqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}
function addrose() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= document.getElementById('totalbill').innerHTML) {
        document.querySelector(".black3").style = "display: flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess3").style = "display : flex";
        // alert("soty");


    } else {
        roseqty++;
        console.log(roseqty)
        document.querySelector('#rose').value = roseqty;
        total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
        document.getElementById('totalbill').innerHTML = total;
        console.log(total);
    }

}
function minusrose() {
    roseqty--;
    console.log(roseqty)
    document.querySelector('#rose').value = roseqty;
    total = appleqty * 10 + orangeqty * 15 + bananaqty * 7 + cucumberqty * 12 + mugqty * 130 + roseqty * 80;;
    document.getElementById('totalbill').innerHTML = total;
}

