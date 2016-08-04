var user = prompt("Your name").toLowerCase();
var random = true;
var meh = false;

switch (user) {
    case 'giu':
        console.log("23 years");
        if (random && meh) {
            console.log("random and meh");
        } else if (random || meh) {
            console.log("dunno.");
        } else {
            console.log("...");
        }
        break;
    case 'gio':
        console.log("20 years");
        break;
    case 'ze':
        console.log("52 years");
        break;
    default:
        console.log("dunno.");
}
