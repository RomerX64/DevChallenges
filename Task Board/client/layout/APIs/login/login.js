import {mainBoard} from "../board/mainBoard";
import acceder from "../users/acceder";
import { sacarRegistrarse } from "./register";



const sacarLogin = async () => {
    const form = document.getElementById('login')
        form.addEventListener('click',(event) => {
            event.preventDefault()
        })

    const conteneorTotal = document.createElement('div');
        conteneorTotal.classList.add('login');
        conteneorTotal.classList.add('fit-content');
        conteneorTotal.classList.add('container');
        conteneorTotal.classList.add('position-absolute');
        conteneorTotal.classList.add('d-print-table');
        conteneorTotal.classList.add('margen');
        conteneorTotal.id = 'conteneorTotal'
    document.getElementById('login').appendChild(conteneorTotal);

        const listaSeparadora = document.createElement('ul');
            listaSeparadora.classList.add('list-group');
            listaSeparadora.classList.add('fit-content');
            listaSeparadora.id ='listaSeparadora';
        document.getElementById('conteneorTotal').appendChild(listaSeparadora);

        for(let i=0 ; i<5 ; i++){
            const contenedorInputs = document.createElement('li');
                contenedorInputs.classList.add('list-group-item');
                contenedorInputs.id = 'contenedorInputs'+i;
                if(i === 0){
                    contenedorInputs.classList.add('active');
                    contenedorInputs.classList.add('text-center');
                    contenedorInputs.textContent='Accede a tu cuenta';
                };
                if(i>2){
                    contenedorInputs.classList.add('container');
                };
            document.getElementById('listaSeparadora').appendChild(contenedorInputs);
        };
            for(let i=0; i<2 ; i++){
                const inputs = document.createElement('input')    
                    inputs.classList.add('text-center');
                    inputs.classList.add('inputRequire');
                    inputs.setAttribute('required', '')
                
                    if(i === 0){
                        inputs.type = 'text';
                        inputs.placeholder = '@UserName';
                        inputs.id = 'userName';
                        document.getElementById('contenedorInputs1').appendChild(inputs);
                    }
                    if(i===1){
                        inputs.type = 'password';
                        inputs.placeholder = 'Password';
                        inputs.id = 'Password';
                        document.getElementById('contenedorInputs2').appendChild(inputs);
                    }
            }
            

            const botonAcceder = document.createElement('button');
                botonAcceder.classList.add('btn');
                botonAcceder.classList.add('btn-dark');
                botonAcceder.classList.add('border');
                botonAcceder.classList.add('border-dark');
                botonAcceder.classList.add('container');
                botonAcceder.type = "submit";
                botonAcceder.textContent = "Acceder";
                botonAcceder.id = "botonAcceder";
            document.getElementById('contenedorInputs3').appendChild(botonAcceder)

            const h5 = document.createElement('h5');
                h5.classList.add('text-center');
                h5.classList.add('loginpsize');
                h5.textContent ='No posees una cuenta?';
            document.getElementById('contenedorInputs4').appendChild(h5);

            const botonRegistrarse = document.createElement('button');
                botonRegistrarse.classList.add('btn');
                botonRegistrarse.classList.add('btn-light');
                botonRegistrarse.classList.add('border');
                botonRegistrarse.classList.add('border-dark');
                botonRegistrarse.classList.add('fit-content');
                botonRegistrarse.classList.add('container');
                botonRegistrarse.id = 'botonRegistrarse';
                botonRegistrarse.type = 'button';
                botonRegistrarse.textContent = 'Registrarse';
            document.getElementById('contenedorInputs4').appendChild(botonRegistrarse);



        
        
        const inputs = document.querySelectorAll('.inputRequire');
        const bacceder = document.getElementById('botonAcceder');

        const checkInputs = () => {
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
            bacceder.disabled = !allFilled; 
        };
        checkInputs();

        inputs.forEach(input => {
            input.addEventListener('input', checkInputs);
        });

        
        bacceder.addEventListener('click', async () =>{
                const userName =  document.getElementById('userName').value;

                const password =  document.getElementById('Password').value;

                const logearse = {userName,password} 
                console.log(logearse);

                const user = await acceder(logearse);

                if(!user){
                    alert('El usuario o contraseña es incorrecta');
                    const confirm = confirm('Deseas crear una cuenta?');
                        if(confirm){return sacarRegistrarse()}
                    return;
                 }
                const borrar = document.getElementById('conteneorTotal');
                    borrar.remove();
                if(user){return await mainBoard(user)}
            })       
        const registrarseInputs = document.getElementById('botonRegistrarse');
            registrarseInputs.addEventListener('click', ()=>{
                sacarRegistrarse();
            })
}
export default sacarLogin;