//Game States
//"WIN" - Player robot has defeated all enemy-robots
    //*Fight all enemy-robots
    //*Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less


var fight = function(enemy) {
    //repeat and execute as long as the enemy-robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {
       // if no (false), ask question by running fight() again
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
         //if player chooses to skip
         if (promptFight ==="skip" || promptFight === "SKIP"){
            //confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
                if (confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //substract money from playersMoney for skipping
                playerInfo.money = Math.max(playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
                }
         }

//Subtract the value of `playerAttack` from the value of `enemyHealth
//if player chooses to fight, then fight
        if (promptFight ==="fight" || promptFight ==="FIGHT"){
    //generate random damage value based on player's attack number
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            }
    //check enemy's health
        if (enemy.health <= 0){
            window.alert(enemy.name +" has died!");
            ///--award player money for winning (new!)
            playerInfo.money = playerInfo.money + 20;
            //leave while() loop since enemy is dead
            break;
            }
            else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
    // Generate random damage value based on player's attack number
        var damage = randomNumber(enemy.attack - 3, enemy.attack);    
            playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
       
    //check player's health
        if (playerInfo.health <= 0) {
         window.alert(playerInfo.name + " has died! Game over!");
         //leave while() loop if player is dead
         break;
        } else {
         window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
       }
}

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max-min + 1) + min);
    return value;
};

//function to start a new game
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money : 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, //comma!
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    //can access first robot object as enemyInfo[0], and name as enemyInfo[0].name
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];


//function to start a new game
var startGame = function() {
        //reset player's stats
    playerInfo.reset();
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    
        //fight each enemy robot by looping over them and fighting one at a time
        for (var i =0 ; i < enemyInfo.length; i++) {
               if (playerInfo.health > 0) {
                    //each new robot initiates a new round, so add incrementor by 1
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
           // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyObj = enemyInfo[i];
            // reset enemyHealth before starting new fight
                pickedEnemyObj.health = randomNumber(40, 60);
                //can use debugger to pause script file
                //debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyObj);
                //if we're not at the last enemy in the array; adding -1 will get us to last index
                if (playerInfo.health >0 && i < enemyInfo.length -1){
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
        if (playerInfo.health > 0) {
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
    
    var shop = function() {
        //after endGame fxn def and before startGame call at end
        var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice.")
        switch (shopOptionPrompt){
            case "REFILL": //new case
            case "refill":
                playerInfo.refillHealth();
                break;
            case "UPGRADE": // new case
            case "upgrade":
                playerInfo.upgradeAttack();
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