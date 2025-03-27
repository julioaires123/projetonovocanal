// Atualiza o relógio para diferentes fusos horários no Brasil
function atualizarRelogio(id, offset) {
    setInterval(() => {
        let rel = document.getElementById(id);
        let data = new Date();
        data.setUTCHours(data.getUTCHours() + offset + 3); // Aumenta 3 horas

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
atualizarRelogio('relogio01', -3); // Brasília (UTC-3) → Mostrará UTC 0
atualizarRelogio('relogio2', -2);  // Fernando de Noronha (UTC-2) → Mostrará UTC+1
atualizarRelogio('relogio3', -4);  // Amazonas (UTC-4) → Mostrará UTC-1
atualizarRelogio('relogio4', -5);  // Acre (UTC-5) → Mostrará UTC-2

// Exibição da data atualizada
function exibirDataAtualizada() {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let semanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    
    let data = new Date();
    data.setUTCHours(data.getUTCHours() + (-3) + 3); // Ajusta para Brasília e soma 3 horas
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano}`;
}

// Atualiza a data quando o dia muda no horário de Brasília
function atualizarData() {
    let dataBrasiliaAnterior = new Date();
    dataBrasiliaAnterior.setUTCHours(dataBrasiliaAnterior.getUTCHours() + (-3) + 3);
    let diaAnterior = dataBrasiliaAnterior.getDate();

    setInterval(() => {
        let dataBrasiliaAtual = new Date();
        dataBrasiliaAtual.setUTCHours(dataBrasiliaAtual.getUTCHours() + (-3) + 3);
        let diaAtual = dataBrasiliaAtual.getDate();

        // Se o dia mudou, atualiza a data na interface
        if (diaAtual !== diaAnterior) {
            exibirDataAtualizada();
            diaAnterior = diaAtual;
        }
    }, 1000);
}

// Inicializa a exibição da data e atualização automática
exibirDataAtualizada();
atualizarData();
