let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    // if(e.keyCode === 38 && red<255){
    
    // red+=10;
    // green+=10;
    // blue+=10
    // document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // }
    //     else if (e.keyCode === 40 && red >0){
    //     red-=10;
    //     green-=10;
    //     blue-=10;
    //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //     }
    // // if (keydown.keyCode == 40){
    // // document.body.style.backgroundColor = `rgb(${red}rgb - 10rgb, ${green} - 10,${blue} - 10)rgb`;
    // // }
    // console.log(e.keyCode);
    // 38 - strzałka do góry
    // 40 - strzałka w dół
// } POWYŻEJ WERSJA DLA IFA

switch (e.keyCode) {
    case 38:
    document.body.style.backgroundColor = `rgb(${red <=255 ? red++ : red}, ${green <=255 ? green++: green}, ${blue <=255 ? blue++: blue})`;

        console.log("strzałka w górę");
    break;
    case 40:
    document.body.style.backgroundColor = `rgb(${red >=0 ? red--:red}, ${green >=0 ? green--:green}, ${blue >= 0 ? blue--: blue})`;

        console.log("strzałka w dół");
        break;
}}


window.addEventListener('keydown', changeColor)
