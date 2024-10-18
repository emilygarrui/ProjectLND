function listenToUser(){
let secondMaqueta = document.getElementById("second-maqueta");
secondMaqueta.addEventListener("click", hideSecondMaqueta);
}

function hideSecondMaqueta(){
    let secondMaqueta = document.getElementById("second-maqueta");
    secondMaqueta.style.visibility = "hidden";
}

listenToUser();