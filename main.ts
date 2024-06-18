import chalk from "chalk";
import inquirer from "inquirer";


class player1{
    name:string
    fuel:number =100

    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
         this.fuel = 100
    }
}
class openentplayear{
    name:string
    fuel:number =100

    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Enter the name"
}])


let openent = await inquirer.prompt([{
    name: "select",
    type: "list",
    message: "Select an openent",
    choices: ["Zombie", "Panda" ,"Allien"]
}]);


let p1 = new player1 (player.name)
let o1 = new openentplayear (openent.select)

console.log(`${chalk.bold.red(p1.name)} v/s ${chalk.bold.green(o1.name)}`)
do{
    if(openent.select === "Zombie"){
 
    let task = await inquirer.prompt([{
     name: "opt",
     type: "list",
     message: "Select an openent",
     choices: ["Attack", "Midikit" ,"Run"]
 }]);
 
  if(task.opt === "Attack"){
   let num = Math.floor(Math.random() * 2)
   if(num > 0) {
     p1.fuelDecrease()
     console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
     console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
     if(p1.fuel <= 0){
        console.log(chalk.bold.red.italic("Your lose game , Better luck for next time"))
        process.exit()
     }
   }
   if(num <= 0) {
     o1.fuelDecrease()
     console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
     console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
     if(o1.fuel <= 0){
        console.log(chalk.bold.green.italic("Your win"))
        process.exit()
     }
   }
   }
   if(task.opt === "Midikit"){
  p1.fuelIncrease()
  console.log(chalk.bold.italic(`Your drink health portion your fuel is ${p1.fuel}`))
   }
   if(task.opt === "Run"){
      console.log(chalk.bold.red("Your lose game , Better luck for next time"))
      process.exit()
   }
  
  }
  if(openent.select === "Panda"){
 
    let task = await inquirer.prompt([{
     name: "opt",
     type: "list",
     message: "Select an openent",
     choices: ["Attack", "Midikit" ,"Run"]
 }]);
 
  if(task.opt === "Attack"){
   let num = Math.floor(Math.random() * 2)
   if(num > 0) {
     p1.fuelDecrease()
     console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
     console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
     if(p1.fuel <= 0){
        console.log(chalk.bold.red.italic("Your lose game , Better luck for next time"))
        process.exit()
     }
   }
   if(num <= 0) {
     o1.fuelDecrease()
     console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
     console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
     if(o1.fuel <= 0){
        console.log(chalk.bold.green.italic("Your win"))
        process.exit()
     }
   }
   }
   if(task.opt === "Midikit"){
  p1.fuelIncrease()
  console.log(chalk.bold.italic(`Your drink health portion your fuel is ${p1.fuel}`))
   }
   if(task.opt === "Run"){
      console.log(chalk.bold.red("Your lose game , Better luck for next time"))
      process.exit()
   }
  
  }

  if(openent.select === "Allien"){
 
    let task = await inquirer.prompt([{
     name: "opt",
     type: "list",
     message: "Select an openent",
     choices: ["Attack", "Midikit" ,"Run"]
 }]);
 
  if(task.opt === "Attack"){
   let num = Math.floor(Math.random() * 2)
   if(num > 0) {
     p1.fuelDecrease()
     console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
     console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
     if(p1.fuel <= 0){
        console.log(chalk.bold.red.italic("Your lose game , Better luck for next time"))
        process.exit()
     }
   }
   if(num <= 0) {
     o1.fuelDecrease()
     console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
     console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
     if(o1.fuel <= 0){
        console.log(chalk.bold.green.italic("Your win"))
        process.exit()
     }
   }
   }
   if(task.opt === "Midikit"){
  p1.fuelIncrease()
  console.log(chalk.bold.italic(`Your drink health portion your fuel is ${p1.fuel}`))
   }
   if(task.opt === "Run"){
      console.log(chalk.bold.red("Your lose game , Better luck for next time"))
      process.exit()
   }
  
  }
}
while(true)

 