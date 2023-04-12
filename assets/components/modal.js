class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const dialog = document.createElement("dialog");

        const card_modal = document.createElement("div");
        card_modal.setAttribute("class","card_modal");



        //---- ---- ----
        const modal_btn = document.createElement("div");
        modal_btn.setAttribute("id", "modal_btn");

        dialog.appendChild(card_modal);
        dialog.appendChild(modal_btn);

        return dialog;
    }

    styles() {
        const style = document.createElement("style");

        style.textContent = `


        
        `

        return style;
    }
}

customElements.define("my-modal", Card);