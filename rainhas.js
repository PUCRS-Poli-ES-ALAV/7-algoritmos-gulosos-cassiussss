/** 
 * Ao encontrar uma posição disponível marcar todas as possíveis incorretas a partir desta
 * Após cada resultado de sucesso guardar armazená-lo
*/

const generateArray = (size) => {
    const array = []

    array.fill(array.fill(0, 0, size), 0, size)

    return array
}

const fillIncorrectColumns = (array, x) => { 
        for (let item in array[x]) { 
            item.f
        }
}

const rainha = (boardSize) => { 
    const board = generateArray(boardSize)

    

}