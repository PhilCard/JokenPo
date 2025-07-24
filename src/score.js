const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

const tbody = document.getElementById('ranking-body');

(() => {
    ranking.forEach((item, index) => {
        const tr = document.createElement('tr');

        const tdPosicao = document.createElement('td');
        tdPosicao.textContent = `${index + 1}º`;

        const tdNome = document.createElement('td');
        tdNome.textContent = item.nome;

        const tdScore = document.createElement('td');
        tdScore.textContent = item.score;

        tr.appendChild(tdPosicao);
        tr.appendChild(tdNome);
        tr.appendChild(tdScore);

        tbody.appendChild(tr);
    });
})();
