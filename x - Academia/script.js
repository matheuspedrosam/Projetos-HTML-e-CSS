var checks = document.querySelector('.checks')


function iniciarTempo(){
    var agora = new Date()
    let segundos = agora.getSeconds()
    let minutos = agora.getMinutes()
    let horas = agora.getHours()
    saida = document.querySelector('#saida')
    saida.innerHTML = `${horas}:${minutos}:${segundos}`
}

setInterval(iniciarTempo, 1000)