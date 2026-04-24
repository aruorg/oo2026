class Aquarium{
    length: number;//cm
    width: number;//cm
    height: number;//cm
    waterVolume: number;

    constructor(length:number, height:number, width:number){
        this.length = length;
        this.height = height;
        this.width = width;
        this.waterVolume = 0;
    }

    getAquariumVolume(): number{
        const volume = this.length*this.height*this.width;
        return volume;
    }

    //added water is in millliters but 1 ml = 1 cm3 water
    AddWater(addedWater:number):string{
        this.waterVolume += addedWater;
        let newWaterVolume = this.waterVolume;

        const maxVolume = this.getAquariumVolume();
        if (this.waterVolume > maxVolume){
            this.waterVolume = maxVolume;
            return "Aquarium is overspilling!";
        }

        return newWaterVolume + " ml water is in the aquarium.";
    }

    RemoveWater(removedWater:number):string{
        this.waterVolume -= removedWater;
        let newWaterVolume = this.waterVolume;

        if (this.waterVolume <= 0){
            this.waterVolume = 0;
            return "Aquarium is empty!";
        }

        return newWaterVolume + " ml water is in the aquarium.";
    }

    getCurrentWaterLevel():number{
        //const AquariumBaseArea = this.length * this.width;
        let currentLevel = (this.waterVolume / this.getAquariumVolume()*100);
        return currentLevel;
    }
}

let aquarium1 = new Aquarium(100, 100, 50)
console.log("Aquarium volume is: " + aquarium1.getAquariumVolume(), "cm3");
console.log(aquarium1.AddWater(1500));
console.log("Current water level is: " + aquarium1.getCurrentWaterLevel(), "%");
console.log(aquarium1.RemoveWater(50));
console.log("Current water level is: " + aquarium1.getCurrentWaterLevel(), "%");
