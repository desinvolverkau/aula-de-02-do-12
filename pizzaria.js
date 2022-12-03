let tamanho = document.querySelector("#tamanho")
let sabor = document.querySelector("#sabor")
let borda = document.querySelector("#borda")
let refrigerante = document.querySelector("#refri")
//botão
let fP = document.querySelector("#fazerPedido")
//saidas:

let saidaPedido = document.querySelector("#saidaPedido")
let totalAPagar = document.querySelector("#totalAPagar")

//funções
const imprimirPedido = () => { 
   
    let tam= tamanho.value
    let sab= sabor.value
    let bor= borda.value
    let ref= refrigerante.value
    
saidaPedido.innerHTML=`tamanho da pizza ${tam}<br>
Sabor:${sab}<br>
borda:${bor}<br>
refrigerante:${ref}<br>`


return [ tam, sab, bor, ref ]

}
const calcularUprimirValor = (pedido) => {

    let [ tam , sab ,bor, ref] = pedido
    let precoTam, precoSab, precoBor, precoRef


    switch (tam){ 
 case "GIGANTE":{precoTam = 80; break}
 case "GRANDE":{precoTam = 50; break}
 case "MEIDA":{precoTam = 40; break}
 case "PEQUENA":{precoTam = 25; break}

    }
 switch (sab){ 
    case "CALABRESA":{precoSab = 0; break}
    case "FRANGO":{precoSab = 0; break}
    case "PEPERONI":{precoSab = 10; break}
    case "PORGUESA":{precoSab = 0; break}

    }
    switch (bor){ 
        case "SEM BORDA":{precoBor = 0; break}
        case "CATUPIRY":{precoBor = 5; break}
        case "CHEDDAR":{precoBor = 10; break}
        case "CHOCOLATE":{precoBor = 15; break}
    
        }
        switch (ref){ 
            case "SEM REFRIGERANTE":{precoRef = 0; break}
            case "COCA-COLA":{precoRef = 8; break}
            case "PURESA":{precoRef = 10; break}
            case "FANTA-LARANJA":{precoRef = 7; break}
        
            }

            let total = precoBor + precoSab + precoTam + precoRef

            totalAPagar.innerHTML=`tamanho da pizza ${precoTam}<br>
            Sabor:${precoSab}<br>
            borda:${precoBor}<br>
            refrigerante:${precoRef}<br>
            
            Total: R$${total}`

    }



function fazerPedido(){

   let pedido = imprimirPedido()


   calcularUprimirValor(pedido)
}


//evento de click em fazerPedido
fP.addEventListener("click" , fazerPedido)