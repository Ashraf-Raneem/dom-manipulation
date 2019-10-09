/* Task 1 */
var heading = document.getElementById('heading'); 
console.log(heading); 

/* Task 2 using plain JavaScript */
function addText (event){
    var p = document.createElement('p');
    p.innerHTML = 'Hello World'; 
    var div = document.getElementById('task2a');
    div.appendChild(p);
}

/* Task 2b */

/* //Method one
var x = document.getElementsByTagName('BODY')[0]; 
function changeBgRed (event) {
    x.style.backgroundColor = "red"; 
}

function changeBgGreen (event) {
    x.style.backgroundColor = "green"; 
}
*/

//Method 2
function changeBg(event){
    document.body.style.background = event.target.innerText.toLowerCase();
}

/* Task 2c */ 
function Redirect(event) {
    window.location.href= "https://www.google.com/";
}
function Redirect2(event){
    document.open("https://www.google.com/","blank")
}
/* Task 4 using jQuery */
