const pedra_card = document.getElementById('pedra_01');
const papel_card = document.getElementById('papel_02');
const tesoura_card = document.getElementById('tesoura_03');

function newGame(){
    window.location = 'index.html';
}

function quitGame(){
    window.location = 'https://philcard.github.io/';
}

papel_card.addEventListener('click', function() {

    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'flex';

    // CPU gerando aleatoriamente os números de cartas jokenpo
    const numero = Math.floor(Math.random() * 3) + 1;
    console.log(numero); // Vai exibir 1, 2 ou 3

    if(numero == 1)
    {
        document.getElementById('screen2').innerHTML = `
            <div id="screen2" class="conteudo-box">
                <div class="card-modulo">
                    <div id="papel_02" class="pic-box">
                        <img src="assets/img/icons/hand-paper.png">
                    </div>
                    <h2> Papel </h3>
                </div>

                <div id='win_loose'>
                    <h2> VOCÊ VENCEU! </h2>
                   <button type='button' onclick="newGame()"> Jogar novamente </button>
                    <button type='button' onclick="quitGame()"> Quit Game </button>  
                </div>

                <div id="card" class="card-modulo">
                    <div id="pedra_01" class="pic-box">
                        <img src="assets/img/icons/fist.png">
                    </div>
                    <h2> Pedra </h3>
                </div>
            </div> 
        `;
                //alert('ganhou a peleja');
    } 
    else if (numero == 2)
    {
        document.getElementById('screen2').innerHTML = `
            <div id="screen2" class="conteudo-box">
                <div class="card-modulo">
                    <div id="papel_02" class="pic-box">
                        <img src="assets/img/icons/hand-paper.png">
                    </div>
                    <h2> Papel </h3>
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
                    <h2> Papel </h3>
                </div>
            </div> 
        `;
                //alert('empate');
    }
    else if( numero == 3)
    {
                
        document.getElementById('screen2').innerHTML = `
            <div id="screen2" class="conteudo-box">
                <div class="card-modulo">
                    <div id="papel_02" class="pic-box">
                        <img src="assets/img/icons/hand-paper.png">
                    </div>
                    <h2> Papel </h3>
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
                    <h2> Tesoura </h3>
                </div>
            </div> 
        `;
    }
});

pedra_card.addEventListener('click', function() {
            
});

tesoura_card.addEventListener('click', function() {
            
});