
let player = 0;
let cpu = 0;
//localStorage.setItem('pontos_cpu', cpu);
//localStorage.setItem('pontos_player', player);
//console.log(localStorage.getItem('pontos_player'));
//console.log(localStorage.getItem('pontos_cpu')); // usar get aqui em cima

document.getElementById('joken_cards').addEventListener("click", function(event) {

    let numero = Math.floor(Math.random() * 3) + 1;
    let card_click = event.target.closest('.card-modulo > div[id]');
  
    if (card_click) 
    {
        document.getElementById('joken_result').style.display = 'flex';
        document.getElementById('joken_result').style.paddingTop = '10%';
        document.getElementById('joken_cards').style.display = 'none';


         /* <----------- começo bloco pedra --------------------> */

        if (card_click.id === 'pedra_01') 
        {
            if(numero === 1)
            {
                player++;
                cpu++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/fist.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> EMPATE! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button>  
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="pedra_01" class="pic-box">
                                    <img src="assets/img/icons/fist.png">
                                </div>
                                <h2> Pedra </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }
            else if(numero === 2)
            {
                cpu++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/fist.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> VOCÊ PERDEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button>  
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="pedra_01" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Pedra </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }
            else if(numero === 3)
            {
                player++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/fist.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> VOCÊ VENCEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button>  
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="pedra_01" class="pic-box">
                                    <img src="assets/img/icons/scissors.png">
                                </div>
                                <h2> Pedra </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }
        }

        /* <----------- fim bloco pedra --------------------> */


        /* <----------- começo bloco papel --------------------> */

        if (card_click.id === 'papel_02') 
        {
            if(numero === 1) 
            {   
                player++
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> VOCÊ VENCEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button>  
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="pedra_01" class="pic-box">
                                    <img src="assets/img/icons/fist.png">
                                </div>
                                <h2> Pedra </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }
            else if(numero === 2)
            {
               player++;
               cpu++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> EMPATE! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button> 
                            </div> 
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }
            else if (numero === 3)
            {   
                cpu++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">

                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> VOCÊ PERDEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button> 
                            </div> 
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="tesoura_03" class="pic-box">
                                    <img src="assets/img/icons/scissors.png">
                                </div>
                                <h2> Tesoura </h2>
                            </div>
                        </div>
                    </div> 
                `;
                
            }
        }
        /* <----------- fim bloco papel --------------------> */


        /* <----------- começo bloco tesoura --------------------> */

        if(card_click.id === 'tesoura_03')
        {
            if(numero === 1)
            {
                cpu++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/scissors.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> VOCÊ PERDEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button> 
                            </div> 
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/fist.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }

            else if(numero === 2)
            {
                player++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/scissors.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> VOCÊ VENCEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button> 
                            </div> 
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>
                    </div> 
                `;
            }

            else if(numero === 3)
            {
                player++;
                cpu++;
                document.getElementById('joken_result').innerHTML = `
                    <div class="conteudo-box-result">
                        <div id="placar">
                            <div class="jogador">
                                <h2>Jogador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-jogador">${player}</div>
                                </div>
                            </div>
                            <div class="jogador">
                                <h2>Computador</h2>
                                <div class="animate__animated animate__zoomIn animate__delay-3s">
                                    <div class="pontos" id="pontos-computador">${cpu}</div>
                                </div>
                            </div>
                        </div>

                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/scissors.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn animate__delay-2s">
                                <h2> EMPATE! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button> 
                            </div> 
                        </div>

                        <div class="animate__animated animate__zoomIn animate__delay-1s">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/scissors.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>
                    </div> 
                `;
                
            }
        }

        /* <----------- fim bloco tesoura --------------------> */
    }
});

function newGame()
{
    document.getElementById('joken_cards').style.display = 'flex';
    document.getElementById('joken_result').style.display = 'none';
}

function quitGame()
{
    window.location = 'index.html';
}