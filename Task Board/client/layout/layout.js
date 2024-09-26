import sacarLogin  from './APIs/login/login';


const validacion = async() => {
     return await sacarLogin()
};

const Iniciar = async () =>{
     await validacion()
}

export default Iniciar;