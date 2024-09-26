const User = require("../models/User")


module.exports = {
    createUser: async ({userName,name,apellido,email,password}) => {
        console.log('createUser');

        try {
            const newUser = await User.create({ userName, name, apellido, email, password });
            return newUser; 
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            throw new Error('Error al crear el usuario'); 
        }
    },

    getMyUser: async({userName,password}) => {
        console.log(userName);
        
        const user = await User.findOne({userName})
        console.log(user);
        
        if (!user) {return console.error('Usuario no encontrado')}
        if (user.password === password){
            console.log(user.password);
            console.log(password);
            
            
        return user
        }else {return console.error('Contraseña o usuario incorrecto')}
    },
    getUserNames: async () => {
        const users = await User.find();
        const namesEmails = [];
        users.forEach(user => {
            namesEmails.push(user.userName, user.email);
        });
        return namesEmails;
    },
    deleteUser: async (ID) => {
        User.findByIdAndDelete(ID);
        return;
    },
}