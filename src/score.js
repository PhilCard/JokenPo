const score_div = document.getElementById('score_joken');
const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

window.addEventListener('load', function(){

    let html = `
    <table class="ranking-table">
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Pontos</th>
            </tr>
        </thead>
    <tbody>
    `;

    ranking.forEach((item, index) => { //usar responseText
        html += `
        <tr>
            <td>${index + 1}º</td>
            <td>${item.nome}</td>
            <td>${item.score}</td>
        </tr>
    `;
    });

    html += `
        </tbody>
    </table>
    `;

    document.getElementById("score_joken").innerHTML = html;
})
