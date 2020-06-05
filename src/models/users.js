import mongose from 'mongoose'

const users = new mongose.Schema({
    email: String,
    password: String,
})

export default mongose.model('users', users)
