import { cards } from '../src/cardspo.js';

//localStorage.setItem('pontos_cpu', cpu);
//localStorage.setItem('pontos_player', player);
//console.log(localStorage.getItem('pontos_player'));
//console.log(localStorage.getItem('pontos_cpu')); // usar get aqui em cima

/* <------------ começo tela splash ------------> */ 

/* <------------ Criaçao de divs e buttons ------------> */ 
const splash_div = document.createElement("div"); 
const btn_newGame = document.createElement("button");
const btn_replay_game = document.createElement("button"); //criar botão para jogar novamente
const btn_score = document.createElement("button");
const joken_div = document.createElement("div");

/* <------------ Criaçao de divs e buttons ------------> */ 


/* <------------ Animação font e buttons ------------> */ 
document.addEventListener("DOMContentLoaded", () => {
    joken_div.id = "joken_cards";
    splash_div.id = "splashGame";
    btn_newGame.id = "new_game";
    btn_score.id = "score";
    btn_newGame.className = "animate__animated animate__fadeInUp animate__delay-3s";
    btn_score.className = "animate__animated animate__fadeInUp animate__delay-4s";
   

    btn_newGame.textContent = "Start Game";
    btn_score.textContent = "Score";

    document.body.appendChild(splash_div);
    document.body.appendChild(btn_newGame);
    document.body.appendChild(btn_score);
    document.body.appendChild(joken_div);
    
    splash_div.innerHTML = `
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
});
/* <------------ Animação font e buttons ------------> */ 


btn_newGame.addEventListener('click', function(){

     for(let card of cards)
    {
        joken_div.innerHTML += `
        <div id="${card.id}">
            <div class="animate__animated animate__zoomIn">
                <div class="card-modulo">
                    <div class="pic-box">
                        <img src="${card.img}">
                    </div>
                    <h2> ${card.titulo} </h2>
                </div>
            </div>
        </div>
        `;
    }

    document.getElementById('joken_cards').style.display = 'flex';
    document.getElementById('joken_cards').style.justifyContent = 'space-evenly';
    document.getElementById('joken_result').style.display = 'none';
    document.getElementById('splashGame').style.display = 'none';
    btn_newGame.style.display = 'none'; //resolver problema do addventlistener
    btn_score.style.display = 'none';

});

/* <------------ Fim tela splash ------------> */ 


/* <------------ contadores placar ------------> */ 
let cpu = 0;
let jogador = 0;
/* <------------ contadores placar ------------> */ 


joken_div.addEventListener('click', function (event) {
    
    const clicado = event.target.closest('div[id]');
    let n_card = Math.floor(Math.random() * 3) + 1;

  
    if (clicado && clicado.id && clicado.id !== 'joken_div') //mudar nome container
    {
        const container = document.getElementById("joken_result");
        let html = "";
        document.getElementById('joken_result').style.display = 'flex';
        document.getElementById('joken_result').style.paddingTop = '10%';
        document.getElementById('joken_cards').style.display = 'none';

        if(clicado.id == 1)
        {   
            if(n_card != 1) 
            {
                if(n_card === 2)
                {
                    cpu++;
                    html += `
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${jogador}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>
                        `;

                    for(let card of cards) //usar order nos botões da div win e order em um card joken po, usar continue
                    {
                        if(card.titulo === "Tesoura"){continue;}
                        html += `
                        <div id="${card.id}">
                            <div class="animate__animated animate__zoomIn animate__delay-1s">
                                <div class="card-modulo">
                                    <div class="pic-box">
                                        <img src="${card.img}">
                                    </div>
                                    <h2> ${card.titulo} </h2>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                    html +=`
                    <div id="win_loose">
                        <div class="animate__animated animate__zoomIn animate__delay-2s">
                            <h2> VOCÊ PERDEU! </h2>
                            <button id="new_game" type="button" onclick="newGame()"> Jogar novamente </button>
                            <button id="quit" type="button" onclick="quitGame()"> Quit Game </button>  
                        </div>
                    </div>
                    `;
                    container.innerHTML = html;
                    document.getElementById('2').style.order = '2';
                }
                else
                {
                    jogador++;

                    html += `
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${jogador}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>
                        `;

                    for(let card of cards)
                    {
                        if(card.titulo === "Papel"){continue;}
                        html += `
                        <div id="${card.id}">
                            <div class="animate__animated animate__zoomIn animate__delay-1s">
                                <div class="card-modulo">
                                    <div class="pic-box">
                                        <img src="${card.img}">
                                    </div>
                                    <h2> ${card.titulo} </h2>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                    html +=`
                    <div id="win_loose">
                        <div class="animate__animated animate__zoomIn animate__delay-2s">
                            <h2> VOCÊ VENCEU! </h2>
                            <button id="new_game" type="button" onclick="newGame()"> Jogar novamente </button>
                            <button id="quit" type="button" onclick="quitGame()"> Quit Game </button>  
                        </div>
                    </div>
                    `;

                    container.innerHTML = html;
                    document.getElementById('3').style.order = '2';
                }
            }
            else
            {
                //alert('empate');
                jogador++;
                cpu++;

                html += `
                <div id="placar">
                    <div class="jogador">
                        <h2>Jogador</h2>
                        <div class="animate__animated animate__zoomIn animate__delay-3s">
                            <div class="pontos" id="pontos-jogador">${jogador}</div>
                        </div>
                    </div>
                    <div class="jogador">
                        <h2>Computador</h2>
                        <div class="animate__animated animate__zoomIn animate__delay-3s">
                            <div class="pontos" id="pontos-computador">${cpu}</div>
                        </div>
                    </div>
                </div>
                `;

                let i = 0;
                for(i=0; i<2; i++)
                {
                    for(let card of cards) 
                    {
                        if(card.titulo === "Tesoura" || card.titulo === "Papel"){continue;}
                    
                        html += `
                        <div id="${card.id}">
                            <div class="animate__animated animate__zoomIn animate__delay-1s">
                                <div class="card-modulo">
                                    <div class="pic-box">
                                        <img src="${card.img}">
                                    </div>
                                    <h2> ${card.titulo} </h2>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                
                }
                html +=`
                <div id="win_loose">
                    <div class="animate__animated animate__zoomIn animate__delay-2s">
                        <h2> EMPATE! </h2>
                        <button id="new_game" type="button" onclick="newGame()"> Jogar novamente </button>
                        <button id="quit" type="button" onclick="quitGame()"> Quit Game </button>  
                    </div>
                </div>
                `;

                container.innerHTML = html;
                document.getElementById('1').style.order = '2';
                
            }
        }

        if(clicado.id == 2){}

        if(clicado.id == 3){}
    }
});