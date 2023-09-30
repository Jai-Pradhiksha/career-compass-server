const signupModel = require('../models/signupModule')

const addNewUser =async (request, response) => {
    const username = request.body.username
    const user = new signupModel({
        username : username 
    })
    
    try{
        const existingUser = await signupModel.findOne({username : username})
        if (existingUser)
        {
            return response.status(409).json({message:'Already existing user'})
        }
        const newUser = await user.save()
        response.status(201).json(newUser)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = { addNewUser}