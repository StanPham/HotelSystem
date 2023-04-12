const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema(
  {
    username:{
      type: String,
      required: true
    },

    email:{
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      validate: [
        (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
      ]
    },

    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true,
      min: 6
    },
    address: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
        validate: [
            (val) => /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)?/.test(val),
          ]
    },
    zipCode: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        validate: [
            (val) => /^[0-9]+$/.test(val),
          ]
    },

    refresh_token: String
  },
  {
    virtuals:{
      fullName: {
        get(){
          return this.firstName + ' ' + this.lastName
        }
      },

      id: {
        get(){
          return this._id
        }
      }
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  },
  
)

module.exports = mongoose.model('User', UserSchema)