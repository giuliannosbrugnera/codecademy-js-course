var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Roberson",
    number: "(262) 585-5850",
    address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};

friends.steve = {
    firstName: "Steve",
    lastName: "Roberson",
    number: "(262) 123-4567",
    address: ['800 Main Street', 'Whitewater', 'WI', '53190']
};

var list = function(obj) {
    for (var key in obj) {
        console.log(key);
    }
};

var search = function(name) {
    for (var key in friends) {
        if (name === friends[key].firstName) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list(friends);
