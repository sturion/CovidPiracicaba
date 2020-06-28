document.getElementById("oeste").addEventListener("mouseover", mouseOver1);
document.getElementById("oeste").addEventListener("mouseout", mouseOut1);

function mouseOver1() {

    document.getElementById("oesteBairros").style.display = "block";
    // document.getElementById("oesteBairros").style.opacity = "100%";
}

function mouseOut1(id) {


    document.getElementById("oesteBairros").style.display = "none";
    //  document.getElementById("oesteBairros").style.opacity = "0%";

}

document.getElementById("sul").addEventListener("mouseover", mouseOver2);
document.getElementById("sul").addEventListener("mouseout", mouseOut2);

function mouseOver2() {

    document.getElementById("sulBairros").style.display = "block";
}

function mouseOut2(id) {


    document.getElementById("sulBairros").style.display = "none";

}

document.getElementById("leste").addEventListener("mouseover", mouseOver3);
document.getElementById("leste").addEventListener("mouseout", mouseOut3);

function mouseOver3() {

    document.getElementById("lesteBairros").style.display = "block";
}

function mouseOut3(id) {


    document.getElementById("lesteBairros").style.display = "none";

}

document.getElementById("central").addEventListener("mouseover", mouseOver4);
document.getElementById("central").addEventListener("mouseout", mouseOut4);

function mouseOver4() {

    document.getElementById("centralBairros").style.display = "block";
}

function mouseOut4(id) {


    document.getElementById("centralBairros").style.display = "none";

}
document.getElementById("norte").addEventListener("mouseover", mouseOver5);
document.getElementById("norte").addEventListener("mouseout", mouseOut5);

function mouseOver5() {

    document.getElementById("norteBairros").style.display = "block";
}

function mouseOut5(id) {


    document.getElementById("norteBairros").style.display = "none";

}

