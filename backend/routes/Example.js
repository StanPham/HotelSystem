const { Router } = require('express')
const Todo = require('../../models/Todo')

const router = Router()

//we use '/' for these because when we call it in server.js, will append 'api/Example/' to the front of it
// to get to it we would call "localhost:3000/api/Example"

