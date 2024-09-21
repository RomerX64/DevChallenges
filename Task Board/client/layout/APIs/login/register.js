import registrarse from "../users/crearUsuario";
import sacarLogin from "./login";

const sacarRegistrarse = () => {
    const conteneorTotalLogin = document.getElementById('conteneorTotal');
        conteneorTotalLogin.remove();

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

        for(let i=0; i<8; i++){
            const contenedorInputs = document.createElement('li');
                contenedorInputs.classList.add('list-group-item');
                contenedorInputs.id = 'contenedorInputs'+i;
                if(i === 0){
                    contenedorInputs.classList.add('active');
                    contenedorInputs.classList.add('text-center');
                    contenedorInputs.textContent='Crea tu cuenta';
                };
                if(i>5){
                    contenedorInputs.classList.add('container');
                };
            document.getElementById('listaSeparadora').appendChild(contenedorInputs);
        };
            for(let i=0; i<5 ;i++){
                const inputs = document.createElement('input')    
                    inputs.classList.add('text-center');
                    inputs.classList.add('inputRequire');
                    inputs.setAttribute('required', '');
                
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
                    if(i===2){
                        inputs.type = 'string';
                        inputs.placeholder = 'Your Name';
                        inputs.id = 'name';
                        document.getElementById('contenedorInputs3').appendChild(inputs);
                    }
                    if(i===3){
                        inputs.type = 'string';
                        inputs.placeholder = 'Your Last Name';
                        inputs.id = 'YourLastName';
                        document.getElementById('contenedorInputs4').appendChild(inputs);
                    }
                    if(i===4){
                        inputs.type = 'email';
                        inputs.placeholder = 'expmple@email.com';
                        inputs.id = 'email';
                        document.getElementById('contenedorInputs5').appendChild(inputs);
                    }
            }
            

            const botonRegistrarse = document.createElement('button');
                botonRegistrarse.classList.add('btn');
                botonRegistrarse.classList.add('btn-dark');
                botonRegistrarse.classList.add('border');
                botonRegistrarse.classList.add('border-dark');
                botonRegistrarse.classList.add('container');
                botonRegistrarse.type = "submit";
                botonRegistrarse.textContent = "Registrarse";
                botonRegistrarse.id = "botonRegistrarse";
            document.getElementById('contenedorInputs6').appendChild(botonRegistrarse)

            const h5 = document.createElement('h5');
                h5.classList.add('text-center');
                h5.classList.add('loginpsize');
                h5.textContent ='Ya posees una cuenta?';
            document.getElementById('contenedorInputs7').appendChild(h5);

            const botonLogearse = document.createElement('button');
                botonLogearse.classList.add('btn');
                botonLogearse.classList.add('btn-light');
                botonLogearse.classList.add('border');
                botonLogearse.classList.add('border-dark');
                botonLogearse.classList.add('fit-content');
                botonLogearse.classList.add('container');
                botonLogearse.id = 'botonLogearse';
                botonLogearse.type = 'button';
                botonLogearse.textContent = 'Logearse'
            document.getElementById('contenedorInputs7').appendChild(botonLogearse);

            const inputs = document.querySelectorAll('.inputRequire');
            const bRegistrarse = document.getElementById('botonRegistrarse');

    
            const checkInputs = () => {
                const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
                bRegistrarse.disabled = !allFilled; 
            }
            checkInputs();
            const conteneorTotalRegistro = document.getElementById('conteneorTotal');
            
            bRegistrarse.addEventListener('click', async () => {
                const userName = document.getElementById('userName').value;
                const password = document.getElementById('Password').value;
                const name = document.getElementById('name').value;
                const apellido = document.getElementById('YourLastName').value;
                const email = document.getElementById('email').value;
                const datosNewuser = {userName,password,name,apellido,email};

                await registrarse(datosNewuser);
                if (!registrarse.ok) {return console.error('No se pudo generar el usuario', error);}
                else {conteneorTotalRegistro.remove()}
            })

            const bLogearse = document.getElementById('botonLogearse');
                bLogearse.addEventListener('click', async () => {
                    conteneorTotalRegistro.remove()
                    sacarLogin()
                })

}

export {sacarRegistrarse};