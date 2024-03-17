// When we need to take input from users then we use inquirer you can also review it below.
import inquirer from "inquirer";
let message = await inquirer.prompt([{ type: 'number',
    name: 'num1',
    message: 'Please inter your fisrt number'
},
{ type: 'number',
name: 'num2',
message: 'Please inter your second number'
},
{ type: 'list',
name: 'operators',
message: 'Pleas choose one of the options',
choices: ["Addition", "Subtraction", "Maltiplication", "Division"]
}
])

// in below you will see conditionals statement.

if(message.operators === "Addition"){
    console.log(message.num1 + message.num2);
}
else if(message.operators === "Subtraction"){
    console.log(message.num1 - message.num2);
}
else if ( message.operators === "Maltiplication"){
console.log(message.num1 * message.num2);
}
else if ( message.operators === "Division"){
    console.log(message.num1 / message.num2);
}
else {
    console.log("please inter right input");
}

