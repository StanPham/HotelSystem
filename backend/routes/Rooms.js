const { Router } = require('express')
const RoomsSchema = require('../model/RoomsSchema')
const router = Router()


router.get('/', async (req, res) => {
    try {
      const rooms = await Rooms.find()
      res.json(rooms)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  
  // GET a specific room
  router.get('/:id', getRoom, (req, res) => {
    res.json(res.room)
  })


  router.put('/:id', getRoom, async (req, res) => {
    if (req.body.number != null) {
      res.room.number = req.body.number
    }
  
    if (req.body.condition != null) {
      res.room.condition = req.body.condition
    }
  
    if (req.body.type != null) {
      res.room.type = req.body.type
    }
  
    if (req.body.reservation != null) {
      res.room.reservation = req.body.reservation
    }
  
    try {
      const updatedRoom = await res.room.save()
      res.json(updatedRoom)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  

  
  async function getRoom(req, res, next) {
    let room
    try {
      room = await Rooms.findById(req.params.id)
      if (room == null) {
        return res.status(404).json({ message: 'Cannot find room' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.room = room
    next()
  }
  async function getRoom(req, res, next) {
    let room
    try {
      room = await RoomsSchema.findById(req.params.id)
      if (room == null) {
        return res.status(404).json({ message: 'Cannot find room' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.room = room
    next()
  }
  async function getRoom(req, res, next) {
    let room
    try {
      room = await RoomsSchema.findById(req.params.id)
      if (room == null) {
        return res.status(404).json({ message: 'Cannot find room' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.room = room
    next()
  }
   
  router.post('/', async (req, res) => {
    const room = new Rooms({
      number: req.body.number,
      condition: req.body.condition,
      type: req.body.type,
      reservation: req.body.reservation
    })
  
    try {
      const newRoom = await room.save()
      res.status(201).json(newRoom)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  
  
module.exports = router