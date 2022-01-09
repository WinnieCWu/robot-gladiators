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

//Alert players that they are starting the round
var fight = function(enemyName) { 
   if (playerHealth >0) {
       //each new robot initiates a new round, so add incrementor by 1
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
       //pick new enemy to fight based on the index of enemyNames
       // pick new enemy to fight based on the index of the enemyNames array
    /*
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    */
   }
   
    //repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
       // if no (false), ask question by running fight() again
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

         //if player chooses to skip
         if (promptFight ==="skip" || promptFight === "SKIP"){
            //confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
                if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //substract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
                }
         }

//Subtract the value of `playerAttack` from the value of `enemyHealth
//if player chooses to fight, then fight
        if (promptFight ==="fight" || promptFight ==="FIGHT"){
    //remove enemy's health by subtracting by the playerAttack
            enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            }
    //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName +" has died!");
            ///--award player money for winning (new!)
            playerMoney = playerMoney +20;
            //leave while() loop since enemy is dead
            break;
            }
            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` 
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
       
    //check player's health
        if (playerHealth <=0) {
         window.alert(playerName + " has died! Game over!");
         //leave while() loop if player is dead
         break;
        }else{
         window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    }

for (var i=0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
}