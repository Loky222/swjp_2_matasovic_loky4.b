function Strujaracun() {
    const napon = parseFloat(document.getElementById('voltage').value);
    const otpor = parseFloat(document.getElementById('resistance').value);

    if (isNaN(napon) || isNaN(otpor) || otpor === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const struja = napon / otpor;
    document.getElementById('rezultat').textContent =
        `Struja: ${struja.toFixed(2)} A`;
}

// Serijski spoj
function SerijskiOtpor() {
    const r1 = parseFloat(document.getElementById('r1').value);
    const r2 = parseFloat(document.getElementById('r2').value);

    if (isNaN(r1) || isNaN(r2)) {
        alert('Unesite ispravne otpore!');
        return;
    }

    const rUk = r1 + r2;
    document.getElementById('rezSerijski').textContent =
        `Ukupni otpor: ${rUk.toFixed(2)} Ω`;
}

// Paralelni spoj
function ParalelniOtpor() {
    const r1 = parseFloat(document.getElementById('pr1').value);
    const r2 = parseFloat(document.getElementById('pr2').value);

    if (isNaN(r1) || isNaN(r2) || r1 === 0 || r2 === 0) {
        alert('Unesite ispravne otpore!');
        return;
    }

    const rUk = 1 / (1 / r1 + 1 / r2);
    document.getElementById('rezParalelni').textContent =
        `Ukupni otpor: ${rUk.toFixed(2)} Ω`;
}

// Djelitelj napona
function DjeliteljNapona() {
    const uin = parseFloat(document.getElementById('uin').value);
    const r1 = parseFloat(document.getElementById('dr1').value);
    const r2 = parseFloat(document.getElementById('dr2').value);

    if (isNaN(uin) || isNaN(r1) || isNaN(r2) || (r1 + r2) === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const u2 = uin * (r2 / (r1 + r2));
    document.getElementById('rezDjelitelj').textContent =
        `Izlazni napon U₂: ${u2.toFixed(2)} V`;
}
// Induktivitet idealne zavojnice
function Induktivitet() {
   
    const N = parseFloat(document.getElementById('n').value);
    const S = parseFloat(document.getElementById('s').value);
    const l = parseFloat(document.getElementById('l').value);

    if (isNaN(mu) || isNaN(N) || isNaN(S) || isNaN(l) || l === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const L =  4* Math.PI* Math.pow(10, -7) * (N * N * S) / l;
    document.getElementById('rezL').textContent =
        `Induktivitet: ${L.toExponential(3)} H`;
}

// Induktivni otpor
function InduktivniOtpor() {
    const f = parseFloat(document.getElementById('fL').value);
    const L = parseFloat(document.getElementById('indL').value);

    if (isNaN(f) || isNaN(L)) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const XL = 2 * Math.PI * f * L;
    document.getElementById('rezXL').textContent =
        `Induktivni otpor Xₗ: ${XL.toFixed(2)} Ω`;
}

// Kapacitivni otpor
function KapacitivniOtpor() {
    const f = parseFloat(document.getElementById('fC').value);
    const C = parseFloat(document.getElementById('capC').value);

    if (isNaN(f) || isNaN(C) || C === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const XC = 1 / (2 * Math.PI * f * C);
    document.getElementById('rezXC').textContent =
        `Kapacitivni otpor Xᴄ: ${XC.toFixed(2)} Ω`;
}

// SERIJSKI SPOJ ZAVOJNICA
function SerijskiZavojnice() {
    const L1 = parseFloat(document.getElementById('sl1').value);
    const L2 = parseFloat(document.getElementById('sl2').value);

    if (isNaN(L1) || isNaN(L2)) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const L = L1 + L2;
    document.getElementById('rezSerZav').textContent =
        `Ukupni induktivitet: ${L.toFixed(4)} H`;
}

// PARALELNI SPOJ ZAVOJNICA
function ParalelniZavojnice() {
    const L1 = parseFloat(document.getElementById('pl1').value);
    const L2 = parseFloat(document.getElementById('pl2').value);

    if (isNaN(L1) || isNaN(L2) || L1 === 0 || L2 === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const L = 1 / (1 / L1 + 1 / L2);
    document.getElementById('rezParZav').textContent =
        `Ukupni induktivitet: ${L.toFixed(4)} H`;
}

// SERIJSKI SPOJ KONDENZATORA
function SerijskiKondenzatori() {
    const C1 = parseFloat(document.getElementById('sc1').value);
    const C2 = parseFloat(document.getElementById('sc2').value);

    if (isNaN(C1) || isNaN(C2) || C1 === 0 || C2 === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const C = 1 / (1 / C1 + 1 / C2);
    document.getElementById('rezSerKon').textContent =
        `Ukupni kapacitet: ${C.toExponential(3)} F`;
}

// PARALELNI SPOJ KONDENZATORA
function ParalelniKondenzatori() {
    const C1 = parseFloat(document.getElementById('pc1').value);
    const C2 = parseFloat(document.getElementById('pc2').value);

    if (isNaN(C1) || isNaN(C2)) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const C = C1 + C2;
    document.getElementById('rezParKon').textContent =
        `Ukupni kapacitet: ${C.toExponential(3)} F`;
}
    