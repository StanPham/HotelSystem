const { Router } = require('express')
const Todo = require('../../models/Todo')

const router = Router()

//we use '/' for these because when we call it in server.js, will append 'api/Example/' to the front of it
// to get to it we would call "localhost:3000/api/Example"

router.get('/', async (req, res) => {
    try {
        const todoList = await Todo.find()
        if (!todoList) throw new Error('No Todo List found')
        res.status(200).json(todoList)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body)
    try {
        const todo = await newTodo.save()
        if (!todo) throw new Error('Something went wrong saving the Todo')
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Todo.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router