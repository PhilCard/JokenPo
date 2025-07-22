const cards = [
  {id: 'card-01', img: "assets/img/icons/fist.png", titulo:"Pedra"}, //usar data-id
  {id: 'card-02', img: "assets/img/icons/hand-paper.png", titulo:"Papel"},
  {id: 'card-03', img: "assets/img/icons/scissors.png", titulo:"Tesoura"}
];

const score = [
    {nome : 'user', score : 3},
    {nome : 'user', score : 2},
    {nome : 'user', score : 1}
];

const home_container = document.getElementById('home');
const game_container = document.getElementById('game');
const result_container = document.getElementById('result');
const result_game = document.getElementById('result_jokenpo');
let nome_jogador;
let jogador = 0;
let cpu = 0;

//usar filter para filtrar cartas apos selecionar


document.addEventListener("DOMContentLoaded", function() {
    result_container.style.display = 'none';
    game_container.style.display = 'none';
});

document.getElementById('new_game').addEventListener('click', function() {
    nome_jogador = prompt('digite seu nome');
    home_container.style.display = 'none';
    game_container.style.display = 'block';
});

game_container.addEventListener("click", jogadorVsCpu);


function jogadorVsCpu(event)
{
    //logica para verificar se perdeu ou venceu
    let num_cpu_sorteio = Math.floor(Math.random() * 3) + 1;
    let card_data = event.target.closest("[data-id]");
    let card_id = card_data.dataset.id;
    let resultado = '';

    if (card_data && game_container.contains(card_data)) 
    {
        game_container.style.display = 'none';
        result_container.style.display = 'block';
        //tentar melhorar lógica para diminuir if-else
        if(card_id === 'card-01')
        { //adicionar metodo confirm para continuar ou quitar
            if(num_cpu_sorteio === 1)
            {
                //empate adicionar efeito sonoro
                jogador++
                cpu++;
                placar(jogador, cpu);

                for(let i=0; i<2; i++)
                {
                    cards
                    .filter(card => card.titulo !== "Tesoura" && card.titulo !== "Papel")
                    .forEach(card => {
                        resultado += geraCardsPo(card);
                    });
                }
                result_game.innerHTML = resultado;
                //adicionar none pointer events
            }
            else if(num_cpu_sorteio === 2)
            {
                alert('você perdeu')
                cpu++;
                placar(jogador, cpu);

                cards
                .filter(card => card.titulo !== "Tesoura")
                .forEach(card => {
                    resultado += geraCardsPo(card)
                });
                result_game.innerHTML = resultado;
            }   
            else 
            {   
                alert('você ganhou');
                jogador++;
                placar(jogador, cpu);

                cards
                .filter(card => card.titulo !== "Papel")
                .forEach(card => {
                    resultado += geraCardsPo(card);
                });
                result_game.innerHTML = resultado;
            }
        }

    }

    //tentar colocar venceu - perdeu dentro de um objeto
    
}



function placar(pt_jogador, pt_cpu) 
{
    document.getElementById('pts_jogador').textContent = pt_jogador;
    document.getElementById('pts_cpu').textContent = pt_cpu;
}


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


function scoreGame()
{

}

