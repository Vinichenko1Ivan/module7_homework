// Task 5:                                    

class Devices {
    constructor (name, switchPosition, consumptionOfPower) {
    this.name = name,
    this.switchPosition = switchPosition,
    this.consumptionOfPower = consumptionOfPower,
    this.voltage = 220
    }

    fnSwitchPositionOnOff (name) {                
        if (this.switchPosition === 'off') {
            this.switchPosition = 'on';
            console.log(`WARNING! Device ${this.name} is ON!`);
        }
        else {
            this.switchPosition = 'off'
            console.log(`ATTENTION! Device ${this.name} is OFF.`);
        }
    }
}



class KitchenDevices extends Devices {
    constructor (name, switchPosition, consumptionOfPower, levelOfNoize) {
        super (name, switchPosition, consumptionOfPower);
        this.levelOfNoize = levelOfNoize;
    }

    fnUsingForWhat (name) {
        console.log('Kitchen device ' + this.name + ' using for cooking the meal.')
    }
}



class ElectronicDevices extends Devices {
    constructor (name, switchPosition, consumptionOfPower, color) {
        super (name, switchPosition, consumptionOfPower);
        this.color = color;
    }

    fnWhatUniquePossibility (name) {
        console.log('Electronic device ' + this.name + ' help create the media content')
    }
}



const mixer = new KitchenDevices ('mixer', 'off', 400, 'high')
mixer.brand = 'Maxwell' 
mixer.fnSwitchPositionOnOff(mixer)
console.log(mixer)
mixer.fnUsingForWhat(mixer)
mixer.getWeightOfMixerFn = function (weight) {
    console.log(`weight of mixer is ${weight} g`)
}
mixer.getWeightOfMixerFn(320)


const multicooker = new KitchenDevices ('multicooker', 'off', 700, 'medium')
multicooker.height = 20
multicooker.fnSwitchPositionOnOff(multicooker)
console.log(multicooker)
multicooker.fnUsingForWhat(multicooker)
multicooker.getCountOfCookingDichesFn = function (count) {
    console.log(`multicooker can cooking approximately ${count} dishes`)
}
multicooker.getCountOfCookingDichesFn(40)



const laptop = new ElectronicDevices ('laptop', 'off', 250, 'blue')
laptop.levelOfNoize = 'low'
laptop.fnSwitchPositionOnOff(laptop)
console.log(laptop)
laptop.fnWhatUniquePossibility(laptop)
laptop.getMaxAutonomicWork = function (maxAutonomicWork) {
    console.log(`maximum autonomic work of laptop is ${maxAutonomicWork} h`)
}
laptop.getMaxAutonomicWork(6.5)


const camera = new ElectronicDevices ('camera', 'off', 150, 'black')
camera.weight = 500
camera.fnSwitchPositionOnOff(camera)
console.log(camera)
camera.fnWhatUniquePossibility
camera.getPeculiarityFn = function (countOfBattery) {
    console.log(`camera have at least ${countOfBattery} removable batteries`)
}
camera.getPeculiarityFn(2)



function getSumOfPower (arr) {
    let value = 0;
    arr.forEach ((item) => {
        value += item.consumptionOfPower;
    })
    console.log(`Sum of power of devices that switch 'ON' is ${value} watt`)
}

getSumOfPower([mixer, multicooker, laptop, camera])