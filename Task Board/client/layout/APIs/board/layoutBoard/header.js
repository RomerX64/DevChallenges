import sacarLogin from "../../login/login";


const header = (userId) => {
    const contenedor = document.createElement('div');
        contenedor.classList.add('d-flex');
        contenedor.classList.add('mt-2');
        contenedor.classList.add('container');
        contenedor.classList.add('sections');

        contenedor.innerHTML= `
                <div class="d-flex text-center">
                    <button id="botonCerrarSecion" class="btn btn-light rounded-circle titlado my-2" style="width:0.7rem; height:1.4rem; background-color: #97A3B6;"></button>
                    <h6 class="my-2 ml-1">Cerrar Secion</h6>
                </div>
                    <div class=" titlado" id="MYTASKBOARD">
                        <h2 >My Task Boarad</h4>
                </div>
        `;
    document.getElementById('header').appendChild(contenedor);
    const cerrarSecion = document.getElementById('botonCerrarSecion');
        cerrarSecion.addEventListener('click', ()=> {
            const sections = document.querySelectorAll('.sections')
            sections.forEach(section => {
                section.remove(); 
            });
                
            userId = null;
            return sacarLogin();
            
        });
}

export default header;