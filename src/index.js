
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

function displayArray() {

//Two dimensional array

    let hikes = [
        ['Easy','Silver Mine Head Path', 3.8],
        ['Hard','White Horse Path', 18.2],
        ['Easy','Father Troy', 8.9],
        ['Hard','Spout Path', 16.2]
    ];
        console.log(hikes)
      
    let results = [];
    console.log(results);

    for(i = 0; i < hikes.length; i++) {
    
        if(hikes[i][0] == chosen) {  //Checks row for difficulty
            console.log("Row: "+chosen)

                    results.push(hikes[i][1]); //Shows corrisponding hike with chosen difficulty

                        document.getElementById("output").innerHTML //Shows users their result
                        = "Trail: "+results.join(" <br> ");

                

              }
            }
        }

// if(hikes[i][0] == chosen) {
                            
    //results[i] = hikes[i][1];

        //document.getElementById("output").innerHTML = "Trail: "+results[i];

    //}

        //We need to check the row for the difficulty value, compare it with the chosen variable and collect a list of rows that match that criteria
        //Populate "results" arrays with corresponding hikes
        //show the users on screen what hike they selected