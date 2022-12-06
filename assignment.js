function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}

function budgetCalculator(watch,phone,laptop){
    var wcoast = watch * 50;
    var pcoast = phone * 100;
    var lcoast = laptop * 500;
    var total = wcoast + pcoast + lcoast;
    return total;
}

function hotelCost(day){
    if(day <= 10){
        var cost = day*100;
        return cost;
    }else if(day <= 20){
        var firstPhase = 1000;
        var remaining = day - 10;
        var totalcost = firstPhase + (remaining * 80);
        return totalcost;
    }else{
        var secondPhase = 1800;
        var remaining = day - 20;
        var totalcost = secondPhase + (remaining * 50);
        return totalcost;
    }
}

function megaFriend(name){
    var index = -1;
    var large = 0;
    for(i=0; i<name.length; i++){
        var temp = name[i].length;
        if(temp > large){
            large = temp;
            index = i;
        }
    }
    return name[index];
}

var meter = kilometerToMeter(17);
console.log(meter, " meter");

var budget = budgetCalculator(5, 4, 4);
console.log("Total cost =", budget, "Taka");

var hotelcost = hotelCost(25);
console.log("Hotel cost =", hotelcost, "taka");

var friend = megaFriend(["salam", "kalam", "jalam","karim uddin", "borkot"]);
console.log("Biggest name is:", friend);