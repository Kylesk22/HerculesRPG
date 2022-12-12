const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 550;
const height = canvas.height = 390;



//new object healthbar


const healthBarHerc = new HealthBar(20, 160, 200, 30, 200, "green");



const frame1 = function() {

    

        context.clearRect(0, 0, width, height);
        healthBarHerc.show(context);
        requestAnimationFrame(frame1);

        
}

const healthBarLion = new HealthBar(20, 20, 200, 30, 200, "green");

const frame2 = function() {

    healthBarLion.show(context);
    requestAnimationFrame(frame2);
}



frame1()
frame2()

//map
const bossMap1 = new Maps("./images/GateToHell.png");

const Map1 = function() {
    bossMap1.show(context);
    requestAnimationFrame(Map1);
    document.getElementById("game-container").drawImage(bossMap1)
};

//Enemies

const EnemyLion = function() {
const NemeanLionImg = new Image(300,200);
NemeanLionImg.id = "NemeanLionImage";
NemeanLionImg.src = "./images/LemeanLion.png";
document.getElementById("game-container").appendChild(NemeanLionImg);
}
EnemyLion();

//attack objects/pictures


const LightningImg = new Image(100,100);
LightningImg.id = "LightningImage";
LightningImg.src ="./images/Lightning.png";
document.getElementById("game-container").appendChild(LightningImg);
document.getElementById("LightningImage").style.visibility = "hidden";



const FistImg = new Image();
FistImg.id = "FistImage";
FistImg.src ="./images/Fist.png";
document.getElementById("game-container").appendChild(FistImg);
document.getElementById("FistImage").style.visibility = "hidden";

const SwordSlashImg = new Image();
SwordSlashImg.id = "SwordSlash";
SwordSlashImg.src ="./images/SwordSlash.png";
document.getElementById("game-container").appendChild(SwordSlashImg);
document.getElementById("SwordSlash").style.visibility = "hidden";

const SwordSlash2Img = new Image();
SwordSlash2Img.id = "SwordSlash2";
SwordSlash2Img.src ="./images/SwordSlash2.png";
document.getElementById("game-container").appendChild(SwordSlash2Img);
document.getElementById("SwordSlash2").style.visibility = "hidden";

const ShieldImg = new Image();
ShieldImg.id = "ShieldImage";
ShieldImg.src ="./images/Shield.png";
document.getElementById("game-container").appendChild(ShieldImg);
document.getElementById("ShieldImage").style.visibility = "hidden";

//Hercules Attack Functions

const powerOfZues = function() {
    let openLightning = function() {
        document.getElementById("LightningImage").style.visibility = "visible";
    }
  
    setTimeout(openLightning, 500);

    let closeLightning = function() {
       document.getElementById("LightningImage").style.visibility = "hidden";
    }
    
    setTimeout(closeLightning, 1000);


    setTimeout(openLightning, 1500);

    setTimeout(closeLightning, 2000); 
    
        
}

const ArmyOfOne = function() {

    document.getElementById("FistImage").style.visibility = "visible";
    let pos = 0;
    AO1 = setInterval(frame, 5);
    function frame() {
        if (pos == 140) {
            clearInterval(AO1);
        }
        else {
            pos++;
            document.getElementById("FistImage").style.bottom = pos + 'px';
        }
    }
    AO2 = setInterval(function() {
        document.getElementById("FistImage").style.visibility = "hidden";
        clearInterval(AO2)
    
        
    }, 2500)

}

const SwordSlashAtk = function() {
    let openSword = function() {
        document.getElementById("SwordSlash").style.visibility = "visible";
    }
    let openSword2 = function() {
        document.getElementById("SwordSlash2").style.visibility = "visible";
    }
    
  
    setTimeout(openSword, 250);

    let closeSword = function() {
       document.getElementById("SwordSlash").style.visibility = "hidden";
    }

    let closeSword2 = function() {
        document.getElementById("SwordSlash2").style.visibility = "hidden";
     }
    
    setTimeout(closeSword, 500);


    setTimeout(openSword2, 750);

    setTimeout(closeSword2, 1000); 

    setTimeout(openSword, 1250);

    setTimeout(closeSword, 1500);

    setTimeout(openSword2, 1750);

    setTimeout(closeSword2, 2000); 
    
        
}

const ShieldBash = function() {

    document.getElementById("ShieldImage").style.visibility = "visible";
    let pos = 0;
    SB = setInterval(frame, 5);
    function frame() {
        if (pos == 140) {
            clearInterval(SB);
        }
        else {
            pos++;
            document.getElementById("ShieldImage").style.bottom = pos + 'px';
            document.getElementById("ShieldImage").style.left = pos + 'px';
            
        }
    }
    setTimeout(function(){
    SB2 = setInterval(frame2, 5);
    function frame2() {
        if (pos == -1) {
            clearInterval(SB2);
            document.getElementById("ShieldImage").style.visibility = "hidden";
            
        }
        else {
            pos--;
            document.getElementById("ShieldImage").style.bottom = pos + 'px';
            document.getElementById("ShieldImage").style.left = pos + 'px';
            
        }
    }
}, 1500)   
}

