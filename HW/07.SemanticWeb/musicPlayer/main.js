const spanList = document.querySelectorAll("span");
const liList = document.querySelectorAll("li");

function filterByGenre(genre){
    liList.forEach(function(listItem){
        if(genre === "all" || listItem.dataset.genre === genre){
            listItem.style.display = "list-item";
        }else if(listItem.dataset.genre !== genre){
            listItem.style.display = "none";
        }
    });
}   

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
        }else{
            // console.log("all");
            filterByGenre("all");
        }
    });
});