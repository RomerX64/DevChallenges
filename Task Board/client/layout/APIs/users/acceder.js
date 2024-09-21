

const acceder = async (userName, password) => {

    try {

        const response = await fetch('tp://localhost:3000/user/myuser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ userName, password })
        })
        if (response.ok) {
            const user = response.json();
            console.log('se pudo generar el usuario '+ user.userName);
            return board(user)
        }else{
            return console.log('error al obtener el Usuario', response.statusText);
            
        }
        
    } catch (error) {
        console.log('Error en la solicitud', error);
        
    }
};

export default acceder;