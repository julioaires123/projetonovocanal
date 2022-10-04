//horário de Brasília////////////////////////////////////////////////////////////////////////////////////////
        setInterval(function relog() {
        let rel = document.getElementById('relogio01')
       
        let data = new Date();
        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds()+30;

        if (s > 59){ //Aumenta + 1 min, hora, segundos quando ele chega 00 segundos sem esse if ele só vira nos 30 segunstos do tempo
         m = m + 1;
        }

        if (m > 59){
         h = h + 1;   
         }
      

        if (h === 24) {

         h = 00;
        }
 
        if (m === 60) {
 
         m = 00;
        }

     

            if (s >= 60 && s <= 89){// Quando aumenta os +30 segundos ele vai contando de 60 segundos a 89 segundos assim com esse if ele arruma.
                s = s - 60
            }

          if (h > 24){ // Deixa a hora do Fuso-Horario certo sem o código ele fica 24:00:00 com o código ele fica 00:00:00
        
           h = h - 24
          }

          if (h < 10) {// coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        
        if (m < 10) {
           m = `0${m}`
        }
        
        if (s < 10) {
           s = `0${s}`
        }
        // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
            rel.innerHTML = `${h}:${m}:${s}`
        
        }, 1000)

    //horário de Fernando de Noronha////////////////////////////////////////////////////////////////////////
    
    setInterval(function relog2() {
        let rel = document.getElementById('relogio2')
        let data = new Date();
        let h = data.getHours() + 1; //<< aumentou 1 hora No Fuso-Horario de Fernando de Noronha
        let m = data.getMinutes();
        let s = data.getSeconds() + 30;  //<< aumentou 30 segundos 

         if (s > 59){ //Aumenta + 1 min, hora, segundos quando ele chega 00 segundos sem esse if ele só vira nos 30 segunstos do tempo
            m = m + 1;
           }
           if (m > 59){
            h = h + 1;
            }
              
           if (h === 24) {
   
            h = 00;
           }
    
           if (m === 60) {
    
            m = 00;
           }

            if (s >= 60 && s <= 89){// Quando aumenta os +30 segundos ele vai contando de 60 segundos a 89 segundos assim com esse if ele arruma.
                   s = s - 60
               }  
             if (h > 24){  // Deixa a hora do Fuso-Horario certo sem o código ele fica 24:00:00 com o código ele fica 00:00:00
           
              h = h - 24
             }
             if (h < 10) {  // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
              h = `0${h}`
           } 
           if (m < 10) {
              m = `0${m}`
           }
           if (s < 10) {
              s = `0${s}`
           }
           // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
               rel.innerHTML = `${h}:${m}:${s}`
           
           }, 1000)

    //horário de Amazonas///////////////////////////////////////////////////////////////////////////////////   
    setInterval(function relog3() {
        let rel = document.getElementById('relogio3')
        let data = new Date();
        let h = data.getHours() + 23; //<< Diminuiu 1 hora Fuso-Horario do Amazonas
        let m = data.getMinutes();
        let s = data.getSeconds() + 30;  //<< aumentou 30 segundos 

        //Aumenta + 1 min, hora, segundos quando ele chega 00 segundos sem esse if ele só vira nos 30 segunstos do tempo

        if (s > 59){
         m = m + 1;
        }

        
        if (m > 59){
         h = h + 1;
         }
           

        if (h === 24) {

         h = 00;
        }
 
        if (m === 60) {
 
         m = 00;
        }
 if (s >= 60 && s <= 89){// Quando aumenta os +30 segundos ele vai contando de 60 segundos a 89 segundos assim com esse if ele arruma.
                s = s - 60
            }

          if (h > 24){  // Deixa a hora do Fuso-Horario certo sem o código ele fica 24:00:00 com o código ele fica 00:00:00
        
           h = h - 24
          }

          if (h < 10) {  // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        
        if (m < 10) {
           m = `0${m}`
        }
        
        if (s < 10) {
           s = `0${s}`
        }
            rel.innerHTML = `${h}:${m}:${s}`   // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
           
           
           }, 1000)
    
    //horário de Acre////////////////////////////////////////////////////////////////////////////////////
    
    setInterval(function relog4() {
        let rel = document.getElementById('relogio4')
        let data = new Date();
        let h = data.getHours() + 22; //<< Diminuiu 2 hora Fuso-Horario do Acre
        let m = data.getMinutes();
        let s = data.getSeconds() + 30;   //<< aumentou 30 segundos 
    
      
        if (s > 59){
         m = m + 1;
        }
        if (m > 59){
         h = h + 1;
        }

        if (h === 24) {

         h = 00;
        }
 
        if (m === 60) {
 
         m = 00;
        }

            if (s >= 60 && s <= 89){ // Quando aumenta os +30 segundos ele vai contando de 60 segundos a 89 segundos assim com esse if ele arruma.
                s = s - 60
            }
        
          if (h > 24){ // Deixa a hora do Fuso-Horario certo sem o código ele fica 24:00:00 com o código ele fica 00:00:00
        
           h = h - 24
          }

          if (h < 10) { // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        
        if (m < 10) {
           m = `0${m}`
        }
        
        if (s < 10) {
           s = `0${s}`
        }
            rel.innerHTML = `${h}:${m}:${s}`  // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
           
           }, 1000)
    
//Dia mês e ano /////////////////////////////////////////////////////////////////////////////////////////////

let meses = new Array("Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Julho", "Agosto", "Setembro", "Outubro", "Novembro")
    let semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")

    let rel = document.getElementById('date')
    let data = new Date();
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    document.write(semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano);
