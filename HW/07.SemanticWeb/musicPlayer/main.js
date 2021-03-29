//variables
const spanList = document.querySelectorAll("span");
const liList = document.querySelectorAll("li");
const totalPlayTimeSpan = document.getElementById("totalPlayTimeSpan");
let totalPlayTime;

//auxilary functions
function toSeconds(timeToConvert){
    let time = timeToConvert.split(':');
    
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
            totalPlayTime += toSeconds(listItem.dataset.trackLength);
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
            filterByGenre("classical");
        }else if(element.dataset.genre === "rock"){
            filterByGenre("rock");
        }else if(element.dataset.genre === "newWave"){
            filterByGenre("newWave");
        }else if(element.dataset.genre === "all"){
            filterByGenre("all");
        }
    });
});

filterByGenre("all");