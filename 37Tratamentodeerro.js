/*tratamento de erro
 *(usando Try , Cath , Throw e finally)
 */

function tratarErroELancar(erro) { //será impresso uma mesnsagem de erro ao usuário
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //usado para considerar algum tipo de erro!
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //usado para chamar o throw atravéz de uma função
        tratarErroELancar(e)
    } finally { //usado após o throw para finalizar 
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)