import simulador from "./main.js";
let Mortos = document.getElementById("mortos");
let Infectados = document.getElementById("infectados");
let Tratamento = document.getElementById("hospitalizados");
let Suspeitos = document.getElementById("suspeitos");
let Recuperados = document.getElementById("recuperados");
let Descartados = document.getElementById("descartados");

let nMortos = document.getElementById("nMortos");
let nInfectados = document.getElementById("nInfectados");
let nTratamento = document.getElementById("nTratamento");
let nSuspeitos = document.getElementById("nSuspeitos");
let nRecuperados = document.getElementById("nRecuperados");
let nDescartados = document.getElementById("nDescartados");
let loader = document.getElementById("loader");

let date = document.getElementsByClassName("date");

async function capturarDados() {
    try {
        loader.style.display = "flex";
        let {
            obitos,
            positivados,
            tratamento,
            suspeitos,
            recuperados,
            descartados,
            newObitos,
            newDescartados,
            newPositivados,
            newRecuperados,
            newSuspeitos,
            newTratamento,
            date: dateDados,
        } = await fetch("https://apistest.myddns.me/covidapi/dados", {
            method: "GET",
            headers: {
                Accept: "application/vnd.github.v3.text-match+json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
            mode: "cors",
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });

        Mortos.innerHTML = obitos;
        Infectados.innerHTML = positivados;
        Tratamento.innerHTML = tratamento;
        Suspeitos.innerHTML = suspeitos;
        Recuperados.innerHTML = recuperados;
        Descartados.innerHTML = descartados;
        nMortos.innerHTML = newObitos <= 0 ? 0 : "+ " + newObitos;
        nInfectados.innerText = newPositivados <= 0 ? 0 : "+ " + newPositivados;
        nTratamento.innerHTML = newTratamento <= 0 ? 0 : "+ " + newTratamento;
        nSuspeitos.innerHTML = newSuspeitos <= 0 ? 0 : "+ " + newSuspeitos;
        nRecuperados.innerHTML =
            newRecuperados <= 0 ? 0 : "+ " + newRecuperados;
        nDescartados.innerHTML =
            newDescartados <= 0 ? 0 : "+ " + newDescartados;

        const dateFormatted = new Date(dateDados);
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
