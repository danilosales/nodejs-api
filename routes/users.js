const express = require('express')
const router = express.Router()
const db = require('../config/database')

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.User.findAll()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

router.get('/:id', function (req, res, next) {
  db.User.findByPk(req.params.id)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

router.post('/', function (req, res, next) {
  db.User.create({
    name: req.body.name,
    email: req.body.email
  })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

router.delete('/:id', function (req, res, next) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(error => {
        res.status(500).json(error)
      })
})

module.exports = router
