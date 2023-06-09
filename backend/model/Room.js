const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Room = Schema(
  {
    number:{
      type: Number,
      
    },

    condition:{
        type: String,
        
      },

      type:{
        type: String,
        
      },


      reservation:{
        type: String,
        
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

module.exports = mongoose.model('Room', Room)