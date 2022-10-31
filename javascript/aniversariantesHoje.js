import Api from "./api.js";

const resposta = await Api;

const corpoMostraDia = document.querySelector('.secao__aniversariantes');

export async function mostraTres() {
  let listaNivers = [];
  let dataAtual = new Intl.DateTimeFormat('pt-BR').format(new Date(Date.now())).toString();
  let resFiltrada = await resposta.map((element) => {
    return {
      ...element,
      dataNascimento: element.dataNascimento ? element?.dataNascimento : '',
    }
  })

  resFiltrada.map(element => {
    element.dataNascimento.substring(0, 5) === dataAtual.substring(0, 5) ? listaNivers.push({ ...element }) : '';
  })
  const aniversariantesDoDia = listaNivers.length > 0 ? listaNivers.map(item => {
    return `<li>
        <img src=${item.avatar} />
        <h3>Nome: ${item.name}</h3>
        <h4>Data de aniversário: ${item.dataNascimento}</h4> 
        </li>
  `}).join('') : `
    <li>
    <h2 class="secao_aniversariantes--naoEncontramos">Não temos aniversariantes hoje </h2>
    <img id="secao__aniversariantes__meme" src="../assets/images/mscoott.gif" />
    </li>
    `;

  return aniversariantesDoDia;


}


corpoMostraDia.innerHTML = await mostraTres();