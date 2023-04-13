document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector("dialog");
    const buttonClose = document.querySelector("dialog #voltar");
    //const button = document.querySelectorAll(".card");

    // button.onclick = function () {
    //     modal.showModal();
    // }

    // buttonClose.onclick = function () {
    //     modal.close();
    // }

    function ShowModal() {
        modal.showModal();
    }

    function CloseModal(){
        modal.close();
    }
});
