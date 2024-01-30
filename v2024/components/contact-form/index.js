function parseForm(recibido){
    recibido.preventDefault();
    const resultado1 = new FormData(recibido.target);
    const resultado2 = Object.fromEntries(resultado1.entries());

    console.log("recibido: ", resultado2);
}

function testAt(){
    const el1 = document.querySelector(".contact-form-cont__form");

    const el2 = document.querySelector(".contact-form-cont h1");

    el1.addEventListener('submit', parseForm);

    el2.addEventListener('click', ()=>{
        el1.requestSubmit();
    });
}