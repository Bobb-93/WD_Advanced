//variables
const dom = {
    radioList: document.querySelectorAll("#genres input[type='radio']"),
    liList: document.querySelectorAll("li"),
    totalPlayTimeSpan: document.getElementById("totalPlayTimeSpan"),
    nowPlaying: document.querySelector("figcaption>span"),
    songs: document.getElementById("songs"),
    audioPlayer: document.getElementById("audio-player")
};

const songs = [
    {
        id: 1,
        trackLength: "00:03:35",
        songName: "Antonio Vivaldi - The Four Seasons, Op. 8, \"Spring\": Allegro",
        songSrc: "audio/The Four Seasons, Op. 8, Spring Allegro.mp3"
    },
    {
        id: 2,
        trackLength: "00:05:01",
        songName: "Richard Wagner - The Valkyrie: Ride of the Valkyries",
        songSrc: "audio/Richard Wagner - Ride Of The Valkyries.mp3"
    },
    {
        id: 3,
        trackLength: "00:04:48",
        songName: "AC/DC - Dirty Deeds Done Dirt Cheap",
        songSrc: ""
    },
    {
        id: 4,
        trackLength: "00:04:04",
        songName: "a-Ha - Take On Me",
        songSrc: ""
    },
    {
        id: 5,
        trackLength: "00:05:41",
        songName: "Deep Purple - Smoke On The Water",
        songSrc: ""
    },
    {
        id: 6,
        trackLength: "00:04:29",
        songName: "Fr&egrave;d&egrave;ric Chopin - Nocturne No. 2 In E-Flat Major, Op. 9",
        songSrc: "audio/Chopin - Nocturne op.9 No.2.mp3"
    },
    {
        id: 7,
        trackLength: "00:04:08",
        songName: "Blue Monday - New Order",
        songSrc: ""
    },
    {
        id: 8,
        trackLength: "00:03:12",
        songName: "Transmission - Joy Division",
        songSrc: ""
    },
    {
        id: 9,
        trackLength: "00:04:39",
        songName: "Nirvana - Smells Like Teen Spirit",
        songSrc: ""
    },
    {
        id: 10,
        trackLength: "00:04:43",
        songName: "The Cure - A Forest",
        songSrc: ""
    },
    {
        id: 11,
        trackLength: "00:08:34",
        songName: "Planets Suite for Orchestra Op. 32 Venus, Bringer Of Peace",
        songSrc: "audio/Planets Suite for Orchestra Op. 32 Venus, Bringer Of Peace.mp3"
    }
];

let totalPlayTime;

//auxilary functions
function toSeconds(timeToConvert){
    let time = timeToConvert.split(":");
    
    let seconds = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]); 
    return seconds;
}

function toMinutesColonSeconds(timeToConvert){
    return new Date(timeToConvert * 1000).toISOString().substr(11, 8);
}

function filterByGenre(genre){
    totalPlayTime = 0;
    
    dom.liList.forEach(function(listItem){
        let listItemGenre  = listItem.dataset.genre;
        if(genre === "all" || listItemGenre === genre){
            listItem.style.display = "list-item";
            totalPlayTime += toSeconds(listItem.dataset.trackLength);
        }else if(listItemGenre !== genre){
            listItem.style.display = "none";
        }
    });
    dom.totalPlayTimeSpan.innerText = toMinutesColonSeconds(totalPlayTime);
}   

//event listener
dom.radioList.forEach(function(element){
    element.addEventListener("click", function(){
        // if(this.value === "classical"){
        //     filterByGenre("classical");
        // }else if(this.value === "rock"){
        //     filterByGenre("rock");
        // }else if(this.value === "newWave"){
        //     filterByGenre("newWave");
        // }else{
        //     filterByGenre("all");
        // }
        switch(this.value){
            case "classical":
                filterByGenre("classical");
                break;
            case "rock":
                filterByGenre("rock");
                break;
            case "newWave":
                filterByGenre("newWave");
                break;
            default:
                filterByGenre("all");
        }
    });
});

dom.songs.addEventListener("click", function(e){
    if(e.target.nodeName!=="LI"){
        return;
    };

    let trackId = e.target.dataset.id;
    // console.log(trackId);

    // console.log(songs.find(x => x.id = trackId).songSrc);
    let song = songs.find(function (item) { 
        return item.id === +trackId; 
    });

    // console.log(`${song.songSrc}`);
    // console.log(dom.audioPlayer.src);
    
    dom.audioPlayer.src = `${song.songSrc}`;
});
filterByGenre("all");