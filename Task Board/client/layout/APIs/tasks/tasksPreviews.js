import sectionView from "../board/layoutBoard/sectionView";
import getMisTasks from "./misTasks";


const tasksPreviews = async (userId) =>{ 
    const misTasks = await getMisTasks(userId)

if(!misTasks){return;}

misTasks.forEach(task => {
    const {title,_Id:ID,status} = task;

    const previuwTaskConteiner = document.createElement('div');
        previuwTaskConteiner.classList.add('previuwTaskConteiner');
        previuwTaskConteiner.id = 'preview'+ ID;
        previuwTaskConteiner.innerHTML=`
                                    <div class="titlePreviuw">${title}</div>
                            <div class="checks">
                            <div class="pending">
                                <input class="chacksitos" type="radio" name="inlineRadioOptions" id="pending" value="Pending">
                            </div>
                            <div class="wontDo">
                                <input class="chacksitos" type="radio" name="inlineRadioOptions" id="NoHare" value="WontDo">
                            </div>
                            <div class="inProgres">
                                <input class="chacksitos" type="radio" name="inlineRadioOptions" id="enprogreso" value="InProgres">
                            </div>
                            <div class="completed">
                                <input class="chacksitos" type="radio" name="inlineRadioOptions" id="CheckCompleted" value="Completed">
                            </div>
                            </div>  
        `;
    document.getElementById('tasks').appendChild(previuwTaskConteiner);
    if(status === Pending){status = value; const body  = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('Pending');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
    if(status === wontdo){status = value; const body = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('WontDo');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
    if(status === Inprogres){status = value; const body = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('InProgres');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
    if(status === Completed){status = value; const body = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('Completed');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};



    const checks = document.querySelectorAll('.chacksitos');
        checks.forEach(check => {
            check.addEventListener('click',()=> {
                const value = check.value
                if(status === value){return;}
                if(status === Pending){status = value; const body  = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('Pending');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
                if(status === wontdo){status = value; const body = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('WontDo');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
                if(status === Inprogres){status = value; const body = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('InProgres');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
                if(status === Completed){status = value; const body = document.getElementById('preview'+ ID); body.classList.add('Backgroundcolortransition');body.classList.add('Completed');body.classList.remove('Pending');body.classList.remove('WontDo');body.classList.remove('InProgres');body.classList.remove('Completed');};
                return;
            })
    })


    previuwTaskConteiner.addEventListener('click', async () =>{
        const taskId = ID
        return await sectionView(taskId, userId)
    })

})};

export default tasksPreviews;