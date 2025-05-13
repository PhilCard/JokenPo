const novaDiv = document.createElement("div");
const btn_newGame = document.createElement("button");
const btn_score = document.createElement("button");

function startSplash()
{   
    novaDiv.id = "splashGame";
    btn_newGame.id = "new_game";
    btn_score.id = "score";
    btn_newGame.className = "animate__animated animate__fadeInUp animate__delay-3s";
    btn_score.className = "animate__animated animate__fadeInUp animate__delay-4s";
   

    btn_newGame.textContent = "Start Game";
    btn_score.textContent = "Score";

    document.body.appendChild(novaDiv);
    document.body.appendChild(btn_newGame);
    document.body.appendChild(btn_score);
    
    novaDiv.innerHTML = `
        <div id="jo"> 
            <div class="animate__animated animate__fadeInDown">
                <h1> Jo </h1> 
            </div>
        </div>
        
        <div id="ken"> 
            <div class="animate__animated animate__fadeInDown animate__delay-1s">
                <h1> ken </h1> 
            </div>
        </div>
        
        <div id="po">
            <div class="animate__animated animate__fadeInDown animate__delay-2s">
                <h1> Pô </h1>
            </div>
        </div>
    `;
}

btn_newGame.addEventListener('click', function(){

    document.getElementById('joken_cards').style.display = 'flex';
    document.getElementById('joken_cards').style.justifyContent = 'space-evenly';
    document.getElementById('joken_result').style.display = 'none';
    document.getElementById('splashGame').style.display = 'none';
    btn_newGame.style.display = 'none';
    btn_score.style.display = 'none';

});