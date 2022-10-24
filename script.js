urlDolar = 'https://api.bluelytics.com.ar/v2/latest'
urlCrypto = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'

async function getDolar() {
    // Solicitud GET (Request).
    fetch(urlDolar)
        // Exito
        .then(response => response.json())  // convertir a json
        .then(data => mostrarDolar(data))   //imprimir los datos en la consola
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}

async function getCryto() {
    // Solicitud GET (Request).
    fetch(urlCrypto)
        // Exito
        .then(response => response.json())  // convertir a json
        .then(crypto => mostrarCrypto(crypto))   //imprimir los datos en la consola
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}

const mostrarDolar = async (data) => {
    console.log(data)
    blueHTML = `<li>Dolar Blue BUY: ${data.blue.value_buy}</li>
                <li>Dolar Blue SELL: ${data.blue.value_sell}</li>`
    document.getElementById('dolar').innerHTML = blueHTML;
}

const mostrarCrypto = async (crypto) => {
    liHTML = ''
    console.log(crypto)
    i = 1;

    crypto.forEach(c => {

        if (c.price_change_24h > 0) {
            priceChangeHTML = `<td style="color:green;"><i style="margin-right:10px;" class="fa-sharp fa-solid fa-caret-up"></i>${c.price_change_24h.toFixed(2)}</td>`
        }else{
            priceChangeHTML = `<td style="color:red;"><i style="margin-right:10px;" class="fa-solid fa-caret-down"></i>${c.price_change_24h.toFixed(2)}</td>`
        }



        liHTML += `<tr>
        <th scope="row"><img src="${c.image}" alt="${c.name}"></th>
        <td>${c.name}</td>
        <td>U$D ${c.current_price}</td>
        ${priceChangeHTML}
    </tr>`;

        i++;
    });

    document.getElementById('cryptotable').innerHTML = liHTML
}



window.onload = async () => {
    getDolar();
    getCryto();
}






