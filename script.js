function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let midday;
    let back = document.querySelector(".back");

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    midday = (hours >= 12) ? "PM" : "AM";

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + midday;

    let time = setTimeout(function(){
        clock();
    }, 1000);

    let greeting = document.getElementById("greeting");
    if(hours < 12){
       greeting.innerHTML = "Good Morning!";
       back.style.backgroundImage = "url('morning.gif')";
       back.style.backgroundSize = "cover";
       back.style.backgroundReapeat = "no-repeat";

    } 
    else if (hours >= 12 && hours <= 18){
        greeting.innerHTML = "Good Evening!"
    } 
    else if (hours >= 18 && hours <= 24){
        greeting.innerHTML ="Good Evening!"
    }

}

    function updateTime(k){
        if(k < 10){
            return "0" + k
        }
    else {
        return k;
    }

}



clock();


// Speech Recognition

function voice(){
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.onresult = function(event){
        document.getElementById("search").value = event.results[0][0].transcript;
    }

    recognition.start();
}


// Google Search

let search = document.getElementById("search");
let searchicon = document.getElementById("search-icon");

searchicon.onclick = function() {
    let url = 'https://www.google.com/search?q=' + search.value;
    window.open(url, '_self');
}


