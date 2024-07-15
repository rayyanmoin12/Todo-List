#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let while_condition = true;
while (while_condition === true) {
    let ans = await inquirer.prompt([{
            type: "list",
            name: "operation",
            message: "Choose an option",
            choices: ["Add", "Remove"]
        }]);
    if (ans.operation === "Add") {
        let addTask = await inquirer.prompt([{
                type: "input",
                name: "add",
                message: "What woud you like to add?"
            }]);
        if (addTask.add !== "") {
            todo.push(addTask.add);
            console.log(todo);
        }
        else {
            console.log("Please add something!");
        }
    }
    else if (ans.operation === "Remove") {
        let removeTask = await inquirer.prompt([{
                type: "list",
                name: "remove",
                message: "What would like to remove?",
                choices: todo
            }]);
        let index_to_remove = todo.indexOf(removeTask.remove);
        if (index_to_remove >= 0) {
            todo.splice(index_to_remove, 1);
            console.log("You removed: ", removeTask.remove);
            console.log(todo);
        }
    }
    let answer = await inquirer.prompt([{
            type: "confirm",
            name: "continue",
            message: "Do you want to continue?",
            default: true
        }]);
    if (answer.continue === false) {
        while_condition = false;
    }
}
console.log("Thank you for using Todo list.");
