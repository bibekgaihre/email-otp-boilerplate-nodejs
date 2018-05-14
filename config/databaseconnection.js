const Sequelize = require('sequelize');


const connection = new Sequelize('user', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
});

var user = connection.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,

})

exports=module.exports={
    user
}
//defines the table
//first name of table and second are objects 






