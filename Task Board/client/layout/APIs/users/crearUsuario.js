import sacarLogin from "../login/login";

const registrarse = async (datosNewuser) => {

    try {
        const res = await fetch('http://localhost:3000/user/allusersnames');
        if(res.ok){let users = await res.json()
        
        if (users.includes(datosNewuser.userName)){ return alert('El usuario no esta disponible')};
        if (users.includes(datosNewuser.email)){ return alert('El email ya esta registrado')};
        if (datosNewuser.password.length < 4){return alert('La contraseña posee menos de 5 caracteres')};
        }
    } catch (error) {
        return console.error(error);      
    }
    try {
        const response = await fetch('http://localhost:3000/user/newuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosNewuser)
        });
        if(response.ok){
            console.log('Su usario se creo corrrectamente '+ datosNewuser.userName);

        }else{
            return;       
        }
    } catch (error) {
        return console.error(error);}
}

export default registrarse;