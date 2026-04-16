
function validacaoTelefone(input) {
    input.addEventListener('input', function(){
        let numeros = input.value.replace(/\D/g, '')
        numeros = numeros.substring(0, 11)
        let resultado = ''

        if (numeros.length >= 1) {
            resultado += '(' + numeros.substring(0, 2)
        }
        if (numeros.length >= 3) {
            resultado += ') ' + numeros.substring(2, 7)
        }
        if (numeros.length >= 8) {
            resultado += '-' + numeros.substring(7)
        }

        input.value = resultado
    })
}

const inputContato = document.getElementById('tel-contato')
const inputPedido = document.getElementById('tel-pedido')

if (inputContato) {
    validacaoTelefone(inputContato)
}

if (inputPedido) {
    validacaoTelefone(inputPedido)
}



function clickMenu() {
    const menu = document.getElementById("itens")
    const icone = document.getElementById("icone-menu")

    menu.classList.toggle("ativo")

    if(menu.classList.contains("ativo")){
        icone.textContent = "close"
    } else {
        icone.textContent = "menu"
    }
}

function fecharMenu() {
    const menu = document.getElementById("itens")
    const icone = document.getElementById("icone-menu")

    menu.classList.remove("ativo")
    icone.textContent = "menu"
}

function validarPedido() {
    const item = document.getElementsByName('pizza')
    const inputnome = document.getElementById('nome-pedido')
    const nome = inputnome.value
    const input_tel = document.getElementById('tel-pedido')
    const tel = input_tel.value

    if (nome != '' && tel != '') {
        if(item[0].checked) {
            alert('teste')
        }
    }
}

function calcularTotal() {
    const cards = document.querySelectorAll('.card-pizza input[type="checkbox"]')
    let total = 0

    cards.forEach(function(card) {
        if (card.checked) {
            total += parseFloat(card.dataset.preco)
        }
    })

    document.getElementById('total').textContent = 'Total: R$ ' + total.toFixed(2)
}