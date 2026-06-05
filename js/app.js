function addTask(){

    const input =
        document.getElementById("taskInput");

    const task =
        input.value;

    if(task === ""){
        alert("Ingrese una tarea");
        return;
    }

    const li =
        document.createElement("li");
        
// Agregar contenido a la tarea y el botón de eliminar
    li.innerHTML = `
        ${task}
        <button onclick="this.parentElement.remove()">
        Eliminar
        </button>
        `;

// Agregar evento de clic para marcar la tarea como completada
    li.onclick = function(){
    li.style.textDecoration = "line-through";
}

    document
        .getElementById("taskList")
        .appendChild(li);

    input.value = "";

}