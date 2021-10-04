// GATILHOS DA BARRA DE ISOLAMENTO

document.getElementById("isolamento").addEventListener("input", simulador);

// CONFIGURAÇÃO DOS DADOS REPEDIDOS NA PAGINA

document.getElementById("infecNorte2").innerHTML = document.getElementById(
    "infecNorte"
).innerHTML;
document.getElementById("infecCentral2").innerHTML = document.getElementById(
    "infecCentral"
).innerHTML;
document.getElementById("infecLeste2").innerHTML = document.getElementById(
    "infecLeste"
).innerHTML;
document.getElementById("infecSul2").innerHTML = document.getElementById(
    "infecSul"
).innerHTML;
document.getElementById("infecOeste2").innerHTML = document.getElementById(
    "infecOeste"
).innerHTML;
document.getElementById("infecDistritos2").innerHTML = document.getElementById(
    "infecDistritos"
).innerHTML;
document.getElementById(
    "infecIndefinidos2"
).innerHTML = document.getElementById("infecIndefinidos").innerHTML;
document.getElementById("semanal2").innerHTML = document.getElementById(
    "semanal"
).innerHTML;

// CHAMA A FUNÇÃO UMA PRIMEIRA VEZ AO CARREGAR A PAGINA

export default function simulador() {
    //ENTRADA DADOS SEMANAIS POR REGIÃO DE PIRACICABA

    let infecNorte = document.getElementById("infecNorte").innerHTML;
    let infecCentral = document.getElementById("infecCentral").innerHTML;
    let infecLeste = document.getElementById("infecLeste").innerHTML;
    let infecSul = document.getElementById("infecSul").innerHTML;
    let infecOeste = document.getElementById("infecOeste").innerHTML;
    let infecDistritos = document.getElementById("infecDistritos").innerHTML;
    let infecIndefinidos = document.getElementById("infecIndefinidos")
        .innerHTML;

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

    let tc = 3;

    let ac = (2.5 / 100) * (100 - ti);

    let rfDia1 = 1 + ac;
    // let rfDia10 = 1 + ac + (ac * ac);

    let infectadosPrev = Math.round(rfDia1 * (infectados / tc));

    let mortosPct = (mortos / infectados) * 100;
    let hospitalizadosPct = (hospitalizados / infectados) * 100;
    let recuperadosPct = (recuperados / infectados) * 100;

    let recuperadosPrev = Math.round((infectadosPrev / 100) * recuperadosPct);
    let hospitalizadosPrev = Math.round(
        (infectadosPrev / 100) * hospitalizadosPct
    );
    let mortosPrev = Math.round((infectadosPrev / 100) * mortosPct);

    //PROCESSAMENTO DADOS SEMANAIS POR REGIÃO DE PIRACICABA

    let infecNortePrev = Math.round((rfDia1 * infecNorte) / tc) - infecNorte;
    let infecCentralPrev =
        Math.round((rfDia1 * infecCentral) / tc) - infecCentral;
    let infecLestePrev = Math.round((rfDia1 * infecLeste) / tc) - infecLeste;
    let infecSulPrev = Math.round((rfDia1 * infecSul) / tc) - infecSul;
    let infecOestePrev = Math.round((rfDia1 * infecOeste) / tc) - infecOeste;
    let infecDistritosPrev =
        Math.round((rfDia1 * infecDistritos) / tc) - infecDistritos;
    let infecIndefinidosPrev =
        Math.round((rfDia1 * infecIndefinidos) / tc) - infecIndefinidos;

    let totalRegiaoPrev =
        infecNortePrev +
        infecCentralPrev +
        infecLestePrev +
        infecSulPrev +
        infecOestePrev +
        infecDistritosPrev +
        infecIndefinidosPrev;
    let totalRegiao =
        infecNorte +
        infecCentral +
        infecLeste +
        infecSul +
        infecOeste +
        infecDistritos +
        infecIndefinidos;
    let pctTotalRegiaoPrev = ((totalRegiaoPrev / totalRegiao) * 100).toFixed(1);
    let pctTotalRegiaoPrev2 = parseFloat(pctTotalRegiaoPrev) + 100;

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
        infecDistritosPrev = 0;
        infecIndefinidosPrev = 0;
        totalRegiaoPrev = 0;
        pctTotalRegiaoPrev = 0;
    }

    //SAÍDA DADOS SEMANAIS POR REGIÃO DE PIRACICABA

    // VALORES UND

    document.getElementById(
        "nortePrev"
    ).innerHTML = `<strong>+</strong>${infecNortePrev} em 5 dias`;
    document.getElementById(
        "centralPrev"
    ).innerHTML = `<strong>+</strong>${infecCentralPrev} em 5 dias`;
    document.getElementById(
        "lestePrev"
    ).innerHTML = `<strong>+</strong>${infecLestePrev} em 5 dias`;
    document.getElementById(
        "sulPrev"
    ).innerHTML = `<strong>+</strong>${infecSulPrev} em 5 dias`;
    document.getElementById(
        "oestePrev"
    ).innerHTML = `<strong>+</strong>${infecOestePrev} em 5 dias`;
    document.getElementById(
        "distritosPrev"
    ).innerHTML = `<strong>+</strong>${infecDistritosPrev} em 5 dias`;
    document.getElementById(
        "indefinidosPrev"
    ).innerHTML = `<strong>+</strong>${infecIndefinidosPrev} em 5 dias`;

    document.getElementById("nortePrev2").innerHTML = `+ ${infecNortePrev}`;
    document.getElementById("centralPrev2").innerHTML = `+ ${infecCentralPrev}`;
    document.getElementById("lestePrev2").innerHTML = `+ ${infecLestePrev}`;
    document.getElementById("sulPrev2").innerHTML = `+ ${infecSulPrev}`;
    document.getElementById("oestePrev2").innerHTML = `+ ${infecOestePrev}`;
    document.getElementById(
        "distritosPrev2"
    ).innerHTML = `+ ${infecDistritosPrev}`;
    document.getElementById(
        "indefinidosPrev2"
    ).innerHTML = `+ ${infecIndefinidosPrev}`;
    document.getElementById(
        "totalRegiaoPrev2"
    ).innerHTML = `+ ${totalRegiaoPrev}`;
    document.getElementById(
        "pctTotalRegiaoPrev2"
    ).innerHTML = `+ ${pctTotalRegiaoPrev}%`;

    // VALORES TOTAIS

    document.getElementById("totalNorte").innerHTML = `${
        infecNortePrev + infecNorte
    }`;
    document.getElementById("totalCentral").innerHTML = `${
        infecCentralPrev + infecCentral
    }`;
    document.getElementById("totalLeste").innerHTML = `${
        infecLestePrev + infecLeste
    }`;
    document.getElementById("totalSul").innerHTML = `${
        infecSulPrev + infecSul
    }`;
    document.getElementById("totalOeste").innerHTML = `${
        infecOestePrev + infecOeste
    }`;
    document.getElementById("totalDistritos").innerHTML = `${
        infecDistritosPrev + infecDistritos
    }`;
    document.getElementById("totalIndefinidos").innerHTML = `${
        infecIndefinidosPrev + infecIndefinidos
    }`;
    document.getElementById("totalRegiaoPrev").innerHTML = `${
        totalRegiaoPrev + totalRegiao
    }`;
    document.getElementById("infecTotalRegiao").innerHTML = `${totalRegiao}`;
    document.getElementById(
        "pctTotalRegiaoPrev"
    ).innerHTML = `+ ${pctTotalRegiaoPrev2}%`;

    // SAÍDA DADOS DIÁRIOS TOTAIS DE PIRACICABA

    document.getElementById("infectadosPrev").innerHTML = `${infectadosPrev}`;
    document.getElementById("mortosPrev").innerHTML = `${mortosPrev}`;
    document.getElementById(
        "hospitalizadosPrev"
    ).innerHTML = `${hospitalizadosPrev}`;
    document.getElementById("recuperadosPrev").innerHTML = `${recuperadosPrev}`;

    document.getElementById("infectadosPrev2").innerHTML = `+ ${
        infectadosPrev - infectados
    }`;
    document.getElementById("mortosPrev2").innerHTML = `+ ${
        mortosPrev - mortos
    }`;
    document.getElementById("hospitalizadosPrev2").innerHTML = `+ ${
        hospitalizadosPrev - hospitalizados
    }`;
    document.getElementById("recuperadosPrev2").innerHTML = `+ ${
        recuperadosPrev - recuperados
    }`;
}
