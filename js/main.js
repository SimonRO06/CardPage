class HeroCard extends HTMLElement {
    constructor() {
        super();
        
        const SHADOW = this.attachShadow({ mode: 'open' });

        const CARD_CONTAINER = document.createElement('div');
        const CARD_INFO_CONTAINER = document.createElement('div');
        const NOMBRE = document.createElement('h1');
        const IMAGEN = document.createElement('img');
        const NOMBRE_CLAVE = document.createElement('p');
        const CASA = document.createElement('p');
        const AÑO = document.createElement('p');
        const DESCRIPCION = document.createElement('p');
        const BOTON_VER_MAS = document.createElement('a');
        
        CARD_CONTAINER.className = 'card';
        CARD_CONTAINER.setAttribute("nombre", "");
        CARD_CONTAINER.setAttribute("imagen", "https://i.pinimg.com/236x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg");
        CARD_CONTAINER.setAttribute("nombre-clave", "");
        CARD_CONTAINER.setAttribute("casa", "");
        CARD_CONTAINER.setAttribute("año", "");
        CARD_CONTAINER.setAttribute("descripcion", "");

        const nombre = this.getAttribute("nombre") || "Desconocido";
        const imagen = this.getAttribute("imagen") || "https://i.pinimg.com/236x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg";
        const identidad = this.getAttribute("nombre-clave") || "Desconocido";
        const casa = this.getAttribute("casa") || "Desconocido";
        const año = this.getAttribute("año") || "Desconocido";
        const descripcion = this.getAttribute("descripcion") || "Sin descripción";

        CARD_INFO_CONTAINER.className = 'content';

        NOMBRE.id = 'card-title';
        NOMBRE.innerHTML = `${nombre}`;

        IMAGEN.id = 'image';
        IMAGEN.src = imagen;

        NOMBRE_CLAVE.id = 'identity';
        NOMBRE_CLAVE.innerHTML = `<strong>NOMBRE CLAVE: </strong> ${identidad}`;

        CASA.id = 'home';
        CASA.innerHTML = `<strong>CASA: </strong> ${casa}`;

        AÑO.id = 'year';
        AÑO.innerHTML = `<strong>AÑO: </strong> ${año}`;

        DESCRIPCION.id = 'description';
        DESCRIPCION.innerHTML = `<strong>DESCRIPCION: </strong> ${descripcion}`;

        BOTON_VER_MAS.id = 'btn-ver-mas';
        BOTON_VER_MAS.href = `#`
        BOTON_VER_MAS.innerHTML = `VER MAS`

        const styles = `
        .btn {
        text-decoration: none;
        color: white;
        background-color: black;
        padding: 5px;
        border-radius: 5px;
        }
        #cards {
            background-color: rgb(150, 0, 0);
            height: 94vh;
            border-radius: 5px;
            padding: 5px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            overflow: scroll;
            scrollbar-color: blue;
        }
        #cards::-webkit-scrollbar {
            display: none;
        }
        .card {
            background-image: url(https://static.vecteezy.com/system/resources/previews/011/596/673/non_2x/comic-style-background-with-halftone-effect-superhero-poster-backdrop-vintage-free-vector.jpg);
            background-size: cover;
            width: 15vw;
            height: 45vh;
            overflow: hidden;
            padding: 5px 10px;
            border: 2px solid rgb(0, 0, 0);
            border-radius: 5px;
            grid-column: auto;
        }
        .card:hover {
            height: fit-content;
        }
        .card h1 {
            background-size: cover;
            text-align: center;
        }
        .card img {
            display: block;
            margin: auto;
            width: 10vw;
            height: 20vh;
            border-radius: 100%;
        }
        #btn-ver-mas {
            text-decoration: none;
            padding: 5px;
            display: flex;
            justify-content: center;
            color: black;
            background-color: rgb(255, 106, 106);
            border-radius: 5px;
        }
        #content {
            background-color: rgb(255, 255, 255);
            overflow: hidden;
            height: 90%;
            border-radius: 5px;
            padding: 10px;
        }
        #card-title {
            font-family: "Bungee Tint", sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        #btn-ver-mas {
        }
    `;

        const styleSheet = document.createElement("style");
        styleSheet.textContent = styles;
        SHADOW.appendChild(styleSheet);
        CARD_INFO_CONTAINER.append(NOMBRE, IMAGEN, NOMBRE_CLAVE, CASA, AÑO, DESCRIPCION, BOTON_VER_MAS);
        CARD_CONTAINER.append(CARD_INFO_CONTAINER);
        SHADOW.append(CARD_CONTAINER);
    }
}
customElements.define('hero-card', HeroCard);