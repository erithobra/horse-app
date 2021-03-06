const Horse = require("../models").Horse;
const Trainer = require("../models").Trainer;

// index route
const index = (req, res) => {
    Horse.findAll()
    .then(horses => {
        res.render("index.ejs", {
            horses: horses
        })
    })
};


// render new route
const renderNew = (req, res) => {
    res.render("new.ejs", {
    })
}

const show = (req, res) => {
    Horse.findByPk(req.params.index, {
        include : [Trainer]
    })
    .then(horse => {
        Trainer.findAll()
        .then(allTrainers => {
            res.render("show.ejs", {
                horse: horse,
                trainer: allTrainers
            })
        })
    })
};

const editHorse = (req, res) => {

    if(req.body.addOrRemove == "add") { // if statement allows for adding or removing trainers from horses
    Horse.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(Updatehorse => {
        Trainer.findByPk(req.body.trainer).then((foundTrainer) => {
            Horse.findByPk(req.params.index).then((foundHorse) => {
                foundHorse.addTrainer(foundTrainer);
                res.redirect(`/horses/${req.params.index}`)
                res.redirect(`/horses/${req.params.index}`)
            })
        })
    })
    } else { // if "add" was not selected, then other choice is remove, which triggers this loop to remove trainer
    Horse.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(Updatehorse => {
        Trainer.findByPk(req.body.trainer).then((foundTrainer) => {
            Horse.findByPk(req.params.index).then((foundHorse) => {
                foundHorse.removeTrainer(foundTrainer);
                res.redirect(`/horses/${req.params.index}`)
                res.redirect(`/horses/${req.params.index}`)
            })
        })
    })
}
}

const deleteHorse = (req, res) => {
    Horse.destroy({ where: {id: req.params.index} })
    .then(() => {
        res.redirect('/horses/')
    });
};

const createHorse = (req, res) => {
    Horse.create(req.body)
    .then(newHorse => {
        res.redirect(`/horses/${newHorse.id}`)
        
    })
};

module.exports = {
    index,
    renderNew,
    show,
    editHorse,
    deleteHorse,
    createHorse

}