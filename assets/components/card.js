class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        shadow.appendChild(this.script());
    }

    build() {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const img = document.createElement("img");
        img.src = this.getAttribute("path-src") || "./assets/img/capa-hq.jpg";
        img.alt = "imagem da capa";

        const h2 = document.createElement("h2");
        h2.textContent = this.getAttribute("title") || "does not exist";

        const p = document.createElement("p");
        p.textContent = this.getAttribute("content") || "does not exist";

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p);

        return card;
    }

    styles() {
        const style = document.createElement("style");

        style.textContent = `

            .card {
                max-width: 260px;
                height: auto;
                padding: 10px;
            }
            
            .card img {
                max-width: 250px;
                height: auto;
                transition: .3s;
            }
            
            .card img:hover {
                max-width: 255px;
                height: auto;
            }
        
        `

        return style;
    }

    script() {
        const script = document.createElement("script");

        script.textContent = `
            alert("vai da certo.");
            const modal = document.querySelector("dialog");
            const button = document.querySelector(".card");
            const buttonClose = document.querySelector("dialog #voltar");
            
            button.onclick = function (){
            modal.showModal();
            }
            
            buttonClose.onclick = function (){
            modal.close();
            }

        `

        return script;
    }
}

customElements.define("my-card", Card);