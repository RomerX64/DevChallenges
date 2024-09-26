import tasksPreviews from "../../tasks/tasksPreviews";
import sectionView from "./sectionView";


const sectionPreview = async (userId) => {

    const sectionPreview = document.createElement('section');
        sectionPreview.classList.add('sections');
        sectionPreview.id ='tasks';
        sectionPreview.innerHTML=`
            <div class="previuwTaskConteiner AgregarTask" id="buttonAgregarTask">
                <button id="AgregarTask" type="button">+</button> 
                <div class="titlePreviuw">Agregar Task Nueva</div>
            </div>
        `;
        document.getElementById('main').appendChild(sectionPreview);

        tasksPreviews(userId)
        
        const buttonAgregarTask = document.getElementById('buttonAgregarTask')
            buttonAgregarTask.addEventListener('click',async ()=>{
                let view = document.getElementById('board');
                if(view){view.remove()};
                const task = {
                    title:'',
                    description:'',
                    type:'',
                    status:'Pending',
                }
                return await sectionView(task, userId)
            });
    
}

export default sectionPreview;