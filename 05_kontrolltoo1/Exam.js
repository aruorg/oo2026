var Aquarium = /** @class */ (function () {
    function Aquarium(length, height, width) {
        this.length = length;
        this.height = height;
        this.width = width;
        this.waterVolume = 0;
    }
    Aquarium.prototype.getAquariumVolume = function () {
        var volume = this.length * this.height * this.width;
        return volume;
    };
    //added water is in millliters but 1 ml = 1 cm3 water
    Aquarium.prototype.AddWater = function (addedWater) {
        this.waterVolume += addedWater;
        var newWaterVolume = this.waterVolume;
        var maxVolume = this.getAquariumVolume();
        if (this.waterVolume > maxVolume) {
            this.waterVolume = maxVolume;
            return "Aquarium is overspilling!";
        }
        return newWaterVolume + " ml water is in the aquarium.";
    };
    Aquarium.prototype.RemoveWater = function (removedWater) {
        this.waterVolume -= removedWater;
        var newWaterVolume = this.waterVolume;
        if (this.waterVolume <= 0) {
            this.waterVolume = 0;
            return "Aquarium is empty!";
        }
        return newWaterVolume + " ml water is in the aquarium.";
    };
    Aquarium.prototype.getCurrentWaterLevel = function () {
        //const AquariumBaseArea = this.length * this.width;
        var currentLevel = (this.waterVolume / this.getAquariumVolume() * 100);
        return currentLevel;
    };
    return Aquarium;
}());
var aquarium1 = new Aquarium(100, 100, 50);
console.log("Aquarium volume is: " + aquarium1.getAquariumVolume(), "cm3");
console.log(aquarium1.AddWater(1500));
console.log("Current water level is: " + aquarium1.getCurrentWaterLevel(), "%");
console.log(aquarium1.RemoveWater(50));
console.log("Current water level is: " + aquarium1.getCurrentWaterLevel(), "%");
