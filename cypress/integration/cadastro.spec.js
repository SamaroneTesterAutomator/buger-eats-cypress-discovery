import signup from '../Pages/SignUpPage'
import signupFactory from '../factories/SignupFactory'
import SignUpPage from '../Pages/SignUpPage'
// import { it } from 'faker/lib/locales'


describe('Cadastro basico', () => {


    it('Usuário deve se tornar um deliver veiculo moto', function () {


        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Usuário deve se tornar um deliver veiculo Bicicleta', () => {

        var deliver = signupFactory.deliver()

        deliver.delivery_method = 'Bicicleta'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Usuário deve se tornar um deliver veiculo van/carro', function () {

        var deliver = signupFactory.deliver()

        deliver.delivery_method = 'Van/Carro'


        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })


    it('Teste Negativo - Não informar o nome', function () {

        var deliver = signupFactory.deliver()

        deliver.name = ''

        signup.go()
        signup.fillFormUnnamed(deliver)
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
    })

    it('Teste Negativo - Informar CPF inválido', function () {
        var deliver = signupFactory.deliver()

        deliver.cpf = '000000000AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })




    context('Preenchimento dos Campos', function () {
        const messages = [
            { field: 'nome', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'numero', output: 'É necessário informar o número do endereço' },
            { field: 'método de entrega', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
        ]

        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} é obrigatório`, function () {
                signup.alertMessageShouldBe(msg.output)
            })
        })

     })


})