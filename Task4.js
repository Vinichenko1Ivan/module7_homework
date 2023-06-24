// Task 4:

function Devices (name, switchPosition, consumptionOfPower) {
    this.name = name,
    this.switchPosition = switchPosition,
    this.consumptionOfPower = consumptionOfPower,
    this.voltage = 220
};

Devices.prototype.fnSwitchPositionOnOff = function (name) {
    if (this.switchPosition === 'off') {
        this.switchPosition = 'on';
        console.log(`WARNING! Device ${this.name} is ON!`);
    }
    else {
        this.switchPosition = 'off'
        console.log(`ATTENTION! Device ${this.name} is OFF.`);
    }
}



KitchenDevices.prototype = new Devices();

function KitchenDevices (name, switchPosition, consumptionOfPower) {
    this.name = name,
    this.switchPosition = switchPosition,
    this.consumptionOfPower = consumptionOfPower,
    this.mainMaterial = 'ceramicglass',
    this.levelOfNoize = 'High',
    this.voltage = 220
};

KitchenDevices.prototype.fnSwitchPositionOnOff = function (name) {
    if (this.switchPosition === 'off') {
        this.switchPosition = 'on';
        console.log(`WARNING! Device ${this.name} is ON!`);
    }
    else {
        this.switchPosition = 'off'
        console.log(`ATTENTION! Device ${this.name} is OFF.`);
    }
}



ElectronicDevices.prototype = new Devices();

function ElectronicDevices (name, switchPosition, consumptionOfPower) {
    this.name = name,
    this.switchPosition = switchPosition,
    this.consumptionOfPower = consumptionOfPower,
    this.mainMaterial = 'plastic',
    this.levelOfNoize = 'Low',
    this.voltage = 220
};

ElectronicDevices.prototype.fnSwitchPositionOnOff = function (name) {
    if (this.switchPosition === 'off') {
        this.switchPosition = 'on';
        console.log(`WARNING! Device ${this.name} is ON!`);
    }
    else {
        this.switchPosition = 'off'
        console.log(`ATTENTION! Device ${this.name} is OFF.`);
    }
}



const blender = new KitchenDevices ('blender', 'off', 600);                                      
blender.color = 'transparent';
blender.fnSwitchPositionOnOff(blender);
console.log(blender);
blender.getWeightOfBlender = function (weightOfBlender) {
    console.log(`weight of blender is ${weightOfBlender} g`)
};
blender.getWeightOfBlender(2000);


const refrigerator = new KitchenDevices ('refrigerator', 'off', 900)                                    
refrigerator.color = 'beige';
refrigerator.mainMaterial = 'plastic'
refrigerator.fnSwitchPositionOnOff(refrigerator);
console.log(refrigerator);
refrigerator.getTemperatureInside = function (temperatureInside) {
    console.log(`temperature inside refrigerator is ${temperatureInside} c`)
};
refrigerator.getTemperatureInside(-5);


const laptop = new ElectronicDevices ('laptop', 'off', 250)
laptop.color = 'blue';
laptop.fnSwitchPositionOnOff(laptop);
console.log(laptop)
laptop.getMaxAutonomicWork = function (maxAutonomicWork) {
    console.log(`maximum autonomic work of laptop is ${maxAutonomicWork} h`)
};
laptop.getMaxAutonomicWork(6.5)


const batteryCharger = new ElectronicDevices ('batteryCharger', 'off', 150)
batteryCharger.color = 'white';
batteryCharger.fnSwitchPositionOnOff(batteryCharger);
console.log(batteryCharger);
batteryCharger.getTimeOfFullCharge = function (timeOfFullCharge) {
    console.log(`time of full charge of battery charger is ${timeOfFullCharge} h`)
};
batteryCharger.getTimeOfFullCharge(3.5)



function getSumPowerSwitchOn (arr) {
    let value = 0;
    arr.forEach((item) => {
        value += item.consumptionOfPower;
    })
    console.log(`Sum of power of devices that switch 'ON' is ${value} watt`)
};

getSumPowerSwitchOn([blender, refrigerator, laptop, batteryCharger])