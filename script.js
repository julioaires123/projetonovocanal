// DEFINE O DELAY DA LIVE EM SEGUNDOS (ex: 15 segundos de atraso = 15)
const DELAY_LIVES_SEGUNDOS = 15; 

function obterHoraFormatada(timeZone) {
    const agora = new Date();
    
    // Adiciona os segundos de compensação
    agora.setSeconds(agora.getSeconds() + DELAY_LIVES_SEGUNDOS);

    const opcoes = {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(agora);
}

function atualizarRelogios() {
    document.getElementById('relogio01').textContent = obterHoraFormatada('America/Sao_Paulo');
    document.getElementById('relogio2').textContent = obterHoraFormatada('America/Noronha');
    document.getElementById('relogio3').textContent = obterHoraFormatada('America/Manaus');
    document.getElementById('relogio4').textContent = obterHoraFormatada('America/Rio_Branco');
}

function atualizarData() {
    const agora = new Date();
    
    // Aplica o mesmo delay na data para garantir que a virada de dia acompanhe a live
    agora.setSeconds(agora.getSeconds() + DELAY_LIVES_SEGUNDOS);

    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'America/Sao_Paulo'
    };
    
    let dataTexto = new Intl.DateTimeFormat('pt-BR', opcoes).format(agora);
    dataTexto = dataTexto.charAt(0).toUpperCase() + dataTexto.slice(1);
    
    document.getElementById('date').textContent = dataTexto;
}

function iniciar() {
    atualizarData();
    atualizarRelogios();
    
    setInterval(atualizarRelogios, 1000);
    setInterval(atualizarData, 1000); // Atualiza a cada segundo para trocar o dia no momento exato
}

document.addEventListener('DOMContentLoaded', iniciar);
