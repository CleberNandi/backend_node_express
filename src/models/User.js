const { Model, DataTypes } = require('sequelize')

class user extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.address, {foreignKey: 'user_id', as: 'addresses'})
        this.belongsToMany(models.tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'})
    }
}

module.exports = user