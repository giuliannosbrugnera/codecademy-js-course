var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon for " + damageThisRound + " hit points!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You slew the dragon!");
            slaying = false;
        }
        youHit = Math.floor(Math.random() * 2);
        damageThisRound = Math.floor(Math.random() * 5 + 1);
    } else {
        console.log("The dragon has defeated you!");
        slaying = false;
    }
}
