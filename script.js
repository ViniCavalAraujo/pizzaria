const input = document.getElementById('telefone')

        input.addEventListener('input', function(){
         // 1. pega só números
        let numeros = input.value.replace(/\D/g, '');

         // 2. limita tamanho (DDD + número)
         numeros = numeros.substring(0, 11);

         let resultado = '';

        // 3. monta o DDD
        if (numeros.length >= 1) {
             resultado += '(' + numeros.substring(0, 2);
         }

         // 4. monta o resto
        if (numeros.length >= 3) {
             resultado += ') ' + numeros.substring(2, 7);
         }

        // 5. coloca o traço
         if (numeros.length >= 8) {
            resultado += '-' + numeros.substring(7);
         }
        // 6. atualiza o input
        input.value = resultado;
})



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
    const input = document.getElementById('nomepedido')
    const nome = input.value
    
    if (item[0].checked) {
        alert('teste')
    }
}