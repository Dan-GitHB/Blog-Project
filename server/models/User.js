import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  confirmPassword: {
    type: String,
    require: true,
    select: [false],
  },
  token: {
    type: String,
  },
})

export const User = mongoose.model('users', UserSchema)
