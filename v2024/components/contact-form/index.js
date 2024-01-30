function parseForm(recibido){
    recibido.preventDefault();
    const resultado1 = new FormData(recibido.target);
    const resultado2 = Object.fromEntries(resultado1.entries());

    console.log("recibido: ", resultado2);
}

function contactForm__main(){
    const botonEnviar = document.querySelector(".contact-form-cont__form__boton-enviar");
    const formAEnviar = document.querySelector(".contact-form-cont__form");

    botonEnviar.addEventListener('click', () => {
        formAEnviar.requestSubmit();
    });

    formAEnviar.addEventListener('submit', parseForm);

}

contactForm__main();