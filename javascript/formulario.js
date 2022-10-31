export function form() {
  const data = document.querySelector(".dataNascimento").value.replaceAll('-', '/').split('/').reverse();

  const dataFormatada = `${data[0]}/${data[1]}/${data[2]}`;

  const dados = {
    name: document.querySelector(".nome").value,
    avatar: sessionStorage.getItem("image"),
    email: document.querySelector(".email").value,
    telefone: document.querySelector(".telefone").value,
    cpf: document.querySelector(".cpf").value,
    dataNascimento: dataFormatada,

  };

  return dados;
}
async function enviaForm(form) {
  await fetch("https://635188aadfe45bbd55c2cc8c.mockapi.io/pessoas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then(() => {
    document.querySelector(".nome").value = '';
    document.querySelector("#form6Example4").value = '';
    document.querySelector(".email").value = '';
    document.querySelector(".telefone").value = '';
    document.querySelector(".cpf").value = '';
    document.querySelector(".dataNascimento").value = 0;
  }).then(() => {
    document.querySelector('.botaoEnviar').innerHTML = "Enviar outro";
  });
}
const img = document.querySelector(".avatar");

document.querySelector(".botaoEnviar").addEventListener("click", (e) => {
  e.preventDefault()
  let anoAtual = new Date().getUTCFullYear();
  const data = document.querySelector(".dataNascimento").value.replaceAll('-', '/').split('/').reverse();

  let dadosForm = form()
  let comparandoNascimento = (
    () => {
      if (anoAtual - data[2] < 18) {
        document.querySelector('.formulario__mensagem-dataIncorreta').innerHTML = `<p> Data Inválida </p>`;
      } else {
        enviaForm(dadosForm);
        document.querySelector('.formulario__mensagem-dataIncorreta').innerHTML = '';

      }
    })()
  return comparandoNascimento;
});
img.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    sessionStorage.setItem("image", reader.result);
  });
  reader.readAsDataURL(img.files[0]);
});



document.querySelector('.cpf').addEventListener("change", (e) => {
  const cpf = e.target.value;
  const cpfFormato = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, "$1.$2.$3-$4")
  console.log(cpfFormato, 'cpf formatado')

  const cpfREGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  //  console.log(typeof(cpf), 'pegando o valor que esta sendo digitado')

  if (cpfREGEX.test(cpfFormato)) {
    document.querySelector('.cpf').value = cpfFormato
  } else {
   throw new Error(console.log("Digitou um valor errado champs"))
  }
})





document.querySelector('.telefone').addEventListener("blur", (e) => {
  const fone = e.target.value;
  const foneFormatado = fone.replace(/^(\d{2})(\d{5})(\d{4})*/, "($1)$2-$3");
  const foneREGEX = /^(\d{2})(\d{5})(\d{4})*/;

  if (foneREGEX.test(fone)) {
    document.querySelector(".telefone").value = foneFormatado
  } else {
    throw new Error(console.log("Digitou um valor errado champs"))
  }


})

