import inquirer from "inquirer";

// Define an async function to perform calculations
async function calculate() {
  let answer: number;

  const Ans = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter First Number: ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter Second Number: ",
    },
    {
      type: "list",
      name: "operator",
      message: "What Method do you want to perform:",
      choices: ["Divide", "Multiply", "Add", "Subtract"],
    },
  ]);

  switch (Ans.operator) {
    case "Add":
      answer = Ans.num1 + Ans.num2;
      console.log("The answer for addition is: " + answer);
      break;

    case "Subtract":
      answer = Ans.num1 - Ans.num2;
      console.log("The answer for subtraction is: " + answer);
      break;

    case "Multiply":
      answer = Ans.num1 * Ans.num2;
      console.log("The answer for multiplication is: " + answer);
      break;

    case "Divide":
      if (Ans.num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
      } else {
        answer = Ans.num1 / Ans.num2;
        console.log("The answer for division is: " + answer);
      }
      break;

    default:
      console.log("Invalid operator selected.");
  }
}

