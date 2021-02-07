const Sequelize = require ('sequelize')

// Conexão com o banco de dados MySql
const sequelize = new Sequelize('postapp', 'root', 'mesa.123', {
    host: "localhost",
    dialect: 'mysql'
})

//Exportando o Sequelize

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize

}