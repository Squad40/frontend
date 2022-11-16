var state = false;

function toggle() {
  if (state) {
    document.getElementById("inp-password").setAttribute("type", "password");
    document.getElementById("eye").style.color = "#A9A9A9";
    state = false;
  } else {
    document.getElementById("inp-password").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#FE4400";
    state = true;
  }
}

// O código abaixo foi feito por Vinícius de Carvalho

const elementoEmail = document.getElementById("emaillogin");
const elementoSenha = document.getElementById("inp-password");
const elementoBotao = document.getElementById("botaoLogin");

let email = "";
let senha = "";

elementoEmail.addEventListener("change", () => {
  email = elementoEmail.value;
  console.log(email);
});

elementoSenha.addEventListener("change", () => {
  senha = elementoSenha.value;
  console.log(senha);
});

// // elementoBotao.addEventListener("click", () => {
//   handleLogin();
// });

// async function handleLogin() {
if (!email || !senha) {
  return alert("Informar E-mail e Senha");
}
console.log(email, senha);

const form = new FormData(document.getElementById("login"));
console.log(form);

const result = await fetch("http://localhost:8080/auth", {
  method: "POST",
  body: form,
});
const json = await result.json();
console.log(json);
// }
