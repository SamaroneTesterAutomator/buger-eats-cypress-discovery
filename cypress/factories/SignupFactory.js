
// var faker = require('faker')


export default {
    deliver: function () {

        // var firstName = faker.name.firstName()
        // var lastName = faker.name.lastName()
        // var cpf = require('gerador-validador-cpf')

        var data = {
            name: "Samarone Silva",
            cpf: "66220574001",
            email: "teste@teste.com",
            whatsapp: '11999999999',
            address: {
                postalcode: '05001-100',
                street: 'Avenida Francisco Matarazzo',
                number: '1500',
                district: 'Água Branca',
                complement: '11° andar',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}