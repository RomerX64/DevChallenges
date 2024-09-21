const User = require("../models/User")


module.exports = {
    createUser: async ({userName,name,apellido,email,password}) => {
        const newUser = await User.create({ userName, name, apellido, email, password });
        return newUser;
    },

    getMyUser: async({userName,password}) => {
        const user = await User.findOne({userName})
        if (!user) {return 'Usuario no encontrado'}
        if (user.password === password) {
            return user
        }else {return 'Contraseña o usuario incorrecto'}
    },
    getUserNames: async () => {
        console.log('service')
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