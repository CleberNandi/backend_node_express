const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res){
        // Encontrar tpdps usuarios que tem email que termina com @gmail
        // Desses usuarios buscar todos que moram na "Rua Ignacio Stakowisk"
        // Desses usuarios buscar as tecnologias que começam com React

        const users = await User.findAll({
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses',
                 where: { 
                     street: {
                         [Op.iLike]:'%ignacio%'
                        } 
                    }
                }, //endereços
                { 
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }, //tecnologias
            ]
        })

        return res.json(users)
    }
}