const Charity = require('../models/').Charity;
const Sequelize = require('sequelize');
const {or, and, gt, lt} = Sequelize.Op;

module.exports = {

    read(req, res) {
        return Charity
            .findAll()
                .then((charities) => {
                    console.log("charities: ", charities);
                    return res.send(charities);
                })
                .catch((err) => {
                    console.log("We ran into an error:");
                    console.log(err);
                    return res.status(400).send(err);
                })
    },
}
