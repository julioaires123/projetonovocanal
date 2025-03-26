// Atualiza o relógio para diferentes fusos horários no Brasil
function atualizarRelogio(id, offset) {
    setInterval(() => {
        let rel = document.getElementById(id);
        let data = new Date();
        data.setUTCHours(data.getUTCHours() - 0 + offset); // UTC-3 para Brasília como referência
        data.setSeconds(data.getSeconds() + 24); // Adiciona 19 segundos
        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds();
        
        if (h < 10) h = `0${h}`;
        if (m < 10) m = `0${m}`;
        if (s < 10) s = `0${s}`;
        
        rel.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
}

// Inicializa os relógios
atualizarRelogio('relogio01', 0); // Brasília (UTC-3)
atualizarRelogio('relogio2', 1);  // Fernando de Noronha (UTC-2)
atualizarRelogio('relogio3', -1); // Amazonas (UTC-4)
atualizarRelogio('relogio4', -2); // Acre (UTC-5)

// Exibição da data
function exibirDataAtualizada() {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let semanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    
    let data = new Date();
    data.setSeconds(data.getSeconds() + 24); // Ajuste de segundos
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano}`;
}

// Atualiza a data à meia-noite seguindo o relógio de Brasília
function atualizarData() {
    setInterval(() => {
        let data = new Date();
        data.setSeconds(data.getSeconds() + 24); // Ajuste de segundos
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();

        if (horas === 0 && minutos === 0 && segundos === 0) {
            exibirDataAtualizada();
        }
    }, 1000);
}

// Inicializa a exibição da data e atualização automática
exibirDataAtualizada();
atualizarData();
