    var Num = document.getElementById(`numberNum`)
    var tab = document.getElementById(`selectTab`)
    var res = document.getElementById(`resultado`)
    var valores = []

function adicionar(){
    res.innerHTML = ``
    var num = Number(Num.value)
    if(Num.value < 1 || Num.value > 100 || Num.length == 0){
        window.alert(`Por favor!!, insira um valor entre 1 e 100`)
    }else{
        valores.push(num)
        var item = document.createElement('option')
        item.innerHTML = (`Número ${num} foi adicionado`)
        tab.appendChild(item)
        
    }
        Num.value = `` //valor do inputnumber, recebe 0
        Num.focus() //como se o cursor do mouse estivesse aplicado um clique encima
    }
function finalizar(){
    if(valores.length == 0){
        window.alert(`Por favor!!, adicione algum valor na lista antes de finalizar`)
    }else{
        
//TOTAL/////////////////////////////////////////////////////////////////////////////////////////////     
        const quant = valores.length
        res.innerHTML = `<p> ▪ ${quant} Números foram adicionados</p>`
 
//MENOR&MAIOR///////////////////////////////////////////////////////////////////////////////////////       
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML += `<p>▪ O número ${maior} foi o de maior valor acrescentado</p>`
        res.innerHTML += `<p> ▪ ${menor} é o número com menor valor</p>`

//SOMA//////////////////////////////////////////////////////////////////////////////////////////////       
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        res.innerHTML += `<p> ▪ Somando todos valores o cálculo é ${soma}</p>`
//MEDIA////////////////////////////////////////////////////////////////////////////////////////////
        let media = soma / valores.length
        res.innerHTML += ` ▪ A média aritmética dos valores é igual a ${media}`
    }
}
    