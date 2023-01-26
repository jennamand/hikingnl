
//Allows console.log to display what radio button was selected.

document.getElementById('easy').onclick = function () {
    console.log("Easy")
}
document.getElementById('hard').onclick = function () {
    console.log("Hard")
}
   
//Displaying the trail name based on radio button selected.

function displayArray() {

    let difficulty = document.getElementsByName('difficulty');

//Two dimensional array

    let hikes = [
        ["Easy",'Silver Mine Head Path'],
        ['Hard','White Horse Path']
    ];
        console.log(hikes)
      
    for(i = 0; i < difficulty.length; i++) {
        if(difficulty[i].checked) {
            
            let checked = difficulty[i].value
            console.log("Selected: "+checked)

            for(j = 0; j < hikes.length; j++) {
                /* console.log("Row: "+hikes[j][0]) */

                if(checked == hikes[j][0]) {
                    console.log("Hike: "+hikes[j][1])

                    document.getElementById("output").innerHTML
                        = "Hike: "+hikes[j][1];
                }
    }
}
