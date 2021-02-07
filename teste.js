const { getMaxListeners, mainModule } = require('process')
const Sequelize = require ('sequelize')
const sequelize = new Sequelize('test', 'root', 'mesa.123', {
    host: "localhost",
    dialect: 'mysql'
})

// Criando model //

const Postagem = sequelize.define('postagens',{
    titulo: {
            type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.create({
//    titulo: "Um titulo Qualquer",
//    conteudo: "Aqui esta o conteudo"
//})


const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
},
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
},
email: {
    type: Sequelize.STRING
}

})

/*Usuario.create({
    nome: "Silas",
    sobrenome: "Ribeiro",
    idade: 25,
    email: "silas@mail.com",

})*/



//Postagem.sync({force: true})

//Usuario.sync({force: true})





/* mensagem de erro ou de sucesso para o prompt*/
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro);
})