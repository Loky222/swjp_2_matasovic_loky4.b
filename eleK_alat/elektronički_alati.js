
function Strujaracun() {
            const napon = parseFloat(document.getElementById('voltage').value);
            const otpor = parseFloat(document.getElementById('resistance').value);
            if (isNaN(napon) || isNaN(otpor) || otpor === 0) {
                alert('Unesite ispravne vrijednosti za napon i otpor.');
                return;
            }
            const struja = napon / otpor;
            document.getElementById('rezultat').textContent = `Struja: ${struja.toFixed(2)} A`;
        }

    