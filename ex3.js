// Exercise 3: Array of tasks with arrow functions to add, list and delete items.

// 3(a): Array of strings
let tasks = ["Work", "Eat", "Study"];

// 3(b): Adds a task to the array, logs a confirmation message,
// and returns the new length of the array.
let addTask = (task) => {
    tasks.push(task);
    console.log(task + " has been added to my Tasks.")
    return tasks.length;
}

// 3(c): Iterates over the array and prints each task to the console.
let listAllTasks = () => {
    tasks.forEach((element) => {
        console.log(element);
     });
}

// 3(d): Finds a task's index, removes it if found, logs a message either way,
// and returns the new length of the array.
let deleteTask = (task) => {
    let index = tasks.indexOf(task);
    if(index > -1) {

    tasks.splice(index,1);
    console.log(task + " has been deleted from my Tasks");
    }else{
    console.log(task + " not found in my Tasks");  
    }

    return tasks.length;
}

addTask("Sleep");       // Add "Sleep" to the tasks array
listAllTasks();          // Print out all current tasks
deleteTask("Eat");       // Attempt to remove "Eat" from the tasks array
