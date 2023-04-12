const { Router } = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/User')
const authMiddleware = require('../middleware/auth')
const router = Router()

router.post('/register', async (req, res) => {
    const {username, email, firstName, lastName, password, password_confirm, address, zipCode} = req.body

  if(!username || !email || !password || !password_confirm || !firstName || !lastName || !address || !zipCode) {
    return res.status(422).json({'message': 'Invalid fields'})
  }

  if(password != password_confirm) return res.status(422).json({'message': 'Passwords do not match'})

  const userExists = await User.exists({email}).exec()

  if(userExists) return res.sendStatus(409)

  try {
    hashedPassword = await bcrypt.hash(password, 10)

    await User.create({email, username, password: hashedPassword, firstName, lastName, address, zipCode})

    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({message: "Could not register"})
  }
})

router.post('/login', async (req, res) => {
    const {email, password } = req.body

    if(!email || !password) return res.status(422).json({'message': 'Invalid fields'})
    
    const user = await User.findOne({email}).exec()
  
    if(!user) return res.status(401).json({message: "Email or password is incorrect"})
  
    const match = await bcrypt.compare(password, user.password)
  
    if(!match) return res.status(401).json({message: "Email or password is incorrect"})
  
    const accessToken = jwt.sign(
      {
        id: user.id
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1800s'
      }
    )
  
    const refreshToken = jwt.sign(
      {
        id: user.id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '1d'
      }
    )
  
    user.refresh_token = refreshToken
    await user.save()
  
    res.cookie('refresh_token', refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24*60*60*1000})//sameSite: 'None', secure: true,
    res.json({access_token: accessToken})                                                                             //you need to remove that part to test in Postman
})

router.post('/logout', async (req, res) => {
    const cookies = req.cookies

    if(!cookies.refresh_token) return res.sendStatus(204)
  
    const refreshToken = cookies.refresh_token
    const user = await User.findOne({refresh_token: refreshToken}).exec()
  
    if(!user){
      res.clearCookie('refresh_token', {httpOnly: true, sameSite: 'None', secure: true})//sameSite: 'None', secure: true
      return res.sendStatus(204)                                                        //you need to remove that part to test in Postman
    }
  
    user.refresh_token = null
    await user.save()
  
    res.clearCookie('refresh_token', {httpOnly: true, sameSite: 'None', secure: true})
    res.sendStatus(204)
})

router.post('/refresh', async (req, res) => {
    const cookies = req.cookies
    if(!cookies.refresh_token) return res.sendStatus(401)
  
    const refreshToken = cookies.refresh_token
  
    const user = await User.findOne({refresh_token: refreshToken}).exec()
  
    if(!user) return res.sendStatus(403)
  
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if(err || user.id !== decoded.id) return res.sendStatus(403)
  
        const accessToken = jwt.sign(
          { id: decoded.id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '1800s' }
        )
  
        res.json({access_token: accessToken})
      }
    )
})

router.get('/user', authMiddleware, async (req, res) => {
    const user = req.user

    return res.status(200).json(user)
})

module.exports = router