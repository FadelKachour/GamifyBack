const db = require("../models");
const Quest = db.quests;

// Create Quest and Save 
exports.create = (req, res) => {
    // Validate Quest
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Quest
    const quest = new Quest({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        credit: req.body.credit

    });

    // Save Quest in the database
    quest
        .save(quest)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Quest."
            });
        });
};

// Retrieve all quests
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Quest.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Games."
            });
        });
};
// Find a single Quest by Id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Quest.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Quest with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Quest with id=" + id });
      });
  };

// Edit Quest
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Quest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Quest with id=${id}. Maybe Quest was not found!`
          });
        } else res.send({ message: "Quest was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Quest with id=" + id
        });
      });
  };

// Delete a Quest
exports.delete = (req, res) => {
    const id = req.params.id;
    Quest.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Quest with id=${id}. Maybe Quest was not found!`
          });
        } else {
          res.send({
            message: "Quest was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Quest with id=" + id
        });
      });
  };