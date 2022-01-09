//Game States
//"WIN" - Player robot has defeated all enemy-robots
    //*Fight all enemy-robots
    //*Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

//function to start a new game
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 60);
var enemyAttack = 12;

var fight = function(enemyName) { 
    //repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
       // if no (false), ask question by running fight() again
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
         //if player chooses to skip
         if (promptFight ==="skip" || promptFight === "SKIP"){
            //confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
                if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //substract money from playersMoney for skipping
                playerMoney = Math.max(playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
                }
         }

//Subtract the value of `playerAttack` from the value of `enemyHealth
//if player chooses to fight, then fight
        if (promptFight ==="fight" || promptFight ==="FIGHT"){
    //generate random damage value based on player's attack number
        var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);

    // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            }
    //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName +" has died!");
            ///--award player money for winning (new!)
            playerMoney = playerMoney + 20;
            //leave while() loop since enemy is dead
            break;
            }
            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    // Generate random damage value based on player's attack number
        var damage = randomNumber(enemyAttack - 3, enemyAttack);    
            playerHealth = Math.max(0, playerHealth - damage);
    // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
       
    //check player's health
        if (playerHealth <= 0) {
         window.alert(playerName + " has died! Game over!");
         //leave while() loop if player is dead
         break;
        } else {
         window.alert(playerName + " still has " + playerHealth + " health left.");
            }
       }
}

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max-min + 1) + min);
    return value;
};

//function to start a new game
var startGame = function() {
        //reset player's stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
        //fight each enemy robot by looping over them and fighting one at a time
        for (var i =0 ; i < enemyNames.length; i++) {
               if (playerHealth > 0) {
                    //each new robot initiates a new round, so add incrementor by 1
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
           // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
                enemyHealth = randomNumber(40, 60);
                //can use debugger to pause script file
                //debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);
                //if we're not at the last enemy in the array; adding -1 will get us to last index
                if (playerHealth >0 && i < enemyNames.length -1){
                    //ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                    //if yes, take them to store() function;
                    if (storeConfirm) {
                        shop();
                        } 
                    }
                } 
                    else {
                    window.alert("You have lost your robot in battle! Game Over!");
                    break;
                    }
            }
    
        //after loop ends, player is either out of health or enemies
        endGame ();
       };
       
    var endGame = function(){
        window.alert ("The game has now ended. Let's see how you did!");
        //if player health is still alive, player wins!
        if (playerHealth > 0) {
            window.alert ("Great job, you survived the game! You now have a score of " + playerMoney + ' .');
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
    
    var shop = function(){
        //after endGame fxn def and before startGame call at end
        var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice.")
        switch (shopOptionPrompt){
            case "REFILL": //new case
            case "refill":
                if (playerMoney>=7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                } 
                else {
                    window.alert("You don't have enough money!");
                }
                break;
            
            case "UPGRADE": // new case
            case "upgrade":
                if (playerMoney>=7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;
            
            case "LEAVE"://new case
            case "leave":
                window.alert("Leaving the store.");
            
                // do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
            
                // call shop() again to force player to pick a valid option
                shop();
                break;  
             
        }
    }
    
startGame();
console.log("You have restarted the game.");