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