//Enemy Attack Functions
const LionFireballImg = new Image();
LionFireballImg.id = "LionFireballImage";
LionFireballImg.src ="./images/LionFireball.png";
document.getElementById("game-container").appendChild(LionFireballImg);
document.getElementById("LionFireballImage").style.visibility = "hidden";

const LionBiteImg = new Image();
LionBiteImg.id = "LionBiteImage";
LionBiteImg.src = "./images/LionBite.png";
document.getElementById("game-container").appendChild(LionBiteImg);
document.getElementById("LionBiteImage").style.visibility = "hidden";

const LionScratchImg = new Image();
LionScratchImg.id = "LionScratchImage";
LionScratchImg.src = "./images/LionScratch.png";
document.getElementById("game-container").appendChild(LionScratchImg);
document.getElementById("LionScratchImage").style.visibility = "hidden";

const LionScratch2Img = new Image();
LionScratch2Img.id = "LionScratch2Image";
LionScratch2Img.src = "./images/LionScratch2.png";
document.getElementById("game-container").appendChild(LionScratch2Img);
document.getElementById("LionScratch2Image").style.visibility = "hidden";

const LionGrowlImg = new Image();
LionGrowlImg.id = "LionGrowlImage";
LionGrowlImg.src = "./images/LionGrowl.png";
document.getElementById("game-container").appendChild(LionGrowlImg);
document.getElementById("LionGrowlImage").style.visibility = "hidden";

const TornadoImg = new Image();
TornadoImg.id = "TornadoImage";
TornadoImg.src = "./images/Tornado.png";
document.getElementById("game-container").appendChild(TornadoImg);
document.getElementById("TornadoImage").style.visibility = "hidden";

const Tornado2Img = new Image();
Tornado2Img.id = "Tornado2Image";
Tornado2Img.src = "./images/Tornado2.png";
document.getElementById("game-container").appendChild(Tornado2Img);
document.getElementById("Tornado2Image").style.visibility = "hidden";


const nemeanLionAtk1 = function(enemyAttackChoice) {
    let pos = 0
    if (enemyAttackChoice == nemeanLion.attackPower[0]) {
        FB = setInterval(frame, 5)
        function frame() {
            if (pos == -120) {
                clearInterval(FB);
                document.getElementById("LionFireballImage").style.visibility = "hidden";
            }
            else {
                pos--;
                document.getElementById("LionFireballImage").style.visibility = "visible";
                document.getElementById("LionFireballImage").style.bottom = pos + 'px';
                document.getElementById("LionFireballImage").style.left = pos - 2 + 'px';
                
            }
        }
    }
    if (enemyAttackChoice == nemeanLion.attackPower[1]) {
        LB = setInterval(frame, 5)
        function frame() {
            if (pos == -120) {
                clearInterval(LB);
                document.getElementById("LionBiteImage").style.visibility = "hidden";
            }
            else {
                pos--;
                document.getElementById("LionBiteImage").style.visibility = "visible";
                document.getElementById("LionBiteImage").style.bottom = pos + 'px';
                document.getElementById("LionBiteImage").style.left = pos - 2 + 'px';
                
            }
        }
    }
    if (enemyAttackChoice == nemeanLion.attackPower[2]) {
        let openScratch = function() {
            document.getElementById("LionScratchImage").style.visibility = "visible";
        }
        let openScratch2 = function() {
            document.getElementById("LionScratch2Image").style.visibility = "visible";
        }
        
      
        setTimeout(openScratch, 250);
    
        let closeScratch = function() {
           document.getElementById("LionScratchImage").style.visibility = "hidden";
        }
    
        let closeScratch2 = function() {
            document.getElementById("LionScratch2Image").style.visibility = "hidden";
         }
        
        setTimeout(closeScratch, 500);
    
    
        setTimeout(openScratch2, 750);
    
        setTimeout(closeScratch2, 1000); 
    
        setTimeout(openScratch, 1250);
    
        setTimeout(closeScratch, 1500);
    
        setTimeout(openScratch2, 1750);
    
        setTimeout(closeScratch2, 2000); 
        
            
    }
    if (enemyAttackChoice == nemeanLion.attackPower[3]) {
        let openGrowl = function() {
            document.getElementById("LionGrowlImage").style.visibility = "visible";
        }
        let closeGrowl = function() {
            document.getElementById("LionGrowlImage").style.visibility = "hidden";
        }
        setTimeout(openGrowl, 250);
        setTimeout(closeGrowl, 2000);
    }
}

//Enemy Death Function
const enemyDeath = function() {
    document.getElementById("TornadoImage").style.visibility = "visible";
                document.getElementById("NemeanLionImage").style.visibility = "hidden";
                isDead = true;
                document.getElementById("attackBtn1").disabled = true;
                setTimeout(function() {
                    document.getElementById("TornadoImage").style.visibility = "hidden";
                    alert("Congratulations! You defeated the Nemean Lion!");
                    document.getElementById("continueBtn").style.visibility = "visible";
                }, 1000);
                
}



//characters and stats in object literal

