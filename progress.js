let percent = document.getElementById("percent");
let i = 0;
let progressP = document.getElementById("progressP");

document.getElementById("uploadButton").onclick = function(){
    document.getElementById("progressBar").classList.add("progress-bar-slide-in");
    document.getElementById("uploadDiv").classList.add("slide-out");
    document.getElementById("progressDiv").classList.add("slide-in");
    setTimeout(function () {
        let interval = setInterval(function(){   
            percent.innerHTML = i;
            i++;
            if (i == 101){
                clearInterval(interval);
    
                setTimeout(function () {
                    progressP.classList.add('fade-in');
                    progressP.innerHTML = "Completed!"
                }, 1000); // "completed!" appears
             }
    
        }, 20); // counting up from 1 to 100
    
    }, 2000); // delay before counting up from 1 to 100
}
