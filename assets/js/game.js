//Game States
//"WIN" - Player robot has defeated all enemy-robots
    //*Fight all enemy-robots
    //*Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//function to start a new game
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth,playerAttack);

var startGame = function() {
    //reset player's stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //fight each enemy robot by looping over them and fighting one at a time
    for (var i =0; i < enemyNames.length; i++){
           if (playerHealth > 0) {
                //each new robot initiates a new round, so add incrementor by 1
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
       // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
            enemyHealth = 50;
            //can use debugger to pause script file
            //debugger;
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
                } 
                else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
                }
        }
    //play again 
    startGame();
    console.log("you have restarted the game.");

    //after loop ends, player is either out of health or enemies
    endGame ();
   };

var endGame = function(){
    //if player health is still alive, player wins!
    if (playerHealth > 0){
        window.alert ("The game has now ended. Let's see how you did!");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        //restart the game;
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


var fight = function(enemyName) { 
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
        if (playerHealth <= 0) {
         window.alert(playerName + " has died! Game over!");
         //leave while() loop if player is dead
         break;
        }else{
         window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
}
//this loops 3x, even if i 
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
    }