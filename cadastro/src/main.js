// O código abaixo foi feito por Vinícius de Carvalho

const elementoNome = document.getElementById("nomeCadastro");
const pronomeEle = document.getElementById("rbEle");
const pronomeEla = document.getElementById("rbEla");
const elementoTelefone = document.getElementById("telefone");
const elementoEmailCadastro = document.getElementById("emailCadastro");
const elementoSenhaCadastro = document.getElementById("senhaCadastro");
const elementoRepetirSenhaCadastro = document.getElementById("repetirSenha");

let nomeCadastro = "";
let rbEle = "";
let rbEla = "";
let telefone = "";
let emailCadastro = "";
let senhaCadastro = "";
let repetirSenha = "";

elementoNome.addEventListener("change", () => {
  nomeCadastro = elementoNome.value;
  console.log(nomeCadastro);
});

pronomeEle.addEventListener("change", () => {
  rbEle = pronomeEle.value;
  console.log(rbEle);
});

pronomeEla.addEventListener("change", () => {
  rbEla = pronomeEla.value;
  console.log(rbEla);
});

elementoTelefone.addEventListener("change", () => {
  telefone = elementoTelefone.value;
  console.log(telefone);
});

elementoEmailCadastro.addEventListener("change", () => {
  emailCadastro = elementoEmailCadastro.value;
  console.log(emailCadastro);
});

elementoSenhaCadastro.addEventListener("change", () => {
  senhaCadastro = elementoSenhaCadastro.value;
  console.log(senhaCadastro);
});

elementoRepetirSenhaCadastro.addEventListener("change", () => {
  repetirSenha = elementoRepetirSenhaCadastro.value;
  console.log(repetirSenha);
});
