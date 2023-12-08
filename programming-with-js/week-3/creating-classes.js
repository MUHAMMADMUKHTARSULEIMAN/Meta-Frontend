class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  };

  toggleLights() {
    this.lightsOn = !this.lightsOn;
  };
  lightsStatus() {
      console.log('Lights on?', this.lightsOn);
  };
  getSelf() {
      console.log(this);
  };
  getPrototype() {
      var proto = Object.getPrototypeOf(this);
      console.log(proto);
  };
};

var myFirstTrain = new Train("black", true);

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  };

  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  };

  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
  };
};

var myFirstHighSpeedTrain = new HighSpeedTrain(400, true, "grey", true);