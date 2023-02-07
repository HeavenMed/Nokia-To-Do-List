const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MVC' , 'gui' ,'guigui167', {
    host: 'localhost' ,
    dialect: 'mysql'
})


try {

    sequelize.authenticate()
    console.log("Deu bom")

} catch(error){
    console.log("Não deu" + error)
}

module.exports = sequelize