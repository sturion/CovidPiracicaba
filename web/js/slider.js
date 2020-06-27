// GATILHOS DA BARRA DE ISOLAMENTO

document.getElementById("isolamento").addEventListener('input',changeCss);




//FUNÇÃO PARA MUDAR CSS DA BARRA DE ISOLAMENTO QUANDO DISPARADA

function changeCss (){

    let isolamento = document.getElementById("isolamento").value;
    let color = 'rgb('+(250 - 3.333 * isolamento)+','+(0)+','+(3.333 * isolamento)+')';
    
    document.getElementById("pct").style.color = color;
    document.getElementById("pct").innerHTML = `${isolamento}%`;
    document.getElementById("aviso").style.display = "none";
    document.getElementById("pctIsoLeg").innerHTML = `Taxa Simulada`;

    if(isolamento >= 60){

        document.getElementById("aviso").style.display = "block";
        document.getElementById("aviso").style.backgroundColor = "rgba(20,125,190,0.85)";
        document.getElementById("aviso").innerHTML = `Taxa de Isolamento ideal +60%`
    }

       let hospitalizadosSlider = document.getElementById("hospitalizados").innerHTML;
       let hospitalizadosPrevSlider = document.getElementById("hospitalizadosPrev").innerHTML;
       //let recuperadosSlider = document.getElementById("recuperados").innerHTML;
       //let recuperadosPrevSlider =document.getElementById("recuperadosPrev").innerHTML;

        hospitalizadosSlider =  parseInt(hospitalizadosSlider);
        hospitalizadosPrevSlider = parseInt(hospitalizadosPrevSlider);
        //recuperadosSlider = parseInt(recuperadosSlider);
        //recuperadosPrevSlider = parseInt(recuperadosPrevSlider);

       let novosInfec = hospitalizadosPrevSlider - hospitalizadosSlider;
       //let novosRecup = recuperadosPrevSlider - recuperadosSlider;
       let demandaLeitos = (novosInfec)*0.15;
       console.log(demandaLeitos)

        

    if (demandaLeitos>100){

        document.getElementById("aviso").style.display = "block";
        document.getElementById("aviso").style.backgroundColor = "rgba(190,0,0,0.85)";
        document.getElementById("aviso").innerHTML = `Possível insuficiência de UTI's em 5 dias`

    }
    
    }

