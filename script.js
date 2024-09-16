const button = document.getElementById('button')
const dolar = 5.2
const euro = 6.4
const bitcoin = 140000.0

converterValores = () => {
    const input = document.getElementById('input').value
    const valueReal = document.getElementById('currency-value-real')
    const valueConvertido = document.getElementById('currency-value-covertido')
    const select = document.getElementById('select').value
    const textConvertido = document.getElementById('currency-name')
    const imgConvertida = document.getElementsByClassName('imagem')[0]

    valueReal.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(input)

    if (select === 'U$$ Dólar americano') {
        valueConvertido.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
        }).format(input/dolar)
        textConvertido.innerHTML = 'Dólar americano'
        imgConvertida.src = "/assets/estados-unidos.png"

    }

    if (select === '€ Euro') {
        valueConvertido.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(input/euro)
        textConvertido.innerHTML = 'Euro'
        imgConvertida.src = "/assets/euros.png"
    }

    if (select === '₿ Bitcoin') {
        valueConvertido.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'BTC' 
        }).format(input/bitcoin)
        textConvertido.innerHTML = 'Bitcoin'
        imgConvertida.src = "/assets/bitcoin.png"
    }
}

changer = () => {
    converterValores()
}

button.addEventListener('click', converterValores)
select.addEventListener('change', changer)

