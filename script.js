document.getElementById('signalForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const markt = document.getElementById('markt').value;
    const preis = parseFloat(document.getElementById('aktuellerPreis').value);
    const vth = parseFloat(document.getElementById('vth').value);
    const vtt = parseFloat(document.getElementById('vtt').value);
    const maxPain = parseFloat(document.getElementById('maxPain').value);
    const gex = document.getElementById('gex').value;

    let richtung = '';
    if (preis > vth && gex === 'positiv') richtung = 'Long (Buy Stop)';
    else if (preis < vtt && gex === 'negativ') richtung = 'Short (Sell Stop)';
    else richtung = 'Kein A++ Setup – Bedingungen nicht erfüllt';

    const signalBox = document.getElementById('signalBox');
    signalBox.innerHTML = `
        <div><strong>Markt:</strong> ${markt}</div>
        <div><strong>Preis:</strong> ${preis}</div>
        <div><strong>Richtung:</strong> ${richtung}</div>
    `;
});
