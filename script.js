function atualizarRelogio(id, offset) {
    setInterval(() => {
        let rel = document.getElementById(id);
        let data = new Date();
        data.setUTCSeconds(data.getUTCSeconds() + 25); // Adiciona 25 segundos
        data.setUTCHours(data.getUTCHours() + offset + 3); // Ajusta o fuso horário

        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds();
        
        if (h < 10) h = `0${h}`;
        if (m < 10) m = `0${m}`;
        if (s < 10) s = `0${s}`;
        
        rel.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
}

// Inicializa os relógios com 3 horas a mais
atualizarRelogio('relogio01', -3); // Brasília (UTC-3) → Agora UTC 0
atualizarRelogio('relogio2', -2);  // Fernando de Noronha (UTC-2) → Agora UTC+1
atualizarRelogio('relogio3', -4);  // Amazonas (UTC-4) → Agora UTC-1
atualizarRelogio('relogio4', -5);  // Acre (UTC-5) → Agora UTC-2

// Exibição da data atualizada
function exibirDataAtualizada() {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let semanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 25); // Adiciona 25 segundos
    data.setUTCHours(data.getUTCHours() + (-3) + 3); // Ajusta para Brasília

    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano}`;
}

// Atualiza a data automaticamente quando o dia mudar no novo horário ajustado
function atualizarData() {
    setInterval(() => {
        let dataBrasilia = new Date();
        dataBrasilia.setUTCSeconds(dataBrasilia.getUTCSeconds() + 25); // Adiciona 25 segundos
        dataBrasilia.setUTCHours(dataBrasilia.getUTCHours() + (-3) + 3); // Ajusta para Brasília

        let horas = dataBrasilia.getHours();
        let minutos = dataBrasilia.getMinutes();
        let segundos = dataBrasilia.getSeconds();

        // Se o horário de Brasília atingir 00:00:00, atualiza a data
        if (horas === 0 && minutos === 0 && segundos === 0) {
            exibirDataAtualizada();
        }
    }, 1000);
}

// Inicializa a exibição da data e atualização automática
exibirDataAtualizada();
atualizarData();
