function Tiger() {
    this.energy = 40 + Math.random() * 10;
    this.direction = randomElement(Object.keys(directions));
}
Tiger.prototype.act = function (context) {
    var space = context.find(" ");
    var critter = context.find("O");
    if (critter) {
        return {type: "eat", direction: critter};
    }
    if (this.energy > 50 && space) {
        return {type: "reproduce", direction: space};
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
}

var legend = {
    "#": Wall,
    "@": Tiger,
    "O": PlantEater,
    "*": Plant};

var valley = new LifelikeWorld(
       [
           "####################################################",
           "#                 ####         ****              ###",
           "#   *  @  ##                 ########       OO    ##",
           "#   *    ##        O O                 ****       *#",
           "#       ##*                        ##########     *#",
           "#      ##***  *         ****                     **#",
           "#* **  #  *  ***  @   #########                  **#",
           "#* **  #      *               #   *              **#",
           "#     ##              #   O   #  ***@         ######",
           "#*            @       #       #   *        O  #    #",
           "#*                    #  ######                 ** #",
           "###          ****          ***                  ** #",
           "#       O                        @         O       #",
           "#   *     ##  ##  ##  ##               ###      *  #",
           "#   **         #   @          *       #####  O     #",
           "##  **  O   O  #  #    ***  ***        ###      ** #",
           "###               #   *****                    ****#",
           "####################################################"],
    legend
);
console.log(valley.toString());
for (var i = 0; i < 1000; i++) {
    valley.turn();
    console.log(valley.toString());
}


function Tiger() {}

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));