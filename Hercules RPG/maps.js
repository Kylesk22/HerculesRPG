
    
class Maps {
    constructor(Bkg) {  
        var img = document.createElement("img");
        img.src = Bkg;
        var src = document.getElementById("game-container");
        src.style.backgroundImage = "url('./images/GateToHell.png')"
        
    }
}
