














let total = 0;

let appleqty = 0;
let orangeqty = 0;
let bananaqty = 0;
let cucumberqty = 0;
let mugqty = 0;
let roseqty = 0;
//themes
function Dark() {
    let box = document.querySelector("input[type=checkbox]");
    if (box.checked == true) {
        getComputedStyle(document.documentElement)
            .getPropertyValue('--head-nav');
        document.documentElement.style
            .setProperty('--head-nav', '#FB8122');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--all-fonts');
        document.documentElement.style
            .setProperty('--all-fonts', '#f49247');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--header-border');
        document.documentElement.style
            .setProperty('--header-border', 'rgb(65, 64, 64)');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--button-div');
        document.documentElement.style
            .setProperty('--button-div', '#949494');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--button');
        document.documentElement.style
            .setProperty('--button', '#d3d3d3');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--buy-button');
        document.documentElement.style
            .setProperty('--buy-button', 'rgb(78, 248, 11)');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--body');
        document.documentElement.style
            .setProperty('--body', '#1D2228');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-itemBox');
        document.documentElement.style
            .setProperty('--nav-itemBox', '#575757');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--side-bar');
        document.documentElement.style
            .setProperty('--side-bar', '#f0b384');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--total-bill');
        document.documentElement.style
            .setProperty('--total-bill', 'rgba(65, 64, 64, 0.80)');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--shadow');
        document.documentElement.style
            .setProperty('--shadow', 'rgb(50, 50, 50)');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--input-color');
        document.documentElement.style
            .setProperty('--input-color', 'white');
    } else {
        getComputedStyle(document.documentElement)
            .getPropertyValue('--head-nav');
        document.documentElement.style
            .setProperty('--head-nav', '#e88073');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--all-fonts');
        document.documentElement.style
            .setProperty('--all-fonts', '#e85a50');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--header-border');
        document.documentElement.style
            .setProperty('--header-border', '#eae8dc');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--button-div');
        document.documentElement.style
            .setProperty('--button-div', '#c9c8c3');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--button');
        document.documentElement.style
            .setProperty('--button', '#8e8d89');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--buy-button');
        document.documentElement.style
            .setProperty('--buy-button', 'rgb(78, 248, 11)');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--body');
        document.documentElement.style
            .setProperty('--body', '#fff');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-itemBox');
        document.documentElement.style
            .setProperty('--nav-itemBox', '#f3e1c7');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--side-bar');
        document.documentElement.style
            .setProperty('--side-bar', '#5f5f5f');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--total-bill');
        document.documentElement.style
            .setProperty('--total-bill', '#eae8dcc7');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--shadow');
        document.documentElement.style
            .setProperty('--shadow', '#ccc');
        getComputedStyle(document.documentElement)
            .getPropertyValue('--input-color');
        document.documentElement.style
            .setProperty('--input-color', 'black');
    }

}
// function Light() {

// }
//themes

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

function buy() {
    document.querySelector(".black2").style = "display: flex";
    document.querySelector("#body").style = "overflow: hidden";
    document.querySelector(".mess2").style = "display : flex";

}

// apple
function addapple() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= totalbill) {
        document.querySelector(".black").style = "display : flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display  : flex";
        // alert("soty");


    } else {
        // if (document.querySelector("#apple") * 10 > document.getElementById('totalbill').innerHTML) {   
        //     document.querySelector(".black").style = "display : flex";
        //     document.querySelector("#body").style = "overflow: hidden";
        //     document.querySelector(".mess").style = "display  : flex";
        // }
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
function ona() {
    document.querySelector(".two").style = "transform: scale(1.2); transition: 0.5s;";
    document.querySelector(".three").style = "transform: scale(1.4);  transition: 0.5s;";

}
function outa() {
    document.querySelector(".two").style = "transform: scale(1); transition: 0.5s;";
    document.querySelector(".three").style = "transform: scale(1);  transition: 0.5s;";

}
// orange
function addorange() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= totalbill) {
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
function ono() {
    document.querySelector(".four").style = "transform: scale(1.2); transition: 0.5s;";
    document.querySelector(".five").style = "transform: scale(1.4);  transition: 0.5s;";

}
function outo() {
    document.querySelector(".four").style = "transform: scale(1); transition: 0.5s;";
    document.querySelector(".five").style = "transform: scale(1);  transition: 0.5s;";

}
// banana
function addbanana() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= totalbill) {
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
function onb() {
    document.querySelector(".six").style = "transform: scale(1.2); transition: 0.5s;";
    document.querySelector(".seven").style = "transform: scale(1.4);  transition: 0.5s;";

}
function outb() {
    document.querySelector(".six").style = "transform: scale(1); transition: 0.5s;";
    document.querySelector(".seven").style = "transform: scale(1);  transition: 0.5s;";

}
// cucumber
function addcucumber() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= totalbill) {
        document.querySelector(".black").style = "display: flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display : flex";
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
function onc() {
    document.querySelector(".eight").style = "transform: scale(1.2); transition: 0.5s;";
    document.querySelector(".nine").style = "transform: scale(1.4);  transition: 0.5s;";

}
function outc() {
    document.querySelector(".eight").style = "transform: scale(1); transition: 0.5s;";
    document.querySelector(".nine").style = "transform: scale(1);  transition: 0.5s;";

}
// mug
function addmug() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= totalbill) {
        document.querySelector(".black").style = "display: flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display : flex";
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
function onm() {
    document.querySelector(".ten").style = "transform: scale(1.2); transition: 0.5s;";
    document.querySelector(".tenten").style = "transform: scale(1.4);  transition: 0.5s;";

}
function outm() {
    document.querySelector(".ten").style = "transform: scale(1); transition: 0.5s;";
    document.querySelector(".tenten").style = "transform: scale(1);  transition: 0.5s;";

}
// rose
function addrose() {
    let wallet = Number(document.querySelector("#wallet").value);
    let totalbill = Number(document.getElementById('totalbill').innerHTML);
    if (wallet <= totalbill) {
        document.querySelector(".black").style = "display: flex";
        document.querySelector("#body").style = "overflow: hidden";
        document.querySelector(".mess").style = "display : flex";
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
function onr() {
    document.querySelector(".ninenine").style = "transform: scale(1.2); transition: 0.5s;";
    document.querySelector(".sixsix").style = "transform: scale(1.4);  transition: 0.5s;";

}
function outr() {
    document.querySelector(".ninenine").style = "transform: scale(1); transition: 0.5s;";
    document.querySelector(".sixsix").style = "transform: scale(1);  transition: 0.5s;";

}

