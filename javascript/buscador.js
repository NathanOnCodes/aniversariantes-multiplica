import Api from "./api.js";

export const buscador = () => {
    const corpo = document.querySelector(".secao__buscador-lista--ul");
    document
        .querySelector(".input-busca")
        .addEventListener("change", async function (event) {
            event.preventDefault();
            const valor = event.target.value.toUpperCase();
            const recebe = await Api;
            const filtro = recebe.filter((name) => {
                if (name.name.toUpperCase() === valor) {
                    return name.name;
                }
            });
            const filtroFormatado = filtro
                .map((name) => {
                    return `
                  <li>
                    <img src=${name.avatar} />
                    <h2> Nome: ${name.name} </h2>
                    <p> Nascimento: ${name.dataNascimento} </p>
                  </li>
                `;
                })
                .join("");
            const formatandoContainer = () => {
                if (filtro.length != 0) {
                    return `${filtroFormatado}`;
                } else {
                    return `
            <div>
              <h2 class="secao__buscador-lista--warn"> Nenhum colega encontrado!!! </h2>
              <img class="secao__buscador-notfound" src="../assets/images/notfound-removebg-preview.png" alt="not found">
            </div>`;
                }
            };
            corpo.innerHTML = formatandoContainer();
        });
}