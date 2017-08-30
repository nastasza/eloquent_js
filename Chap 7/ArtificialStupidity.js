function Plant() {
    this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(context) {
    if (this.energy > 19) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};
function PlantEater() {
    this.energy = 20;
    this.direction = randomElement(Object.keys(directions));
    this.eatCounter = 1;
}
PlantEater.prototype.act = function(context) {
    var space = context.find(" ");
    if (this.energy > 40 && space)
        return {type: "reproduce", direction: space};
    var plant = context.findAll("*");
    if (plant.length > 1) {
        if (this.eatCounter >= 0) {
            this.eatCounter = 0;
            return {type: "eat", direction: randomElement(plant)};
        } else {
            this.eatCounter++;
        }
    }
    if (space) {
        var spaces = context.findAll(" ");
        if (spaces.indexOf(this.direction) == -1) {
            this.direction = space;
        }
        return {type: "move", direction: this.direction};
    } else {
        this.direction = "s";
    }
};


function SmartPlantEater() {}

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));