//variables
const spanList = document.querySelectorAll("span");
const liList = document.querySelectorAll("li");
const totalPlayTimeSpan = document.getElementById("totalPlayTimeSpan");
let totalPlayTime;

//auxilary functions
function toSeconds(timeToConvert){
    let time = timeToConvert.split(':'); // split it at the colons
    
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    let seconds = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]); 
    return seconds;
}

function toMinutesColonSeconds(timeToConvert){
    return new Date(timeToConvert * 1000).toISOString().substr(11, 8);
}

function filterByGenre(genre){
    totalPlayTime = 0;
    
    liList.forEach(function(listItem){
        if(genre === "all" || listItem.dataset.genre === genre){
            listItem.style.display = "list-item";
            // console.log(listItem.dataset.trackLength);
            // console.log(toSeconds(listItem.dataset.trackLength));
            
            totalPlayTime += toSeconds(listItem.dataset.trackLength);
            
            // console.log(totalPlayTime);
            
        }else if(listItem.dataset.genre !== genre){
            listItem.style.display = "none";
        }
    });
    totalPlayTimeSpan.innerText = toMinutesColonSeconds(totalPlayTime);
}   

//event listener
spanList.forEach(function(element){
    element.addEventListener("click", function(){
        if(element.dataset.genre === "classical"){
            // console.log("classical");
            filterByGenre("classical");
        }else if(element.dataset.genre === "rock"){
            // console.log("rock");
            filterByGenre("rock");
        }else if(element.dataset.genre === "newWave"){
            // console.log("newWave");
            filterByGenre("newWave");
        }else if(element.dataset.genre === "all"){
            // console.log("all");
            filterByGenre("all");
        }
    });
});

filterByGenre("all");