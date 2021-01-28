import simulador from "./main.js";
var Mortos = document.getElementById("mortos");
var Infectados = document.getElementById("infectados");
var Tratamento = document.getElementById("hospitalizados");
var Suspeitos = document.getElementById("suspeitos");
var Recuperados = document.getElementById("recuperados");
var Descartados = document.getElementById("descartados");

var nMortos = document.getElementById("nMortos");
var nInfectados = document.getElementById("nInfectados");
var nTratamento = document.getElementById("nTratamento");
var nSuspeitos = document.getElementById("nSuspeitos");
var nRecuperados = document.getElementById("nRecuperados");
var nDescartados = document.getElementById("nDescartados");
var loader = document.getElementById("loader");

var date = document.getElementsByClassName("date");

async function capturarDados() {
    try {
        loader.style.display = "flex";
        let dados = await fetch(
            "https://api-covid-piracicaba.herokuapp.com/dados",
            {
                method: "GET",
                headers: {
                    Accept: "application/vnd.github.v3.text-match+json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
                mode: "cors",
            }
        )
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
        Mortos.innerHTML = dados.obitos;
        Infectados.innerHTML = dados.positivados;
        Tratamento.innerHTML = dados.tratamento;
        Suspeitos.innerHTML = dados.suspeitos;
        Recuperados.innerHTML = dados.recuperados;
        Descartados.innerHTML = dados.descartados;

        nMortos.innerHTML = dados.newObitos <= 0 ? 0 : "+ " + dados.newObitos;

        nInfectados.innerText =
            dados.newPositivados <= 0 ? 0 : "+ " + dados.newPositivados;

        nTratamento.innerHTML =
            dados.newTratamento <= 0 ? 0 : "+ " + dados.newTratamento;
        nSuspeitos.innerHTML =
            dados.newSuspeitos <= 0 ? 0 : "+ " + dados.newSuspeitos;
        nRecuperados.innerHTML =
            dados.newRecuperados <= 0 ? 0 : "+ " + dados.newRecuperados;
        nDescartados.innerHTML =
            dados.newDescartados <= 0 ? 0 : "+ " + dados.newDescartados;
        let dateFormatted = new Date(dados.date);
        for (const key in date) {
            if (date[key] != 2) {
                date[key].innerText =
                    (dateFormatted.getDate() < 10
                        ? "0" + dateFormatted.getDate()
                        : dateFormatted.getDate()) +
                    " / " +
                    (dateFormatted.getMonth() + 1 < 10
                        ? "0" + (dateFormatted.getMonth() + 1)
                        : dateFormatted.getMonth() + 1) +
                    " / " +
                    dateFormatted.getFullYear();
            }
        }
        loader.style.display = "none";
        simulador();
    } catch (error) {
        console.log(error);
    }
}

capturarDados();
