function newGame()
{
    document.getElementById('screen1').style.display = 'flex';
    document.getElementById('screen2').style.display = 'none';
}

function quitGame()
{
    window.location = 'index.html';
}

document.getElementById('screen1').addEventListener("click", function(event) {

    let numero = Math.floor(Math.random() * 3) + 1;
    let card_click = event.target.closest('.card-modulo > div[id]');
  
    if (card_click) 
    {
        document.getElementById('screen2').style.display = 'flex';
        document.getElementById('screen1').style.display = 'none';
        
        if (card_click.id === 'pedra_01') 
        {
            alert('clicou na pedra');
        }

        if (card_click.id === 'papel_02') 
        {
            if(numero === 1) 
            {
                document.getElementById('screen2').innerHTML = `
                    <div id="screen2" class="conteudo-box">
                        <div class="animate__animated animate__zoomIn">
                            <div class="card-modulo">
                                <div id="papel_02" class="pic-box">
                                    <img src="assets/img/icons/hand-paper.png">
                                </div>
                                <h2> Papel </h2>
                            </div>
                        </div>

                        <div id='win_loose'>
                            <div class="animate__animated animate__zoomIn">
                                <h2> VOCÊ VENCEU! </h2>
                                <button type='button' onclick="newGame()"> Jogar novamente </button>
                                <button type='button' onclick="quitGame()"> Quit Game </button>  
                            </div>
                        </div>

                        <div id="card" class="card-modulo">
                            <div class="animate__animated animate__zoomIn">
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
                document.getElementById('screen2').innerHTML = `
                    <div id="screen2" class="conteudo-box">
                        <div class="card-modulo">
                            <div id="papel_02" class="pic-box">
                                <img src="assets/img/icons/hand-paper.png">
                            </div>
                            <h2> Papel </h2>
                        </div>

                        <div id='win_loose'>
                            <h2> EMPATE! </h2>
                            <button type='button' onclick="newGame()"> Jogar novamente </button>
                            <button type='button' onclick="quitGame()"> Quit Game </button>  
                        </div>

                        <div class="card-modulo">
                            <div id="papel_02" class="pic-box">
                                <img src="assets/img/icons/hand-paper.png">
                            </div>
                            <h2> Papel </h2>
                        </div>
                    </div> 
                `;
            }
            else if (numero === 3)
            {
                document.getElementById('screen2').innerHTML = `
                    <div id="screen2" class="conteudo-box">
                        <div class="card-modulo">
                            <div id="papel_02" class="pic-box">
                                <img src="assets/img/icons/hand-paper.png">
                            </div>
                            <h2> Papel </h2>
                        </div>

                        <div id='win_loose'>
                            <h2> VOCÊ PERDEU! </h2>
                            <button type='button' onclick="newGame()"> Jogar novamente </button>
                            <button type='button' onclick="quitGame()"> Quit Game </button>  
                        </div>

                        <div class="card-modulo">
                            <div id="tesoura_03" class="pic-box">
                                <img src="assets/img/icons/scissors.png">
                            </div>
                            <h2> Tesoura </h2>
                        </div>
                    </div> 
                `;
            }
        }

        if(card_click.id === 'tesoura_03')
        {
            //bloco de cod tesoura
        }
    }
});