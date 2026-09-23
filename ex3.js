let tasks = ["Work", "Eat", "Study"];

let addTask = (task)=>{
    tasks.push(task);
    console.log(task + " has been added to my Tasks.")
    return tasks.length;
}

let listAllTasks=()=>{
    tasks.forEach((element) => {
        console.log(element);
     });
}

let deleteTask = (task) => {
    let index = tasks.indexOf(task);
    // some comment
    if(index > -1) {
    Tasks.Splice(index,1);
    console.log(task + " has been deleted from my Tasks");
    }else{
    console.log(task + " not found in my Tasks");  
    }

    return Tasks.length;
}

addTask("Sleep");
listAllTasks();
deleteTask("Eat");