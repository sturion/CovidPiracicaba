
// GATILHOS DA BARRA DE ISOLAMENTO

document.getElementById("isolamento").addEventListener('input', simulador)

simulador();

function simulador() {

    //ENTRADA DADOS SEMANAIS POR REGIÃO DE PIRACICABA  


    let infecNorte = document.getElementById("infecNorte").innerHTML;
    let infecCentral = document.getElementById("infecCentral").innerHTML;
    let infecLeste = document.getElementById("infecLeste").innerHTML;
    let infecSul = document.getElementById("infecSul").innerHTML;
    let infecOeste = document.getElementById("infecOeste").innerHTML;
    let infecDistritos = document.getElementById("infecDistritos").innerHTML;
    let infecIndefinidos = document.getElementById("infecIndefinidos").innerHTML;


    // CONVERTENDO OS VALORES PARA VALORES OPERÁVEIS

    infecNorte = parseInt(infecNorte);
    infecCentral = parseInt(infecCentral);
    infecLeste = parseInt(infecLeste);
    infecSul = parseInt(infecSul);
    infecOeste = parseInt(infecOeste);
    infecDistritos = parseInt(infecDistritos);
    infecIndefinidos = parseInt(infecIndefinidos);




    // ENTRADA DADOS DIARIOS TOTAIS DE PIRACICABA


    let ti = parseInt(document.getElementById("isolamento").value);

    let infectados = document.getElementById("infectados").innerHTML;
    let mortos = document.getElementById("mortos").innerHTML;
    let hospitalizados = document.getElementById("hospitalizados").innerHTML;
    let recuperados = document.getElementById("recuperados").innerHTML;



    // CONVERTENDO OS VALORES PARA VALORES OPERÁVEIS


    infectados = parseInt(infectados);
    mortos = parseInt(mortos);
    hospitalizados = parseInt(hospitalizados);
    recuperados = parseInt(recuperados);




    // PROCESSAMENTO DADOS DIARIOS TOTAIS DE PIRACICABA

    let tc = 1.85;

    let ac = ((2.5 / 100) * (100 - ti));

    let rfDia1 = 1 + ac;
    let rfDia10 = 1 + ac + (ac * ac);

    let infectadosPrev = Math.round(rfDia1 * (infectados / tc));

    let mortosPct = (mortos / infectados) * 100;
    let hospitalizadosPct = (hospitalizados / infectados) * 100;
    let recuperadosPct = (recuperados / infectados) * 100;

    let recuperadosPrev = Math.round((infectadosPrev / 100) * recuperadosPct);
    let hospitalizadosPrev = Math.round((infectadosPrev / 100) * hospitalizadosPct);
    let mortosPrev = Math.round((infectadosPrev / 100) * mortosPct);


    //PROCESSAMENTO DADOS SEMANAIS POR REGIÃO DE PIRACICABA  

    let infecNortePrev = Math.round(rfDia10 * infecNorte / tc) - infecNorte;
    let infecCentralPrev = Math.round(rfDia10 * infecCentral / tc) - infecCentral;
    let infecLestePrev = Math.round(rfDia10 * infecLeste / tc) - infecLeste;
    let infecSulPrev = Math.round(rfDia10 * infecSul / tc) - infecSul;
    let infecOestePrev = Math.round(rfDia10 * infecOeste / tc) - infecOeste;
    let infecDistritosPrev = Math.round(rfDia10 * infecDistritos / tc) - infecDistritos;
    let infecIndefinidosPrev = Math.round(rfDia10 * infecIndefinidos / tc) - infecIndefinidos;

    let pctInfecNortePrev = ((infecNortePrev / infecNorte) * 100).toFixed(2);
    let pctInfecCentralPrev = ((infecCentralPrev / infecCentral) * 100).toFixed(2);
    let pctInfecLestePrev = ((infecLestePrev / infecLeste) * 100).toFixed(2);
    let pctInfecSulPrev = ((infecSulPrev / infecSul) * 100).toFixed(2);
    let pctInfecOestePrev = ((infecOestePrev / infecOeste) * 100).toFixed(2);
    let pctInfecDistritosPrev = ((infecDistritosPrev / infecDistritos) * 100).toFixed(2);
    let pctInfecIndefinidosPrev = ((infecIndefinidosPrev / infecIndefinidos) * 100).toFixed(2);
    let totalRegiao = infecNortePrev + infecCentralPrev + infecLestePrev + infecSulPrev + infecOestePrev;





    // CONDICIONAL DE SAIDA


    if (infectadosPrev < infectados) {

        infectadosPrev = infectados;
        mortosPrev = mortos;
        hospitalizadosPrev = hospitalizados;
        recuperadosPrev = recuperados;



        infecNortePrev = 0;
        infecCentralPrev = 0;
        infecLestePrev = 0;
        infecSulPrev = 0;
        infecOestePrev = 0;

        pctInfecNortePrev = 0;
        pctInfecCentralPrev = 0;
        pctInfecLestePrev = 0;
        pctInfecSulPrev = 0;
        pctInfecOestePrev = 0;
        totalRegiao = 0;


    }

    //SAÍDA DADOS SEMANAIS POR REGIÃO DE PIRACICABA    


    // VALORES TOTAIS

    document.getElementById("nortePrev").innerHTML = `<strong>+</strong>${infecNortePrev} em 10 dias`;
    document.getElementById("centralPrev").innerHTML = `<strong>+</strong>${infecCentralPrev} em 10 dias`;
    document.getElementById("lestePrev").innerHTML = `<strong>+</strong>${infecLestePrev} em 10 dias`;
    document.getElementById("sulPrev").innerHTML = `<strong>+</strong>${infecSulPrev} em 10 dias`;
    document.getElementById("oestePrev").innerHTML = `<strong>+</strong>${infecOestePrev} em 10 dias`;
    document.getElementById("distritosPrev").innerHTML = `<strong>+</strong>${infecDistritosPrev} em 10 dias`;
    document.getElementById("indefinidosPrev").innerHTML = `<strong>+</strong>${infecIndefinidosPrev} em 10 dias`;

    // VALORES EM %

    document.getElementById("pctNorte").innerHTML = `+${pctInfecNortePrev}%`;
    document.getElementById("pctCentral").innerHTML = `+${pctInfecCentralPrev}%`;
    document.getElementById("pctLeste").innerHTML = `+${pctInfecLestePrev}%`;
    document.getElementById("pctSul").innerHTML = `+${pctInfecSulPrev}%`;
    document.getElementById("pctOeste").innerHTML = `+${pctInfecOestePrev}%`;
    document.getElementById("pctDistritos").innerHTML = `+${pctInfecDistritosPrev}%`;
    document.getElementById("pctIndefinidos").innerHTML = `+${pctInfecIndefinidosPrev}%`;
    document.getElementById("totalRegiao").innerHTML = `+${totalRegiao} Casos`;
    // SAÍDA DADOS DIÁRIOS TOTAIS DE PIRACICABA

    document.getElementById("infectadosPrev").innerHTML = `${infectadosPrev}`;
    document.getElementById("mortosPrev").innerHTML = `${mortosPrev}`;
    document.getElementById("hospitalizadosPrev").innerHTML = `${hospitalizadosPrev}`;
    document.getElementById("recuperadosPrev").innerHTML = `${recuperadosPrev}`;

}




