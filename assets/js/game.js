//Game States
//"WIN" - Player robot has defeated all enemy-robots
    //*Fight all enemy-robots
    //*Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//you can also log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"]

var enemyHealth = 50;
var enemyAttack = 12;

var enemy1 = "Roboto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";


//Alert players that they are starting the round
var fight = function(enemyNames){
    window.alert("Welcome to Robot Gladiators!");
    for(var i = 0; i < enemyNames.length; i++){
        fight(enemyNames[i]);
    }
};

//fight();
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
//Subtract the value of `playerAttack` from the value of `enemyHealth`
//and use that result to update the value in the `enemyHealth` variabl 

//if player chooses to fight, then fight
if (promptFight ==="fight" || promptFight ==="FIGHT"){
    //remove enemy's health by subtracting by the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

    //check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyNames +" has died!");}
            else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` 
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //check player's health
    if (playerHealth <=0){
        window.alert(playerName + " has died");}
         else{
             window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //if player chooses to skip
} else if (promptFight ==="skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
    //substract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    } 
// if no (false), ask question by running fight() again
    else {
        for (var i=0; i < enemyNames.length; i++){
            fight(enemyNames[i]);
        }
    }
}   

