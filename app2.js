let displayScore = document.querySelector('#score');
let userInput = document.querySelector('#input');
let message = document.querySelector('.message'); 
let alertScore = document.querySelector('#alert-current');

const imgTarget = document.querySelector('.target');
const btnDrop = document.querySelector('.btn-drop');


var totalScore = 100; 
let score = 0;  
let drops = []; 

userInput.addEventListener('input', function(){      
    displayScore.textContent = totalScore - userInput.value; 
}); 

btnDrop.addEventListener('click', doDrop);

function createDropElement(){
    for(var i = 0; i < userInput.value; i++){
        let div = document.createElement('div');
        div.classList.add('drop');
        div.innerHTML = `<img src='./img/leaf.png' class='img-drop'></img>`; 
        return div; 
        // document.body.appendChild(div);
    };     
}; 


function doDrop(){
    let element, drop ; 
    for(var i = 0; i < userInput.value; i++){
        element = createDropElement(); 
        drop = {
            element, 
            location: {
                x: Math.random() * window.innerWidth, 
                y: -200,
            }, 
            velocity: {
                x: Math.random() * (Math.random() > 0.5 ? -1:1) * 10,
                y: 2 + Math.random() * 5, 
            }
        }; 
        
        drops.push(drop);
        document.body.appendChild(element);
        drops.forEach(drop => updateDropPosition(drop)); 
    }; 
    totalScore -= userInput.value; 
    displayScore.textContent = totalScore;

}
function updateDropPosition(drop) {
    if (drop.landed) return;
    drop.element.style.top = drop.location.y + 'px';
    drop.element.style.left = (drop.location.x - (drop.element.clientWidth / 2)) + 'px';
};

function update(){
    const targetHalfWidth = imgTarget.clientWidth / 2;

    drops.forEach(drop => {
        if(drop.landed) return; 

        drop.location.x += drop.velocity.x; 
        drop.location.y += drop.velocity.y; 
        const halfWidth = drop.element.clientWidth / 2; 
        if(drop.location.x + halfWidth >= window.innerWidth){ 
            drop.velocity.x = -Math.abs(drop.velocity.x); 
        }else if (drop.location.x - halfWidth < 0 ){ 
            drop.velocity.x = Math.abs(drop.velocity.x); 
        }

        if(drop.location.y + drop.element.clientHeight >= window.innerHeight){
            drop.velocity.x = 0;
            drop.velocity.y = 0; 
            drop.location.y = window.innerHeight - drop.element.clientHeight; 
            drop.landed = true; 
            userInput.value = 0; 
            drop.element.classList.add('landed'); 
            const a  = drop.location.x; 
            const dropScore = Math.abs(window.innerWidth / 2 - a);
            if(dropScore <= targetHalfWidth){
                score = Math.ceil((1 - dropScore / targetHalfWidth) * 10); 
                totalScore += score;
                message.style.display = 'block';
                alertScore.textContent = score;  
                setTimeout(() => {
                    message.style.display = 'none';
                    alertScore.textContent = score;
                }, 500); 
                
                console.log('score is: ' , score);
                console.log('total score is: ' , totalScore);
                displayScore.textContent = totalScore                
            }
        }
    }); 
}
function draw(){
    drops.forEach(updateDropPosition); 
}
function game(){
    update();
    draw(); 
    requestAnimationFrame(game);
}

game(); 