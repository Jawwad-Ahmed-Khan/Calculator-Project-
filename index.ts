import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "first Input:", type: "number", name: "f1" },
  { message: "2nd Input:", type: "number", name: "f2" },
  {message:"Opertor Selection:",type:"list",name:"operator",choices:["+","-","x","/"]},
]);
switch(answer.operator)
{
  case "+":
    console.log(`${answer.f1} + ${answer.f2} = `,answer.f1+answer.f2);
    break;
  case "-":
    console.log(`${answer.f1} - ${answer.f2} = `,answer.f1-answer.f2);
    break;
  case "x":
    console.log(`${answer.f1} x ${answer.f2} = `,answer.f1*answer.f2);
    break;
  case "/":
    console.log(`${answer.f1} / ${answer.f2} = `,answer.f1/answer.f2);
    break;
  default:
console.log("Invalid Choice");
    break;
}