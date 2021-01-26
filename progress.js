let percent = document.getElementById("percent");

let i = 0;
let interval = setInterval(function(){   
    percent.innerHTML = i;


    i++;
    if (i == 101){
        clearInterval(interval);
     }
}, 20);

