document.getElementById('easy').onclick = function () {
    console.log("Easy")
}
document.getElementById('hard').onclick = function () {
    console.log("Hard")
}

let array = [
    ['Easy','Hard'],
    ['Silver Mine Head Path', 'White Horse Path']
];

 for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}


function displayRadioValue() {
    var array = document.getElementsByName('difficulty');
      
    for(i = 0; i < array.length; i++) {
        if(array[i].checked)
        document.getElementById("trail").innerHTML
                = "Trail: "+array[i].value;



