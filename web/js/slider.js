// GATILHOS DA BARRA DE ISOLAMENTO

document.getElementById("isolamento").addEventListener('input', changeCss);

var UltRegIsoSlider = document.getElementById('isolamento').value

console.log(UltRegIsoSlider)


//FUNÇÃO PARA MUDAR CSS DA BARRA DE ISOLAMENTO QUANDO DISPARADA

function changeCss() {

    let isolamento = document.getElementById("isolamento").value;
    let color = 'rgb(' + (250 - 3.333 * isolamento) + ',' + (0) + ',' + (3.333 * isolamento) + ')';

    document.getElementById("pct").style.color = color;
    document.getElementById("pct").innerHTML = `${isolamento}%`;
    document.getElementById("aviso").style.display = "none";
    document.getElementById("pctIsoLeg").innerHTML = `Taxa Simulada`;

    let infectadosSlider = document.getElementById("infectados").innerHTML;
    let infectadosPrevSlider = document.getElementById("infectadosPrev").innerHTML;

    infectadosSlider = parseInt(infectadosSlider);
    infectadosPrevSlider = parseInt(infectadosPrevSlider);

    if (isolamento == UltRegIsoSlider) {

        document.getElementById("pct").style.color = "var(--branco)";
        document.getElementById("aviso").style.display = "block";
        document.getElementById("pctIsoLeg").innerHTML = `Ultima média reg.`;
        document.getElementById("aviso").style.backgroundColor = "rgba(190,0,0,0.85)";
        document.getElementById("aviso").innerHTML = ` Arraste a barra para simular outros valores`


    }


    if (infectadosSlider == infectadosPrevSlider) {

        document.getElementById("aviso").style.display = "block";
        document.getElementById("aviso").style.backgroundColor = "rgba(20,125,190,0.85)";
        document.getElementById("aviso").innerHTML = `Taxa de Isolamento ideal`
    }

    let hospitalizadosSlider = document.getElementById("hospitalizados").innerHTML;
    let hospitalizadosPrevSlider = document.getElementById("hospitalizadosPrev").innerHTML;
    let numeroLietos = document.getElementById("numeroLeitos").innerHTML;


    hospitalizadosSlider = parseInt(hospitalizadosSlider);
    hospitalizadosPrevSlider = parseInt(hospitalizadosPrevSlider);
    numeroLietos = parseInt(numeroLietos);


    let novosInfec = hospitalizadosPrevSlider - hospitalizadosSlider;

    let demandaLeitos = (novosInfec) * 0.15;
    console.log(demandaLeitos)



    if (demandaLeitos > numeroLietos) {

        document.getElementById("aviso").style.display = "block";
        document.getElementById("aviso").style.backgroundColor = "rgba(190,0,0,0.85)";
        document.getElementById("aviso").innerHTML = `Possível insuficiência de UTI's em 5 dias`

    }

}