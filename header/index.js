function addHeader(toElement){
    const newHeader = document.createElement("div");

    newHeader.classList.add("header-principal");
    newHeader.innerHTML = `
        <span class="header-principal__logo-cont">
            <img src="https://images.ctfassets.net/aak4rmiplpud/4bDPd4m7cDjdCtFNQaOCoc/976e14237c72fd516ac561cde0affa86/loguitov1.png" alt="" class="header-principal__logo-cont__img">
        </span>

        <img src="./img/menu-svgrepo-com.png" alt="" class="header-principal__menu-img">
        <div class="header-principal__menu-extendido">
            <div class="header-principal__menu-extendido__portfolio">
                Portfolio
            </div>
            <div class="header-principal__menu-extendido__servicios">
                Servicios
            </div>
            <div class="header-principal__menu-extendido__contacto">
                Contacto
            </div>
        </div>
        <div class="header-principal__menu-completo-mobile">
            <img src="./img/menu-cerrar.png" alt="" class="header-principal__menu-completo-mobile__boton-cerrar">

            <div class="header-principal__menu-completo-mobile__portfolio">
                Portfolio
            </div>
            <div class="header-principal__menu-completo-mobile__servicios">
                Servicios
            </div>
            <div class="header-principal__menu-completo-mobile__contacto">
                Contacto
            </div>
        </div>
    `;

    toElement.appendChild(newHeader);
}