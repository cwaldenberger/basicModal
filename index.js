let contactBtn = document.getElementById("open-modal")

contactBtn.addEventListener('click', shareDetails)

let closeModalBtn = document.getElementById("close-modal")

closeModalBtn.addEventListener('click', hideDetails)



function shareDetails () {
 document.getElementById("overlay").style.background = 'rgba(0,0,0,0.5)';
 document.getElementById("overlay").style.opacity = "0.1";
 document.getElementById("modal").style.visibility = 'visible';
}

function hideDetails () {
    document.getElementById("overlay").style.background = "#FFF";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("modal").style.visibility = 'hidden';
//  document.getElementById("modal").style.opacity = "0.1";
}