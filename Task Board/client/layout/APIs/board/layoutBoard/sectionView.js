import actualizarTask from "../../tasks/actualizarTask";
import taskCreate from "../../tasks/taskCreate";
import taskDelete from "../../tasks/taskDelete";
import thisTask from "../../tasks/thisTask";


const sectionView = async (taskId, userId) => {
    console.log(userId);
    
    const task = thisTask(taskId)
    let type = task.type ;
    let title = task.title|| '';
    let description = task.description || '';
    let status = task.status; 
    if(!type){type = []}
    if(!status){status = 'Pending'};



    const sectionView = document.createElement('section');
        sectionView.classList.add('sections')
        sectionView.id ='board';
        sectionView.innerHTML = `
            <div class="contenedorTile">
                    <input type="text" name="" class="titleTaskBoard Mysinputs" placeholder="Name of your task" id="titleOfTask" value="${title}">
                    </div>
                    <div class="contenedorDescripcion">
                        <textarea type="text" class="TaskDescriptiom Mysinputs" placeholder="Describe your task" id="descriptionOfTask">${description}</textarea>
                    </div>
                    <div class="contenedortypeTask">
                        <div class="type"><button type="button" class="buttonType" id="Work" value="work"><img src="https://cdn-icons-png.flaticon.com/512/4360/4360026.png"  class="imgType"></button></div>
                        <div class="type"><button type="button" class="buttonType" id="relax" value="relax"><img src="https://cdn1.iconfinder.com/data/icons/restaurants-and-food/115/coffee-512.png"  class="imgType"></div>
                        <div class="type"><button type="button" class="buttonType" id="study" value="study"><img src="https://cdn-icons-png.flaticon.com/512/167/167756.png"  class="imgType"></button></div>
                        <div class="type"><button type="button" class="buttonType" id="outSide" value="outSide"><img src="https://cdn-icons-png.flaticon.com/512/2820/2820724.png"  class="imgType"></button></div>
                        <div class="type"><button type="button" class="buttonType" id="train" value="train"><img src="https://cdn-icons-png.flaticon.com/512/2780/2780119.png"  class="imgType"></button></div>
                        <div class="type"><button type="button" class="buttonType" id="time" value="time"><img src="https://cdn-icons-png.flaticon.com/512/4363/4363401.png" class="imgType"></button></div>
                        
                    </div>

                    <div class="contenedorStatusDelete">
                        <div class="StatusBoard" id="StatusBoard">
                            <div class="CompletedInProgres">
                                <button type="button" class="statusCheck Completed" value="Completed">Completed</button>
                                <button type="button" class="statusCheck InProgres" value="InProgres">In Progres</button>
                            </div>
                            <div class="pendingwontDo">
                                <button type="button" class="statusCheck Pending" value="Pending">Pending</button>
                                <button type="button" class="statusCheck WontDo" value="WontDo">Wont'Do</button>
                            </div>
                            
                        </div>
                        <div class="SubmitDelete" id="submicion">
                            <div >
                                <img src="https://icones.pro/wp-content/uploads/2021/04/nouvelle-icone-grise.png" alt="" style="width: 100%; height: 100%;">
                            </div>
                        </div>
                        <div class="SubmitDelete" id="deletcion">
                            <div >
                                <img src="https://cdn-icons-png.flaticon.com/512/216/216658.png" alt="" style="width: 100%; height: 100%;">
                            </div>
                        </div>
                    </div>
        `;
    document.getElementById('main').appendChild(sectionView)


    const updateStatusView = (newStatus) => {
        const statusBoard = document.getElementById('StatusBoard');
        const board = document.getElementById('board');

        ['Pending', 'WontDo', 'InProgres', 'Completed'].forEach(statusClass => {
            statusBoard.classList.remove(statusClass);
            board.classList.remove(statusClass);
        });

        statusBoard.classList.add(newStatus);
        board.classList.add(newStatus);
    };

    updateStatusView(status);
    const buttonStatus = document.querySelectorAll('.statusCheck');
    buttonStatus.forEach(button => {
        button.addEventListener('click', () => {
            status = button.value; 
            updateStatusView(status);
        });
    });
    

        for(let i=0 ; i<type.length;i++){
        document.getElementById(status[i]).classList.add('shadowin')
        }
        const buttonType = document.querySelectorAll ('.buttonType');

            buttonType.forEach(boton => {
                boton.addEventListener('click', () => {
                    let value = boton.value;
                const index = type.indexOf(value);
                if (index !== -1) {
                    type.splice(index, 1); 
                    boton.classList.remove('shadowin'); 
                } else {
                type.push(value); 
                    boton.classList.add('shadowin');
                }
                });
            });
            
            function debounce(func, wait) {
                let timeout;
                return function(...args) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, args), wait);
                };
            };

            
            
            const buttonAdd = document.getElementById('submicion');
            buttonAdd.addEventListener('click',debounce(async () => {   
                const newtitle = document.getElementById('titleOfTask').value;
                if (title !== newtitle){title = newtitle}
        
                const newdescription = document.getElementById('descriptionOfTask').value
                if(description !== newdescription){description = newdescription};

                const newTask = {
                    status,
                    title,
                    type,
                    description,
                };
                
            if(!newTask._id){return await taskCreate(newTask, userId)};

            if(newTask._id){return await actualizarTask(newTask,taskId)}}),
            5000);

        const buttonDelete = document.getElementById('deletcion');
        buttonDelete.addEventListener('click',debounce( async () => {
            const confirmacion = confirm('¡Atencion! Esta accion es irreversible, los datos de tu task no se podran recuperar. ¿Deseas eliminarlo?')
            if(confirmacion){ 
                await taskDelete(taskId)
                return;
            }
        },5000));  
}
export default sectionView;