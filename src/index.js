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

    document.getElementById('screen1').style.display = 'flex';
    document.getElementById('screen2').style.display = 'none';
    document.getElementById('splashGame').style.display = 'none';
    btn_newGame.style.display = 'none';
    btn_score.style.display = 'none';
});








        //const screen1 = document.getElementById('screen1');
        //const screen2 = document.getElementById('screen2');

        

        /*
        const kenSplash = document.getElementById('ken');
        const poSplash = document.getElementById('po');
        const btn_newGame = document.getElementById('new_game');
        const btn_quit = document.getElementById('quit')

        clean code : criar div principal chamado splash, adiconar via javascript um createElement para o restante das letras de jokenpo, depois de clicado no star game remover as divs jokenpo

        colocar delay nas animações das letras, ao invés de setinterval

        var i = 4;
        //executa ação em um intervalo determinado
        var x = setInterval(function() 
        { 
            i = i - 1;

            if(i === 3) 
            {
                kenSplash.style.display = 'block';
            }

            if(i === 2)
            {
                poSplash.style.display = 'block';
                btn_newGame.style.display = 'block';
                btn_quit.style.display = 'block';
                clearInterval(x);
            }

         }, 1000);

         */