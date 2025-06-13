import { cards } from './cardspo.js';

/* <------------ Criaçao de divs e buttons ------------> */ 
const container = document.querySelector('.container');
const splash_div = document.createElement("div"); 
const btn_new_game = document.createElement("button");
const btn_score = document.createElement("button");
const joken_div = document.createElement("div");
const joken_result = document.getElementById("joken_result");

/* <------------ Criaçao de divs e buttons ------------> */ 


/* <------------ contadores placar ------------> */ 
let cpu = 0;
let jogador = 0;
/* <------------ contadores placar ------------> */ 

document.addEventListener("DOMContentLoaded", splashScreen);

btn_new_game.addEventListener('click',listaCards);

joken_div.addEventListener('click', playerWinOrLose);

document.getElementById('joken_result').addEventListener('click', newGameOrQuit);


/* <------------ começo tela splash ------------> */ 

/* <------------ Animação font e buttons ------------> */ 

function splashScreen()
{
    joken_div.id = "joken_cards";
    splash_div.id = "splashGame";
    btn_new_game.id = "new_game";
    btn_score.id = "score";
    btn_new_game.className = "animate__animated animate__fadeInUp animate__delay-3s";
    btn_score.className = "animate__animated animate__fadeInUp animate__delay-4s";
   

    btn_new_game.textContent = "Start Game";
    btn_score.textContent = "Score";

    container.appendChild(splash_div);
    container.appendChild(btn_new_game);
    container.appendChild(btn_score);
    container.appendChild(joken_div);
    
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
}
/* <------------ Animação font e buttons ------------> */ 

/* <------------ Fim tela splash ------------> */ 


function listaCards()
{
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

    btn_new_game.style.display = 'none';
    btn_score.style.display = 'none';
    joken_div.style.display = 'flex';
    joken_result.style.display = 'none';
    splash_div.style.display = 'none';
}


function playerWinOrLose(event)
{
    const clicado = event.target.closest('div[id]');
    let n_card = Math.floor(Math.random() * 3) + 1;
    let html = "";
  
    if (clicado && clicado.id && clicado.id !== 'joken_div')
    {
        joken_result.style.display = 'flex';
        joken_div.style.display = 'none';

        if(clicado.id == 1)
        {
            switch(n_card)
            {
                case 1:
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

                    for(let i=0; i<2; i++) //contador loop para duplicar os cards de empate
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
                            <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>    
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('1').style.order = '2';
                    break;

                case 2:
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

                    for(let card of cards)
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
                            <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>    
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('2').style.order = '2';

                    break;

                default:
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
                            <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>    
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('3').style.order = '2';
                    break;

            }
        }

        if(clicado.id == 2)
        {
            switch(n_card)
            {
                case 1:
                    
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
                            <h2> VOCÊ VENCEU </h2>
                            <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>    
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('1').style.order = '2';
                    break;
                    
                case 2:
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

                    for(let i=0; i<2; i++)
                    {
                        for(let card of cards)
                        {   
                            if(card.titulo === "Pedra" || card.titulo === "Tesoura"){continue;}
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
                            <h2> EMPATE </h2>
                            <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>    
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('2').style.order = '2';
                    break;

                default: 
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

                    for(let card of cards)
                    {
                        if(card.titulo === "Pedra"){continue;}
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
                            <h2> VOCÊ PERDEU </h2>
                             <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>    
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('3').style.order = '2';
                    break;
            }
        }

        if(clicado.id == 3)
        {
            switch(n_card)
            {
                case 1:
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
                            <h2> VOCÊ PERDEU </h2>
                             <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>  
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('1').style.order = '2';
                    break;

                case 2:
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
                        if(card.titulo === "Pedra"){continue;}
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
                            <h2> VOCÊ VENCEU </h2>
                             <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>  
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('2').style.order = '2';

                    break;

                default:
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

                    for(let i=0; i<2; i++)
                    {
                        for(let card of cards)
                        {
                            if(card.titulo === "Pedra" || card.titulo === "Papel"){continue;}
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
                            <h2> EMPATE </h2>
                            <button id="new_game" type="button"> Jogar novamente </button>
                            <button id="quit" type="button"> Quit Game </button>  
                        </div>
                    </div>
                    `;
                    joken_result.innerHTML = html;
                    document.getElementById('3').style.order = '2';
                    break;
            }
        }
    }
}


function newGameOrQuit(event)
{
    if (event.target && event.target.id === 'new_game') 
    {
        joken_result.style.display = 'none';
        joken_div.style.display = 'flex';
    }
    else if(event.target && event.target.id === 'quit')
    {
        location.reload();
    }
}


