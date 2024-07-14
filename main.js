function menu() {
    // menu section

    document.getElementById('open-nav-menu').addEventListener('click', () => {
        document.querySelector('header nav .wrapper').classList.add('nav-open');
    });

    document.getElementById('close-nav-menu').addEventListener('click', () => {
        document.querySelector('header nav .wrapper').classList.remove('nav-open');
    });
}
setInterval(function timer(){
    const horas = document.querySelectorAll('.time-number');
    
    const data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    // use if quando for usar queryseletorAll para adicionar 
    //as horas nos seus indices com as variaveis criadas
    if(horas.length === 3){

        //SEGUNDO METÓDO DE HORAS PARA MOSTRAR NO HTML
            // usar String para converter a variavel number, e padStart() 
            //para adicionar um caractere antes e padEnde() para adicionar um caractere depois.
        horas[0].textContent = String(hora).padStart(2,'0');
        horas[1].textContent = String(minuto).padStart(2,'0');
        horas[2].textContent = String(segundo).padStart(2,'0');
        
        // o forEach colocar os estilos para cada elemento
        // horas.forEach(item =>{
        //     item.style.color = "yellow"
        // });


        // PRIMEIRO METÓDO DE HORAS PAR AMOSTRAR NO HTML

        // horas[0].textContent = hora < 10 ? '0' + hora : hora;
        // horas[1].textContent = minuto < 10 ? '0' + minuto : minuto;
        // horas[2].textContent = segundo < 10 ? '0' + segundo : segundo;
           
    }
        
            
}, 1000);

function temperatura() {
   let greetingText = "Good morning";
    let setHoras = new Date().getHours();
    if(setHoras < 18){
        greetingText = "Good morning";
    }else if(setHoras < 19 ){
         greetingText = "Good afternoon";
    }else if(setHoras){
        greetingText = "Good evening"
}
   
    function farhCelsius(temperature) {
        let farh = (temperature * 9 / 5) + 32;
        return farh;
    }

    
    const weatherCondition = "Sunny";
    const userLocation = "New York";
    let temperature = 45;

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C`;
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${farhCelsius(temperature).toFixed(1)}°F`;

    document.querySelector('#greeting').innerHTML = greetingText;
    document.querySelector('p#weather').innerHTML = celsiusText;

    document.querySelector('.weather-group').addEventListener("click", (event) => {
        if (event.target.id === "celsius") {
            document.querySelector('p#weather').innerHTML = celsiusText;
        } else if (event.target.id === "fahr") {
            document.querySelector('#weather').innerHTML = fahrText;
        }
    });

}

function tubnails(){
    const galeriaImg = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
    {
        src: "./assets/gallery/img1.png",
        alt: "Thumbnail Image 4"
    }
];

let mainImage = document.querySelector("#gallery > img");
let thumbnail = document.querySelector("#gallery .thumbnails")
mainImage.src = galeriaImg[3].src
mainImage.alt = galeriaImg[0].alt


// <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">
//           <img src="./assets/gallery/image2.jpg" alt="Thumbnail Image 2" data-array-index="1" data-selected="false">
//           <img src="./assets/gallery/image3.jpg" alt="Thumbnail Image 3" data-array-index="2" data-selected="false"></img>
galeriaImg.forEach(function (image, index) {
    let foto = document.createElement('img');
    foto.src = image.src
    foto.alt = image.alt
    foto.dataset.arrayIndex = index;
    foto.dataset.selected = index === 0 ? true : false

    foto.addEventListener('click', function (e) {
        let selectedIndex = e.target.dataset.arrayIndex
        let selectedImage = galeriaImg[selectedIndex];

        mainImage.src = selectedImage.src
        mainImage.alt = selectedImage.alt
        thumbnail.querySelectorAll("img").forEach(function (img) {
            img.dataset.selected = false
        })
            e.target.dataset.selected = true
    })

    thumbnail.appendChild(foto)

});


}
tubnails()
temperatura();
menu();
