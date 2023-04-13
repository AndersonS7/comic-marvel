document.addEventListener("DOMContentLoaded", function () {

    const modal = document.querySelector("dialog");
    const buttonClose = document.querySelector("dialog #voltar");

    const publicKey = "efb22b58ab642fabb5e7e0ea8fb67c45";
    const privateKey = "30c0e62f8bd2eaa2d620b21444e0b94c6a76e416";
    const time = 1565045589;

    axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=8da0078cb66a3cf087bbc80d9cc00e5b`)
        .then(response => {
            const data = response.data.data.results
            console.log(data);

            data.forEach(element => {
                const srcImg = element.thumbnail.path + "." + element.thumbnail.extension;
                const price = element.prices[0].price;
                const title = element.title;
                var description = element.textObjects[0] != undefined ? description = element.textObjects[0].text : "has no description";

                creatElementComic(srcImg, price, title, description);
            });
        })
        .catch(err => console.log(err));


    function creatElementComic(srcImg, price, title, description) {
        const content_cards = document.querySelector("#content_cards");

        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.addEventListener("click", () => {
            ShowModal(srcImg, title, description);
        });

        const imga = document.createElement("img");
        imga.src = srcImg != null || srcImg != undefined ? imga.src = srcImg : imga.src = "./assets/img/capa-hq.jpg";

        const h2 = document.createElement("h2");
        h2.textContent = title;

        const p = document.createElement("p");
        p.innerHTML = price == undefined || price == null ? p.innerHTML = "$ 0" : p.innerHTML = "$" + price;

        divCard.appendChild(imga);
        divCard.appendChild(h2);
        divCard.appendChild(p);
        content_cards.appendChild(divCard);
    }

    function ShowModal(srcImg, title, description) {
        modal.showModal();

        const imag = modal.querySelector("img");
        imag.src = srcImg;

        const h2 = modal.querySelector("h2");
        h2.textContent = title;

        const desc = modal.querySelector("#description");
        desc.innerHTML = description;

    }

    buttonClose.onclick = function () {
        modal.close();
    }

    //creatElementComic();
    //element.title
    //imagem

    /* pegar o nome do author
    data.forEach(element => {
            element.creators.items.forEach(a => {
                if (a.name != null || a.name != undefined) {
                    console.log(a.name)
                }
            })
        });
    */

    /* descrição
    data.forEach(element => {
            if(element.textObjects[0] != null || element.textObjects[0] != undefined){
    
                console.log(element.textObjects[0].text);
            }
        });
    */
});
