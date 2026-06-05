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

    li.textContent = task;

// Agregar evento de clic para marcar la tarea como completada
    li.onclick = function(){
    li.style.textDecoration = "line-through";
}

    document
        .getElementById("taskList")
        .appendChild(li);

    input.value = "";

}