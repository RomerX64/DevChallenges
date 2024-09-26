
const acceder = async ({userName, password}) => {

    try {

        const response = await fetch('http://localhost:3000/user/myuser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ userName, password })
        })
        if (response.ok) {
            const user = await response.json();
            console.log('se pudo obtener el usuario '+ user.userName);
            return user;
        }else{
            return console.error('error al obtener el Usuario', response.statusText);         
        }
    } catch (error) {
        return console.error('Error en la solicitud', error);
        
    }
};

export default acceder;