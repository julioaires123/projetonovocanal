// Atualiza o relógio para diferentes fusos horários no Brasil
function atualizarRelogio(id, offset) {
    setInterval(() => {
        let rel = document.getElementById(id);
        let data = new Date();
        data.setUTCHours(data.getUTCHours() - 0 + offset); // UTC-3 para Brasília como referência
        data.setSeconds(data.getSeconds() + 25); // Adiciona 25 segundos
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

// Exibição da data atualizada
function exibirDataAtualizada() {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let semanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    
    let data = new Date();
    data.setSeconds(data.getSeconds() + 25); // Ajuste de segundos
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano}`;
}

// Atualiza a data à meia-noite do horário de Brasília (UTC-3)
function atualizarData() {
    setInterval(() => {
        let dataBrasilia = new Date();
        dataBrasilia.setUTCHours(dataBrasilia.getUTCHours() - 3); // Ajuste para o fuso horário de Brasília (UTC-3)
        let horas = dataBrasilia.getHours();
        let minutos = dataBrasilia.getMinutes();
        let segundos = dataBrasilia.getSeconds();

        // Verifica se o horário de Brasília chegou a 00:00:00
        if (horas === 0 && minutos === 0 && segundos === 0) {
            exibirDataAtualizada(); // Atualiza a data no momento exato
        }
    }, 1000);
}

// Inicializa a exibição da data e atualização automática
exibirDataAtualizada();
atualizarData();
