const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RoomsSchema = Schema(
  {
    number:{
      type: Number,
      required: true
    },

    condition:{
        type: String,
        required: true
      },

      type:{
        type: String,
        required: true
      },


      reservation:{
        type: String,
        required: true
      },

    

    refresh_token: String
  },
  {
    virtuals:{

      id: {
        get(){
          return this._id
        }
      }
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  },
  
)

module.exports = mongoose.model('Rooms', RoomsSchema)