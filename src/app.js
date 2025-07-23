//------------------- declaração de arrays e objetos --------------------//

const cards = [
  {img: "assets/img/icons/fist.png", titulo:"Pedra"}, //usar data-id
  {img: "assets/img/icons/hand-paper.png", titulo:"Papel"},
  {img: "assets/img/icons/scissors.png", titulo:"Tesoura"}
];

 const jokenpo = {
    1 : 'Pedra',
    2 : 'Papel',
    3 : 'Tesoura'
}

const score = [
    {nome : 'user', score : 3},
    {nome : 'user', score : 2},
    {nome : 'user', score : 1}
];

//------------------- declaração de arrays e objetos --------------------//


// ---------------------- const div ------------- //
const home_container = document.getElementById('home');
const game_container = document.getElementById('game');
const result_container = document.getElementById('result');
const result_game = document.getElementById('result_jokenpo');
// ---------------------- const div ------------- //

// ---- var global do game ---//
let nome_jogador;
let jogador = 0;
let cpu = 0;
// ---- var global do game ---//


// ---------------------- click events ----------------- //

document.addEventListener("DOMContentLoaded", function() {
    result_container.style.display = 'none';
    game_container.style.display = 'none';
});

document.getElementById('new_game').addEventListener('click', function() {
    nome_jogador = prompt('digite seu nome');
    home_container.style.display = 'none';
    game_container.style.display = 'block';
});

game_container.addEventListener("click", exibeResultado);

// ---------------------- click events ----------------- //


//-------------------- game logic ---------------------//

function jogadorVsCpu(jogadaJogador, jogadaCpu)
{
    if
    (
    jogadaJogador === 'Pedra' && jogadaCpu === 'Tesoura' || 
    jogadaJogador === 'Papel' && jogadaCpu === 'Pedra' ||
    jogadaJogador === 'Tesoura' && jogadaCpu === 'Papel'
    ) {
        alert('venceu');
        jogador++;
        placar(jogador, cpu);
    }
    else if
    (
    jogadaCpu === 'Pedra' && jogadaJogador === 'Tesoura' || 
    jogadaCpu === 'Papel' && jogadaJogador === 'Pedra' ||
    jogadaCpu === 'Tesoura' && jogadaJogador === 'Papel'
    ) {
        alert('perdeu')
        cpu++;
        placar(jogador, cpu);
    }
    else
    {
        alert('empate')
        jogador++
        cpu++;
        placar(jogador, cpu);
    }
}

//-------------------- game logic ---------------------//


//-------------- user display -------------------- //

function exibeResultado(event)
{
    let num_cpu_sorteio = Math.floor(Math.random() * 3) + 1;
    let card_data = event.target.closest("[data-id]");
    let card_id = card_data.dataset.id;
    let resultado = '';

    if (card_data && game_container.contains(card_data)) 
    {
        let id_jokenpo = card_id;
        id_jokenpo = id_jokenpo.replace('card-0','');
        game_container.style.display = 'none';
        result_container.style.display = 'block';

        jogadorVsCpu(jokenpo[id_jokenpo], jokenpo[num_cpu_sorteio]);

        if(jokenpo[id_jokenpo] === jokenpo[num_cpu_sorteio])
        {
            for(let i=0; i<2; i++)
            {
                cards
                    .filter(card => card.titulo === jokenpo[id_jokenpo] && card.titulo === jokenpo[num_cpu_sorteio]) 
                    .forEach(card => {
                        resultado += geraCardsPo(card);
                    });
                
                result_game.innerHTML = resultado;
            }
        }
        else
        {
            cards
                .filter(card => card.titulo === jokenpo[id_jokenpo] || card.titulo === jokenpo[num_cpu_sorteio])
                .forEach(card => {
                    resultado += geraCardsPo(card);
                });
            result_game.innerHTML = resultado;
        }

    }
}

//-------------- user display -------------------- //


// ------------------ points ------------------- //
function placar(pt_jogador, pt_cpu) 
{
    document.getElementById('pts_jogador').textContent = pt_jogador;
    document.getElementById('pts_cpu').textContent = pt_cpu;
}
// ------------------ points ------------------- //


// --------------------- card generator --------- //
function geraCardsPo(cardspo)
{
    return `
    <div class="animate__animated animate__fadeIn">
        <div data-id="${cardspo.id}" class="card bg-dark">
            <div class="card-body">
                <img src="${cardspo.img}" class="rounded"/>
                <h4 class="card-title text-center text-light">${cardspo.titulo}</h4>
            </div>
        </div>
    </div>`
}
// --------------------- card generator --------- //



/// ------------------ ranking score ------------- //

function scoreGame()
{

}

/// ------------------ ranking score ------------- //

