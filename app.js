var userScore = document.querySelector('#score');
var userInput = document.querySelector('#input'); 
const btnDrop = document.querySelector('.btn-drop');
const imgtarget = document.querySelector('.target'); 

let drops = []; 
var totalScore = 100; 
userInput.addEventListener('input', function(){
    var displayScore = totalScore - userInput.value;
    userScore.textContent = totalScore - userInput.value;
}); 

btnDrop.addEventListener('click', doDrop); 


function createDropElement(img){
    for(var i = 0; i < userInput.value; i++){
        var div = document.createElement('div'); 
        div.className = 'drop';
        div.innerHTML = '<div class = "drop-image"> <img class = "img-drop" src = "./img/leaf.png"/> </div>';
        return div;
    }
    //(Advanced feature) change to array of img for user to choose later 
}

function doDrop(img){
    const element = createDropElement(img); 
    const drop = {
        element,
        location: {
            x: window.innerWidth * Math.random(), 
            y: -200, 
        },
        velocity:{
            x: Math.random() * (Math.random() > 0.5 ? -1 : 1) * 10, 
            y: 2 + Math.random() * 5, 
        }
    }; 
    
    drops.push(drop);
    document.body.appendChild(element); 
    drops.forEach (drop => updateDropPosition(drop)); 
    totalScore--; 
    userScore.textContent = totalScore;
}; 


function updateDropPosition(drop) {
    if (drop.landed) return;
    drop.element.style.top = drop.location.y + 'px';
    drop.element.style.left = (drop.location.x - (drop.element.clientWidth / 2)) + 'px';
}
  

function update(){
    const targetHalfWidth = imgtarget.clientWidth / 2;

    drops.forEach(drop => {

        if(drop.landed) return; 
        
        drop.location.x += drop.velocity.x; 
        drop.location.y += drop.velocity.y; 
        const halfWidth = drop.element.clientWidth /2 ; 
        if(drop.location.x + halfWidth >= window.innerWidth){
            drop.velocity.x = -Math.abs(drop.velocity.x); 
        }else if( drop.location.x - halfWidth < 0){
            drop.velocity.x = Math.abs(drop.velocity.x); 
        }
        
        if(drop.location.y + drop.element.clientWidth >= window.innerHeight){
            drop.velocity.y = 0;
            drop.velocity.x = 0;
            drop.location.y = window.innerHeight - drop.element.clientHeight;
            drop.landed = true;
            // drop.element.classList.add('landed'); 
            const { x } = drop.location;
            const score = Math.round(Math.abs(window.innerWidth / 2 - x));
            console.log(window.innerWidth, x, score, targetHalfWidth) 
            if(score <= targetHalfWidth){
                const finalScore = (1 - (score / targetHalfWidth)) * 100; 
                totalScore += displayScore;
                console.log(displayScore);
                console.log(finalScore);
                userScore.textContent = finalScore; 
            }        
        }
    });

}

function draw() {
    drops.forEach(updateDropPosition);
}

function gameLoop(){
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();