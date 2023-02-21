
 // 2D Array

 let hikes = [
    ['Easy','Silver Mine Head Path', 3.8],
    ['Hard','White Horse Path', 18.2],
    ['Easy','Father Troy', 8.9],
    ['Hard','Spout Path', 16.2]
];
    console.log(hikes)

//Allows console.log to display what radio button was selected.
let chosen;

document.getElementById('easy').onclick = function () {
    console.log("Easy")
    chosen = "Easy";
}
document.getElementById('hard').onclick = function () {
    console.log("Hard")
    chosen = "Hard";
}

// Select by Difficulty

function displayArray() {

    let results = [];
    console.log(results);
      
    for(i = 0; i < hikes.length; i++) {
    
        if(hikes[i][0] == chosen) {  //Checks row for difficulty
            console.log("Row: "+chosen)

            results.push(hikes[i][1]); //Shows corrisponding hike with chosen difficulty

            document.getElementById("output").innerHTML = "Trail: "+results.join(" <br> "); //Shows users their result
           
        }
    }
}

//Slider

let slider = document.getElementById("sliderRange");
let length = document.getElementById("demo");
let trailName = document.getElementById("output");

length.innerHTML = slider.value;

slider.oninput = function displayArray() {

    let results = [];

    length.innerHTML = this.value; // Displays slider value

    let selectedTrails = hikes.filter(function(hikes) {

    return hikes[2] == slider.value;

  });

    if(selectedTrails.length > 0) {

        let trailNames = selectedTrails.map(function(hikes) {
        return hikes[1];

        });

        document.getElementById("output").innerHTML = "Trail name: " + trailNames.join(", ");
    } 
    
    else {
        document.getElementById("output").innerHTML = "No trail with the selected length found.";
    }   
    
} 