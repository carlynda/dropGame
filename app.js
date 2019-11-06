var userScore = document.querySelector('#score');
var userInput = document.querySelector('#input'); 
const btnDrop = document.querySelector('.btn-drop');
const imgtarget = document.querySelector('.target'); 

let drops = []; 
var totalScore = 100; 

userInput.addEventListener('input', function(){
    userScore.textContent = totalScore - userInput.value; 
}); 

btnDrop.addEventListener('click', doDrop); 


function createDropElement(img){
    const div = document.createElement('div'); 
    div.className = 'drop';
    div.innerHTML = '<div class = "image"> <img class = "img-drop" src = "./img/leaf.png"/> </div>';
    //(Advanced feature) change to array of img for user to choose later 

    return div;
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
            x: Math.random() * (Math.random() > 5 ? -1 : 1) * 10, 
            y: 1.5 + Math.random() * 5, 
        }
    }; 
    for(var i = 0; i < userInput.value; i++){
        drops.push(drop);
    }
    document.body.appendChild(element); 
    updateDropPosition(drop); 
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
            drop.element.className.add('landed'); 
            const { x } = drop.location;
            const score = Math.abs(window.innerWidth / 2 - x); 
            if(score <= targetHalfWidth){
                const finalScore = (1 - (score / targetHalfWidth)) * 10; 
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
}

gameLoop();