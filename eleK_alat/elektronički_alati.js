
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
    const mu = parseFloat(document.getElementById('mu').value);
    const N = parseFloat(document.getElementById('n').value);
    const S = parseFloat(document.getElementById('s').value);
    const l = parseFloat(document.getElementById('l').value);

    if (isNaN(mu) || isNaN(N) || isNaN(S) || isNaN(l) || l === 0) {
        alert('Unesite ispravne vrijednosti!');
        return;
    }

    const L = mu * (N * N * S) / l;
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


    