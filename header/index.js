function addHeader(toElement, elementToHide = null){
    const newHeader = document.createElement("div");

    let logoSrc = "https://images.ctfassets.net/aak4rmiplpud/4bDPd4m7cDjdCtFNQaOCoc/976e14237c72fd516ac561cde0affa86/loguitov1.png";

    newHeader.classList.add("header-principal");
    newHeader.innerHTML = `
        <span class="header-principal__logo-cont">
            <img src="${logoSrc}" alt="" class="header-principal__logo-cont__img">
        </span>

        <img src="./header/img/menu-svgrepo-com.png" alt="" class="header-principal__menu-img">
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
            <img src="./header/img/menu-cerrar.png" alt="" class="header-principal__menu-completo-mobile__boton-cerrar">

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

    const mainPageLogo = newHeader.querySelector(".header-principal__logo-cont__img");

    mainPageLogo.addEventListener('click', () => {
        window.location.replace("./");
    });

    const openButton = newHeader.querySelector(".header-principal__menu-img");
    const closeButton = newHeader.querySelector(".header-principal__menu-completo-mobile__boton-cerrar");

    const menuExtendido = newHeader.querySelector(".header-principal__menu-completo-mobile");

    openButton.addEventListener('click', () => {
        menuExtendido.classList.add("active-menu");

        if(elementToHide != null) {
            elementToHide.style.display = "none";
        }
    });

    closeButton.addEventListener('click', () => {
        menuExtendido.classList.remove("active-menu");

        if(elementToHide != null) {
            elementToHide.style.display = "";
        }
    });

    const portfolioButton1 = newHeader.querySelector(".header-principal__menu-extendido__portfolio");
    const portfolioButton2 = newHeader.querySelector(".header-principal__menu-completo-mobile__portfolio");

    portfolioButton1.addEventListener('click', () => {
        window.location.replace("./portfolio.html");
    });
    
    portfolioButton2.addEventListener('click', () => {
        window.location.replace("./portfolio.html");
    });

    const serviciosButton1 = newHeader.querySelector(".header-principal__menu-extendido__servicios");
    const serviciosButton2 = newHeader.querySelector(".header-principal__menu-completo-mobile__servicios");

    serviciosButton1.addEventListener('click', () => {
        window.location.replace("./servicios.html");
    });
    
    serviciosButton2.addEventListener('click', () => {
        window.location.replace("./servicios.html");
    });

    const contactoButton1 = newHeader.querySelector(".header-principal__menu-extendido__contacto");
    const contactoButton2 = newHeader.querySelector(".header-principal__menu-completo-mobile__contacto");

    contactoButton1.addEventListener('click', () => {
        window.location.replace("./contacto.html");
    });
    
    contactoButton2.addEventListener('click', () => {
        window.location.replace("./contacto.html");
    });

    toElement.appendChild(newHeader);
}