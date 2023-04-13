document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector("dialog");
    const button = document.querySelectorAll(".card");
    const buttonClose = document.querySelector("dialog #voltar");

    console.log(button.length);

    button.onclick = function () {
        modal.showModal();
    }

    buttonClose.onclick = function () {
        modal.close();
    }
});

function teste (){
    alert('vai da certo');
}