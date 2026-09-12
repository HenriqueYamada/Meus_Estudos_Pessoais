const notaDoAluno = 7

switch (notaDoAluno) {
    case 10:
    case 9:
        console.log('Excelente')
        break

    case 8:
    case 7:
        console.log('Bom')
        break
    
    case 6:
    case 5:
    case 4:
        console.log('Médio')
        break
    
    case 3:
    case 2:
    case 1:
    case 0: 
        console.log('Ruim')
        break

    default:
        console.log('Informe a nota')
        break
}