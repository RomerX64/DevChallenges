
const registrarse = async ({userName,password,name,apellido,email}) => {
    const newuser = {userName,password,name,apellido,email};
    try {
        const res = fetch('http://localhost:3000/user/allusersnames');
    } catch (error) {
        return console.error(error);
        
    }
    if (res.incluides(newuser.userName)){ return console.log('El usuario no esta disponible')};
    if (res.incluides(newuser.email)){ return console.log('El email ya esta registrado')};
    if (password.length < 4){return console.log('La contraseña posee menos de 5 caracteres')};

    try {
        const response = fetch('http://localhost:3000/user/newuser',{
            method:'POST',
            headers:{
                'Content Type':'aplication/json'
            },
            body:JSON.stringify(newuser)
        });
        console.log('Su usario se creo corrrectamente');
        return board(newuser);
    } catch (error) {
        return console.error(error);}
}

export default registrarse;