const nemeanLion = {
    health: 200,
    attackPower: [50, 35, 25, 15],
    attacks: ["Power of Zues", "Army of One", "Sword Slash", "Shield Bash"],
}
const lemeanHydra = {
    health: 350,
    attackPower: [60, 40, 30, 25],
    attacks: ["Power of Zues", "Army of One", "Sword Slash", "Shield Bash"],
}
const cerberus = {
    health: 480,
    attackPower: [60, 40, 30, 25],
    attacks: ["Power of Zeus", "Army of One", "Sword Slash", "Shield Bash"],
}
const hercules = {
    health: 200,
    attackPower: [60, 40, 30, 25],
    attacks: ["Power of Zues", "Army of One", "Sword Slash", "Shield Bash"],
}

//attack result functions

let herculesHealth = hercules.health;
let hydraHealth = lemeanHydra.health;
let cerberusHealth = cerberus.health;
let lionHealth = nemeanLion.health;



function herculesAttackLion(x) {
    lionHealth = lionHealth - x;
    console.log(`Hercules Attack: ` + x)
    return lionHealth;

}


function enemyAttack(enemyAttackPower) {
    let enemyAttackChoice = enemyAttackPower[Math.floor(Math.random() * 4)];
    herculesHealth = herculesHealth - enemyAttackChoice;
    console.log(`Nemean Lion Attack: ` + enemyAttackChoice);
    nemeanLionAtk1(enemyAttackChoice);
    return herculesHealth;
}



//battle sequence

let isDead = false;
let hercIsDead = false;

document.getElementById("continueBtn").style.visibility = "hidden";
// let level2 = function() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//}
document.querySelector('#continueBtn').addEventListener('click', function level2() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(level2);
    document.getElementById("game-container").visibility = "hidden";
});



    
document.querySelector('#attackBtn1').addEventListener('click', function attackPrompt() {
    let attacklist = prompt("Type attack number: 1. Power of Zeus 2. Army of one 3. Sword Slash 4. Shield Bash")
    attacklist = parseInt(attacklist)
    if (attacklist == null) console.log("null");
    else if (!attacklist) console.log("null2");
    else {
    switch(parseInt(attacklist)) {
        case 1: 
            
            powerOfZues();
            setTimeout(function() {
            herculesAttackLion(60);
            healthL = lionHealth;
            healthBarLion.updateHealth(healthL);
            if (healthL < 128) {
                healthBarLion.updateColor("yellow");
            }
            if (healthL < 66) { 
                healthBarLion.updateColor("red");
            }
            if (healthL <= 0) { 
                enemyDeath();

            }
            }, 2500);
            break;      
            
        case 2:
            ArmyOfOne();
            setTimeout(function() {
            herculesAttackLion(40);
            healthL = lionHealth;
            healthBarLion.updateHealth(healthL);
            if (healthL < 128) {
                healthBarLion.updateColor("yellow");
            }
            if (healthL < 66) {
                healthBarLion.updateColor("red");
            }
            if (healthL <= 0) { 
                enemyDeath();
            }
            }, 2500);
            break;

        case 3: 
            SwordSlashAtk();
            setTimeout(function() {
            herculesAttackLion(30);
            healthL = lionHealth;
            healthBarLion.updateHealth(healthL);
            if (healthL < 128) {
                healthBarLion.updateColor("yellow");
            }
            if (healthL < 66) {
                healthBarLion.updateColor("red");
            }
            if (healthL <= 0) { 
                enemyDeath();
            } 
            }, 2500);
            break;
            
        case 4: 

            ShieldBash();
            
            setTimeout(function() {
            herculesAttackLion(25);
            healthL = lionHealth;
            healthBarLion.updateHealth(healthL);
            if (healthL < 128) {
                healthBarLion.updateColor("yellow");
            }
            if (healthL < 66) {
                healthBarLion.updateColor("red");
            }
            if (healthL <= 0) { 
                enemyDeath();
                
            }
            }, 2500);
            break;
            
    } 
    
    if (nemeanLion.health < 1) {
        console.log("win")
    }
    
    if (!isDead) {
        console.log("trigger");
        setTimeout(function() {
         if (!isDead)
            enemyAttack(nemeanLion.attackPower);
        }, 4000);

        setTimeout(function() {

        healthB = herculesHealth;
        healthBarHerc.updateHealth(healthB);
        
        if (healthB < 128) {
            healthBarHerc.updateColor("yellow");
        }
        if (healthB < 66) {
            healthBarHerc.updateColor("red");
        }
        if (healthB <= 0) {
            document.getElementById("Tornado2Image").style.visibility = "visible";
            document.getElementById("herc").style.visibility = "hidden";
            hercIsDead = true;
            setTimeout(function() {
                document.getElementById("Tornado2Image").style.visibility = "hidden";
                let tryAgain = confirm("Try Again?");
                if (tryAgain == true) {
                    location.reload();
                }
                else {
                    alert("GAME OVER");
                }

            }, 1000);
        }
    
        }, 6000);
    }
}}) 







//attack function, terminates when health is 0
//function attack() {

    // while (health > 0) {
    //     let health = hercules.health - hercules.attackPower
    // }
//}

//RunGame() function to call other functions in logical order for game flow


