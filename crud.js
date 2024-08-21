document.addEventListener("DOMContentLoaded",()=>{
   const form =document.getElementById("task-form");
   const input =document.getElementById("task-input");
   const button =document.getElementById("task-submit-button");
   const list =document.getElementById("task-list");

   let tasks = [],
     editId =null;


   form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text = input.value.trim();
    console.log(text);
     

      if(text){
          if(editId) 
            {
             tasks.find((t)=> t.id === editId).text = text;
             editId = null;
            button.textContent ="Add Task";
           }
           else 
           {
            tasks.push({id: Date.now(), text});
           }
            renderTasks();
            input.value="";
         }
         console.log(tasks);
   });
     
    function renderTasks() {
        list.innerHTML="";
        tasks.forEach((task) => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${task.text}</span> 
            <button>Edit</button>   <button>Delete</button>`;
            li.querySelector("button:nth-child(2)").addEventListener("click", ()=> startEdit(task));
            li.querySelector("button:nth-child(3)").addEventListener("click", ()=> deleteTask(task.id));
            list.appendChild(li);
        });
    } 
    
    function startEdit(task){
        input.value = task.text;
        input.focus();
        editId = task.id;
        button.textContent = "Update Task";
    }
      
     function deleteTask(id){
        tasks = tasks.filter((t)=> t.id !== id);
        renderTasks();
        if (editId === id){
            editId = null;
            button.textContent = "Add Task";
        }
     }
});
















