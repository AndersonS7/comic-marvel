const modal = document.querySelector("dialog");
const button = document.querySelector(".card");
const buttonClose = document.querySelector("dialog #voltar");

button.onclick = function () {
    modal.showModal();
}

buttonClose.onclick = function () {
    modal.close();
}